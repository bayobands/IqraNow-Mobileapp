"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Loader } from "lucide-react";

type Info2BubbleProps = {
  info2imageSrc_desktop: string;
  info2imageSrc_mobile: string;
  audioSrc: string;
};

export const Info2Bubble = ({
  info2imageSrc_desktop,
  info2imageSrc_mobile,
  audioSrc,
}: Info2BubbleProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useEffect(() => {
    audioRef.current?.play().catch(() => {});
  }, [audioSrc]);

  return (
    <div className="relative p-4 text-center">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      )}
      <Image
        src={isMobile ? info2imageSrc_mobile : info2imageSrc_desktop}
        alt="Info2 Image"
        width={800}
        height={200}
        className="mx-auto rounded-lg"
        onLoad={() => setLoading(false)}
      />
      <audio ref={audioRef} src={audioSrc} hidden />
    </div>
  );
};
