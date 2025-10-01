"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Info3BubbleProps = {
  info3imageSrc_desktop: string;
  info3imageSrc_mobile: string;
};

export const Info3Bubble = ({
  info3imageSrc_desktop,
  info3imageSrc_mobile,
}: Info3BubbleProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <div className="p-4 text-center">
      <Image
        src={isMobile ? info3imageSrc_mobile : info3imageSrc_desktop}
        alt="Info3 Image"
        width={800}
        height={200}
        className="mx-auto rounded-lg"
      />
    </div>
  );
};


