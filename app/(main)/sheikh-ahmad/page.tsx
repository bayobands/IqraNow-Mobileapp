"use client";

import { useEffect, useRef, useState } from "react";

type State = "waving" | "idle" | "thinking" | "talking" | "dancing";
type Msg = { role: "user" | "assistant"; content: string };

export default function SheikhAhmadPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [state, setState] = useState<State>("waving");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [pending, setPending] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentFetchAbort = useRef<AbortController | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // ---------- Mic: SR + MediaRecorder + Native Picker fallback ----------
  const recognitionRef = useRef<any>(null);
  const [srSupported, setSrSupported] = useState(false);
  const [listening, setListening] = useState(false);

  const mediaStreamRef = useRef<MediaStream | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const mediaChunksRef = useRef<Blob[]>([]);
  const [recording, setRecording] = useState(false);
  const [recSupported, setRecSupported] = useState(false);
  const [recMime, setRecMime] = useState<string>("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // ---------- Mic activity + cool-down (prevents iOS ducking) ----------
  const micActive = listening || recording;
  const micCooldownRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [micCooldown, setMicCooldown] = useState(false); // true briefly after mic stops

  const beginMicCooldown = (ms = 900) => {
    setMicCooldown(true);
    if (micCooldownRef.current) clearTimeout(micCooldownRef.current);
    micCooldownRef.current = setTimeout(() => setMicCooldown(false), ms);
  };

  useEffect(() => {
    if (!listening && !recording) beginMicCooldown(900); // tweak 600-1200ms as needed
  }, [listening, recording]);

  // ---------- TTS queue (so we don't play under mic/ducking) ----------
  const queuedTTS = useRef<string | null>(null); // base64 mp3

  const clearAndStopTTS = () => {
    try {
      if (audioRef.current) {
        audioRef.current.onended = null;
        audioRef.current.onerror = null;
        audioRef.current.onplay = null;
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current.load();
        audioRef.current = null;
      }
    } catch {}
  };

  const playTTS = (b64: string | null) => {
    if (!b64) {
      // no audio, just animate speaking briefly
      setState("talking");
      setTimeout(() => setState("idle"), 1500);
      return;
    }
    const a = new Audio(`data:audio/mp3;base64,${b64}`);
    // Ensure inline playback on iOS
    // @ts-ignore
    a.playsInline = true;
    a.autoplay = false;
    audioRef.current = a;
    a.onplay = () => setState("talking");
    a.onended = () => { setState("idle"); audioRef.current = null; };
    a.onerror = () => { setState("idle"); audioRef.current = null; };
    a.load();
    a.play().catch(() => {
      setState("talking");
      setTimeout(() => setState("idle"), 1500);
    });
  };

  // If mic is active or cooling down, defer TTS; otherwise, play immediately
  useEffect(() => {
    if (!micActive && !micCooldown && queuedTTS.current) {
      const toPlay = queuedTTS.current;
      queuedTTS.current = null;
      setTimeout(() => playTTS(toPlay), 140); // tiny delay so iOS fully restores audio route
    }
  }, [micActive, micCooldown]);

  // ---------- Web Speech + Recorder detection ----------
  useEffect(() => {
    // Web Speech
    const SR: any =
      (typeof window !== "undefined" &&
        ((window as any).SpeechRecognition ||
          (window as any).webkitSpeechRecognition)) ||
      null;
    setSrSupported(!!SR);
    if (SR && !recognitionRef.current) {
      const r = new SR();
      r.lang = "en-US"; // change to "ar-SA" for Arabic default
      r.interimResults = true;
      r.maxAlternatives = 1;
      r.continuous = false;
      r.onresult = (e: any) => {
        let text = "";
        for (let i = e.resultIndex; i < e.results.length; i++) {
          text += e.results[i][0].transcript;
        }
        setInput(text.trim());
      };
      r.onstart = () => setListening(true);
      r.onend = () => setListening(false);
      r.onerror = () => setListening(false);
      recognitionRef.current = r;
    }

    // MediaRecorder detection (Safari often prefers audio/mp4)
    const MR = typeof window !== "undefined" ? (window as any).MediaRecorder : undefined;
    if (MR) {
      if (MR.isTypeSupported) {
        const tryTypes = [
          "audio/webm;codecs=opus",
          "audio/webm",
          "audio/mp4;codecs=aac",
          "audio/mp4",
        ];
        for (const t of tryTypes) {
          if (MR.isTypeSupported(t)) {
            setRecMime(t);
            setRecSupported(true);
            break;
          }
        }
      } else {
        setRecSupported(true);
        setRecMime("");
      }
    }
  }, []);

  const startSR = () => {
    if (!srSupported || pending) return;
    try { recognitionRef.current?.start(); } catch {}
  };
  const stopSR = (immediate = false) => {
    try {
      if (immediate) setListening(false); // reflect UI instantly
      recognitionRef.current?.stop();
    } catch {}
  };

  const startRecording = async () => {
    if (!recSupported || pending) return;
    try {
      mediaStreamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaChunksRef.current = [];
      // @ts-ignore
      const mr = new MediaRecorder(
        mediaStreamRef.current,
        recMime ? { mimeType: recMime } : undefined
      );
      mediaRecorderRef.current = mr;

      mr.ondataavailable = (e: BlobEvent) => {
        if (e.data && e.data.size > 0) mediaChunksRef.current.push(e.data);
      };
      mr.onstart = () => setRecording(true);
      mr.onstop = async () => {
        setRecording(false);
        const blob = new Blob(mediaChunksRef.current, { type: recMime || "audio/webm" });
        const fd = new FormData();
        const ext = recMime.includes("mp4") ? "m4a" : "webm";
        fd.append("audio", blob, `speech.${ext}`);
        try {
          const res = await fetch("/api/stt", { method: "POST", body: fd });
          if (!res.ok) throw new Error("STT failed");
          const json = await res.json();
          const text: string = (json?.text || "").trim();
          if (text) setInput(text);
        } catch {
          // optionally toast error
        } finally {
          mediaStreamRef.current?.getTracks().forEach((t) => t.stop());
          mediaStreamRef.current = null;
        }
      };

      mr.start();
    } catch {
      // permission denied / unsupported
    }
  };

  const stopRecording = (immediate = false) => {
    try {
      if (immediate) setRecording(false); // reflect UI instantly
      if (mediaRecorderRef.current?.state === "recording") {
        mediaRecorderRef.current.stop();
      }
      // hard stop input route immediately to release ducking
      mediaStreamRef.current?.getTracks().forEach((t) => t.stop());
      mediaStreamRef.current = null;
    } catch {}
  };

  const openNativeRecorder = () => {
    fileInputRef.current?.click();
  };

  const handlePickedAudio = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const fd = new FormData();
    fd.append("audio", f, f.name || "speech.m4a");
    try {
      const res = await fetch("/api/stt", { method: "POST", body: fd });
      if (!res.ok) throw new Error("STT failed");
      const json = await res.json();
      const text = (json?.text || "").trim();
      if (text) setInput(text);
    } catch {
      // optionally toast error
    } finally {
      e.target.value = "";
    }
  };

  const onMicClick = () => {
    if (pending) return;
    if (srSupported) {
      listening ? stopSR(true) : startSR();
    } else if (recSupported) {
      recording ? stopRecording(true) : startRecording();
    } else {
      openNativeRecorder(); // iOS/WKWebView ultimate fallback
    }
  };

  // ---------- Force mic off before asking ----------
  const forceStopAllMic = () => {
    if (listening) stopSR(true);
    if (recording) stopRecording(true);
    beginMicCooldown(1000); // small buffer so iOS fully releases the audio route
  };

  // ---------- Video setup ----------
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.defaultMuted = true;
    const onEnded = () => {
      if (state === "waving" || state === "dancing") setState("idle");
    };
    v.addEventListener("ended", onEnded);
    const t = setTimeout(() => {
      if (v.paused) v.play().catch(() => {});
    }, 100);
    return () => {
      clearTimeout(t);
      v.removeEventListener("ended", onEnded);
    };
  }, [state]);

  // ---------- Auto-scroll ----------
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, state]);

  // ---------- Stop audio helper ----------
  const stopAudioAndFetch = async () => {
    try {
      currentFetchAbort.current?.abort();
      currentFetchAbort.current = null;
      clearAndStopTTS();
    } catch {}
    await new Promise((r) => setTimeout(r, 40));
  };

  // ---------- Submit flow ----------
  const handleSubmitWith = async (text: string) => {
    const question = text.trim();
    if (!question || pending) return;

    // Stop any mic modes before fetching (immediately, with cooldown)
    forceStopAllMic();

    setPending(true);
    setInput("");
    await stopAudioAndFetch();

    setState(question.toLowerCase().includes("dance") ? "dancing" : "thinking");

    const nextMessages: Msg[] = [...messages, { role: "user", content: question }];
    setMessages(nextMessages);

    if (question.toLowerCase().includes("dance")) {
      setMessages((p) => [...p, { role: "assistant", content: "Watch me dance!" }]);
      setPending(false);
      return;
    }

    const ctrl = new AbortController();
    currentFetchAbort.current = ctrl;

    try {
      const res = await fetch("/api/ask-sheikh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: ctrl.signal,
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok) {
        setMessages((p) => [...p, { role: "assistant", content: "Bismillah — try again." }]);
        setState("talking");
        setTimeout(() => setState("idle"), 1200);
        return;
      }

      const data = await res.json();
      const answer: string = data?.answer || "No response received.";
      const b64: string | null = data?.audio ?? null;

      setMessages((p) => [...p, { role: "assistant", content: answer }]);

      // If mic still active or iOS still releasing audio (cool-down), queue TTS; else play now
      if (micActive || micCooldown) {
        queuedTTS.current = b64;  // may be null; playTTS handles null
        setState("idle");
      } else {
        playTTS(b64);
      }
    } catch {
      setMessages((p) => [...p, { role: "assistant", content: "Sorry, an error occurred." }]);
      setState("talking");
      setTimeout(() => setState("idle"), 1200);
    } finally {
      setPending(false);
      currentFetchAbort.current = null;
    }
  };

  const handleSubmit = async () => handleSubmitWith(input);

  // ---------- UI ----------
  return (
    <div className="flex flex-col items-center justify-start bg-white px-4 pt-[24px] md:pt-20 h-full overflow-hidden">
      <h1 className="text-3xl font-bold mb-2">Sheikh Ahmad</h1>

      {/* Character video */}
      <div className="w-[320px] h-[320px] flex-shrink-0 relative mb-3">
        {(["waving", "idle", "thinking", "talking", "dancing"] as State[]).map((s) => (
          <video
            key={s}
            ref={state === s ? videoRef : undefined}
            src={`/sheikh/${s}.mp4`}
            autoPlay
            muted
            playsInline
            preload="auto"
            loop={s === "idle" || s === "thinking" || s === "talking"}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
              state === s ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        ))}
      </div>

      {/* Conversation */}
      <div className="w-full max-w-md flex-1 overflow-auto rounded-md border border-gray-200 p-3 space-y-3 mb-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`w-fit max-w-[95%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm leading-relaxed ${
              m.role === "user"
                ? "bg-blue-600 text-white ml-auto"
                : "bg-gray-100 text-gray-900 mr-auto"
            }`}
          >
            {m.content}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Input + Mic + Ask */}
      <div className="w-full max-w-md flex-shrink-0 mb-6 flex gap-2 items-stretch relative z-10">
        <input
          type="text"
          value={input}
          disabled={pending}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") handleSubmit(); }}
          placeholder={pending ? "Thinking..." : "Ask Sheikh Ahmad..."}
          className="flex-1 p-2 border rounded-lg disabled:opacity-60"
        />

        {/* Hidden native picker for ultimate fallback (iOS/WKWebView) */}
        <input
          ref={fileInputRef}
          type="file"
          accept="audio/*"
          capture={true}
          className="hidden"
          onChange={handlePickedAudio}
        />

        {/* Mic button */}
<button
  type="button"
  onClick={onMicClick}
  disabled={pending}
  title={
    pending
      ? "Please wait…"
      : srSupported
      ? (listening ? "Listening… tap to stop" : "Tap to speak")
      : recSupported
      ? (recording ? "Recording… tap to stop" : "Tap to record your question")
      : "Tap to record using your device"
  }
  className={`px-3 py-2 rounded-lg border flex items-center justify-center
    ${pending ? "opacity-50 cursor-not-allowed" : ""}
    ${(listening || recording) ? "ring-2 ring-red-400 bg-red-50" : "hover:bg-gray-50"}`}
  aria-pressed={listening || recording}
  aria-label={
    srSupported
      ? (listening ? "Stop microphone" : "Start microphone")
      : (recording ? "Stop recording" : "Start recording")
  }
>
  {listening || recording ? (
    // Mic On (active recording icon)
    <svg xmlns="http://www.w3.org/2000/svg" 
      className="h-6 w-6 text-red-600" 
      fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3z"/>
      <path d="M5 11a1 1 0 1 0-2 0 9 9 0 0 0 8 8.94V22H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.06A9 9 0 0 0 19 11a1 1 0 1 0-2 0 7 7 0 1 1-14 0z"/>
    </svg>
  ) : (
    // Mic Off (outlined idle icon)
    <svg xmlns="http://www.w3.org/2000/svg" 
      className="h-6 w-6 text-gray-600" 
      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 11a7 7 0 0 0 14 0m-7 8v-2m0 0H9m3 0h3" />
    </svg>
  )}
</button>


        <button
          onClick={handleSubmit}
          disabled={pending}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg disabled:opacity-60"
        >
          {pending ? "..." : "Ask"}
        </button>
      </div>
    </div>
  );
}