"use client";

import { useMemo, useRef, useState } from "react";
import { Mic, MicOff, Play, CheckCircle, XCircle, RotateCcw } from "lucide-react";

/* ---------------- Utility helpers ---------------- */
function stripArabicDiacritics(s: string) {
  return (s || "").replace(/[\u064B-\u0652\u0670]/g, "");
}
function stripTatweel(s: string) {
  return (s || "").replace(/\u0640/g, "");
}
function normalizeArabicForCompare(s: string) {
  return stripArabicDiacritics(stripTatweel((s || "").normalize("NFC"))).replace(
    /[^\p{Script=Arabic}\p{Number}]/gu,
    ""
  );
}
function normalizeLatinForCompare(s: string) {
  return (s || "").toLowerCase().normalize("NFC").replace(/[^a-z0-9]/g, "");
}
function levenshtein(a: string, b: string) {
  const m = a.length, n = b.length;
  if (!m) return n;
  if (!n) return m;
  const dp = new Array(n + 1);
  for (let j = 0; j <= n; j++) dp[j] = j;
  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = dp[j];
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + cost);
      prev = tmp;
    }
  }
  return dp[n];
}
function similarity(a: string, b: string) {
  if (!a && !b) return 1;
  const dist = levenshtein(a, b);
  const maxLen = Math.max(a.length, b.length) || 1;
  return 1 - dist / maxLen;
}

/* ---------------- Component ---------------- */
type Props = {
  /** Target Arabic or Latin text */
  text: string;
  /** Manual transliteration (preferred) */
  transliteration?: string;
  /** Optional reference audio */
  audioRef?: string;
  /** Force recognition language */
  lang?: string;
  /** Pass threshold (0..1). Default 0.8 */
  passThreshold?: number;
};

export default function SpeakChallenge({
  text,
  transliteration,
  audioRef,
  lang,
  passThreshold = 0.8,
}: Props) {
  const [listening, setListening] = useState(false);
  const [heard, setHeard] = useState("");
  const [liveHeard, setLiveHeard] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [passed, setPassed] = useState<boolean | null>(null);
  const [playing, setPlaying] = useState(false); // ✅ show "playing" state
  const recRef = useRef<any>(null);
  const manualStopRef = useRef(false);
  const audioElRef = useRef<HTMLAudioElement | null>(null); // ✅ keep one audio instance

  const isArabicTarget = useMemo(() => /[\p{Script=Arabic}]/u.test(text), [text]);
  const targetTranslit = transliteration || text;

  function evaluate(transcript: string) {
    if (!transcript) return;
    let sc = 0;
    if (isArabicTarget && /[\p{Script=Arabic}]/u.test(transcript)) {
      sc = similarity(normalizeArabicForCompare(transcript), normalizeArabicForCompare(text));
    } else {
      const goldLatin = transliteration || text;
      sc = similarity(normalizeLatinForCompare(transcript), normalizeLatinForCompare(goldLatin));
    }
    setScore(sc);
    setPassed(sc >= passThreshold);
  }

  const playExample = () => {
    if (!audioRef) return;
    // stop any previous playback first
    if (audioElRef.current) {
      try { audioElRef.current.pause(); audioElRef.current.currentTime = 0; } catch {}
    }
    const a = new Audio(audioRef);
    audioElRef.current = a;
    setPlaying(true);
    a.onended = () => setPlaying(false);
    a.onpause = () => {
      // If paused (e.g., by navigating away), reflect that
      if (a.currentTime < a.duration) setPlaying(false);
    };
    a.play().catch(() => setPlaying(false));
  };

  const startListening = () => {
    const SR =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      alert("Speech recognition not supported in this browser.");
      return;
    }

    // stop any leftover recognition
    if (recRef.current) {
      try { recRef.current.stop(); } catch {}
      recRef.current = null;
    }

    manualStopRef.current = false;
    setHeard(""); setLiveHeard(""); setScore(null); setPassed(null);

    const recognition = new SR();
    recRef.current = recognition;
    recognition.lang = lang || (isArabicTarget ? "ar-SA" : "en-US");
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = () => setListening(true);
    recognition.onresult = (e: any) => {
      let interim = "";
      let final = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const res = e.results[i];
        if (res.isFinal) final += res[0].transcript;
        else interim += res[0].transcript;
      }
      if (interim) {
        setLiveHeard(interim);
        evaluate(interim);
      }
      if (final) {
        const combined = (heard + " " + final).trim();
        setHeard(combined);
        setLiveHeard("");
        evaluate(combined);
      }
    };
    recognition.onend = () => {
      setListening(false);
      recRef.current = null;
      if (manualStopRef.current) return;
      const stable = (liveHeard || heard);
      if (stable) evaluate(stable);
    };
    // (optional) surface errors quietly without breaking UI
    recognition.onerror = () => {
      setListening(false);
      recRef.current = null;
    };

    recognition.start();
  };

  const stopListening = () => {
    manualStopRef.current = true;
    if (recRef.current) {
      try { recRef.current.stop(); } catch {}
      recRef.current = null;
    }
    setListening(false);
  };

  const retry = () => {
    // stop example audio if playing
    if (audioElRef.current) {
      try { audioElRef.current.pause(); audioElRef.current.currentTime = 0; } catch {}
      audioElRef.current = null;
    }
    setPlaying(false);

    // fully reset recognition & UI, then restart listening
    stopListening();
    setHeard(""); setLiveHeard(""); setScore(null); setPassed(null);
    manualStopRef.current = false;
    startListening();
  };

  const shownTranscript = liveHeard || heard;
  const meterWidth = Math.max(0, Math.min(100, Math.round((score ?? 0) * 100)));
  const evaluated = score !== null;

  return (
    <div className="p-4 flex flex-col items-center text-center gap-3">
      <h2 className="text-xl font-bold">Say: {text}</h2>
      <div className="text-sm text-neutral-700">({targetTranslit})</div>

      {audioRef && (
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={playExample}
            disabled={playing}
            className={`flex items-center gap-2 px-3 py-2 rounded-md ${
              playing ? "bg-green-400 text-white" : "bg-green-600 text-white"
            }`}
            aria-busy={playing}
          >
            <Play size={18} />
            {playing ? "Playing..." : "Hear Example"}
          </button>
          {playing && (
            <div className="text-xs text-neutral-600">Now playing reference audio…</div>
          )}
        </div>
      )}

      <div className="flex gap-3">
        {!listening ? (
          <button
            onClick={startListening}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white"
          >
            <Mic size={20} /> Start Speaking
          </button>
        ) : (
          <button
            onClick={stopListening}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-700 text-white"
          >
            <MicOff size={20} /> Stop
          </button>
        )}

        {evaluated && !listening && (
          <button
            onClick={retry}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-800 text-white"
          >
            <RotateCcw size={18} /> Retry
          </button>
        )}
      </div>

      {shownTranscript && (
        <div className="w-full max-w-md mt-3 text-left">
          <div className="text-sm text-neutral-600">You said:</div>
          <div className="mt-1 p-3 rounded border bg-white">{shownTranscript}</div>

          {score !== null && (
            <>
              <div className="mt-3 text-sm">
                Similarity score: <span className="font-semibold">{meterWidth}%</span>
              </div>
              <div className="mt-2 w-full h-2 rounded bg-neutral-200 overflow-hidden">
                <div
                  className={`h-2 ${
                    meterWidth >= passThreshold * 100 ? "bg-green-500" : "bg-red-500"
                  }`}
                  style={{ width: `${meterWidth}%` }}
                />
              </div>

              <div className="mt-3 flex items-center gap-2">
                {passed ? (
                  <>
                    <CheckCircle className="text-green-600" />
                    <span className="font-semibold text-green-700">
                      Great! That’s a solid match.
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="text-red-600" />
                    <span className="font-semibold text-red-700">
                      Close — try again.
                    </span>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
