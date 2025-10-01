"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Loader } from "lucide-react";

type Props = {
  INTRO2_video_1?: string;
  INTRO2_response_1?: string;

  INTRO2_video_2?: string;
  INTRO2_response_2?: string;

  INTRO2_video_3?: string;
  INTRO2_response_3?: string;

  INTRO2_video_4?: string;
  INTRO2_response_4?: string;

  INTRO2_video_5?: string;
  INTRO2_response_5?: string;

  INTRO2_video_6?: string;
  INTRO2_response_6?: string;

  onDone?: () => void; // called after user clicks the last response
};

type Step = { video: string; response?: string };

function buildSteps(p: Props): Step[] {
  const raw: Array<{ video?: string; response?: string }> = [
    { video: p.INTRO2_video_1, response: p.INTRO2_response_1 },
    { video: p.INTRO2_video_2, response: p.INTRO2_response_2 },
    { video: p.INTRO2_video_3, response: p.INTRO2_response_3 },
    { video: p.INTRO2_video_4, response: p.INTRO2_response_4 },
    { video: p.INTRO2_video_5, response: p.INTRO2_response_5 },
    { video: p.INTRO2_video_6, response: p.INTRO2_response_6 },
  ];
  return raw.reduce<Step[]>((acc, r) => {
    const v = typeof r.video === "string" ? r.video.trim() : "";
    if (v) acc.push({ video: v, response: r.response });
    return acc;
  }, []);
}

export const Intro2Bubble = (props: Props) => {
  const steps = useMemo(() => buildSteps(props), [props]);
  const [idx, setIdx] = useState(0);
  const [showResponse, setShowResponse] = useState(false);
  const [loading, setLoading] = useState(true); // spinner control
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Autoplay on first user interaction (mobile policy)
  useEffect(() => {
    const handleFirstClick = () => {
      videoRef.current?.play().catch(() => {});
    };
    window.addEventListener("click", handleFirstClick, { once: true });
    return () => window.removeEventListener("click", handleFirstClick);
  }, []);

  // Handle each step: reset response, show spinner, play, and reveal response when ended
  useEffect(() => {
    setShowResponse(false);
    setLoading(true);

    const vid = videoRef.current;
    if (!vid) return;

    const onLoadedData = () => setLoading(false);
    const onPlaying = () => setLoading(false);
    const onWaiting = () => setLoading(true);
    const onEnded = () => setShowResponse(true);

    vid.addEventListener("loadeddata", onLoadedData);
    vid.addEventListener("playing", onPlaying);
    vid.addEventListener("waiting", onWaiting);
    vid.addEventListener("ended", onEnded);

    vid.play().catch(() => {});

    return () => {
      vid.removeEventListener("loadeddata", onLoadedData);
      vid.removeEventListener("playing", onPlaying);
      vid.removeEventListener("waiting", onWaiting);
      vid.removeEventListener("ended", onEnded);
    };
  }, [idx]);

  if (steps.length < 2) {
    return (
      <div className="mb-6 px-4 flex justify-center text-neutral-600">
        Intro2 requires at least 2 video/response pairs. Found {steps.length}.
      </div>
    );
  }

  const isLast = idx === steps.length - 1;
  const current = steps[idx];

  const goNext = () => {
    if (isLast) {
      props.onDone?.();
    } else {
      setIdx((i) => i + 1);
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      goNext();
    }
  };

  return (
    <div className="mb-6 px-4 flex flex-col items-center text-center gap-4">
      <div className="text-sm text-neutral-500">
        Step {idx + 1} of {steps.length}
      </div>

      <div className="w-full max-w-md relative">
        {/* Spinner (no background) */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Loader className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        )}

        <video
          key={current.video} // re-mount between steps
          ref={(el) => {
            videoRef.current = el ?? null;
          }}
          src={current.video}
          playsInline
          controls={false}
          preload="auto"
          className="w-full h-auto rounded-xl border"
        />

        {/* Response acts like a button to proceed */}
        {showResponse && current.response && current.response.trim().length > 0 && (
          <button
            type="button"
            onClick={goNext}
            onKeyDown={handleKey}
            className="mt-3 text-sm px-4 py-3 w-full rounded-xl border bg-white hover:bg-neutral-50 active:bg-neutral-100 transition
                       text-neutral-800 text-left"
            aria-label={isLast ? "Continue" : "Next"}
          >
            {current.response}
            <span className="ml-2 text-neutral-400 text-xs">
              {isLast ? "(tap to continue)" : "(tap for next)"}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
