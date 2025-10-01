"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Loader } from "lucide-react";

type Props = {
  question: string;
  introImgSrc?: string;   // mobile
  introImgSrc2?: string;  // desktop
};

export const IntroBubble = ({
  question,
  introImgSrc,
  introImgSrc2,
}: Props) => {
  const mobileRef = useRef<HTMLVideoElement>(null);
  const desktopRef = useRef<HTMLVideoElement>(null);

  const isVideo = (src?: string) =>
    !!src && (src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".ogg"));

  // loading states (true until the specific media is ready)
  const [loadingMobile, setLoadingMobile] = useState<boolean>(!!introImgSrc);
  const [loadingDesktop, setLoadingDesktop] = useState<boolean>(!!introImgSrc2);

  useEffect(() => {
    const handlePlay = () => {
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop && desktopRef.current) {
        desktopRef.current.play().catch(() => {});
      } else if (!isDesktop && mobileRef.current) {
        mobileRef.current.play().catch(() => {});
      }
    };

    window.addEventListener("click", handlePlay, { once: true });
    return () => window.removeEventListener("click", handlePlay);
  }, [introImgSrc, introImgSrc2]);

  return (
    <div className="mb-6 px-4 flex justify-center">
      {/* Mobile */}
      {introImgSrc && (
        <div className="relative block lg:hidden w-full max-w-md h-auto">
          {loadingMobile && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Loader className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          )}

          {isVideo(introImgSrc) ? (
            <video
              ref={mobileRef}
              src={introImgSrc}
              playsInline
              controls={false}
              className="w-full h-auto"
              preload="auto"
              onLoadedData={() => setLoadingMobile(false)}
              onPlaying={() => setLoadingMobile(false)}
              onWaiting={() => setLoadingMobile(true)}
            />
          ) : (
            <Image
              src={introImgSrc}
              alt="Mobile Intro"
              width={400}
              height={300}
              className="w-full h-auto"
              // Next/Image: prefer onLoadingComplete for reliable signal
              onLoadingComplete={() => setLoadingMobile(false)}
            />
          )}
        </div>
      )}

      {/* Desktop */}
      {introImgSrc2 && (
        <div className="relative hidden lg:block w-full max-w-3xl h-auto">
          {loadingDesktop && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Loader className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          )}

          {isVideo(introImgSrc2) ? (
            <video
              ref={desktopRef}
              src={introImgSrc2}
              playsInline
              controls={false}
              className="w-full h-auto"
              preload="auto"
              onLoadedData={() => setLoadingDesktop(false)}
              onPlaying={() => setLoadingDesktop(false)}
              onWaiting={() => setLoadingDesktop(true)}
            />
          ) : (
            <Image
              src={introImgSrc2}
              alt="Desktop Intro"
              width={800}
              height={500}
              className="w-full h-auto"
              onLoadingComplete={() => setLoadingDesktop(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};
