"use client";

import { useEffect, useRef, useState } from "react";
import { Loader } from "lucide-react";

type Props = {
  question: string;
  infoimageSrc?: string;   // Mobile video
  infoimageSrc2?: string;  // Desktop video
  desktop?: boolean;
};

export const InfoBubble = ({
  infoimageSrc,
  infoimageSrc2,
  desktop = false,
}: Props) => {
  const mobileRef = useRef<HTMLVideoElement>(null);
  const desktopRef = useRef<HTMLVideoElement>(null);

  const [loadingMobile, setLoadingMobile] = useState<boolean>(!!infoimageSrc && !desktop);
  const [loadingDesktop, setLoadingDesktop] = useState<boolean>(!!(desktop || infoimageSrc2));

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024 || desktop;
    const videoEl = isDesktop ? desktopRef.current : mobileRef.current;

    if (videoEl) {
      videoEl.play().catch(() => {});
    }
  }, [infoimageSrc, infoimageSrc2, desktop]);

  return (
    <div className="mb-6">
      {/* Mobile Video */}
      {!desktop && infoimageSrc && (
        <div className="relative block lg:hidden w-[100vw] h-auto">
          {loadingMobile && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          )}
          <video
            ref={mobileRef}
            src={infoimageSrc}
            playsInline
            controls={false}
            className="w-[100vw] h-auto"
            preload="auto"
            onLoadedData={() => setLoadingMobile(false)}
            onPlaying={() => setLoadingMobile(false)}
            onWaiting={() => setLoadingMobile(true)}
          />
        </div>
      )}

      {/* Desktop Video */}
      {(desktop || infoimageSrc2) && (
        <div className="hidden lg:flex justify-center">
          <div className="relative w-[1200px] h-[600px]">
            {loadingDesktop && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader className="h-6 w-6 animate-spin text-muted-foreground" />
              </div>
            )}
            <video
              ref={desktopRef}
              src={infoimageSrc2 || infoimageSrc}
              playsInline
              controls={false}
              className="w-[1200px] h-[600px]"
              preload="auto"
              onLoadedData={() => setLoadingDesktop(false)}
              onPlaying={() => setLoadingDesktop(false)}
              onWaiting={() => setLoadingDesktop(true)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
