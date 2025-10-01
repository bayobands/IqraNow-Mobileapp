"use client";

import Image from "next/image";

type Props = {
  question: string;
};

export const Intro3Bubble = ({ question }: Props) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-x-6 mb-0 px-4">
      {/* Speech Bubble - appears first on mobile, second on desktop */}
      <div className="relative py-5 px-4 border-2 rounded-xl text-sm lg:text-base bg-white text-gray-800 order-1 lg:order-2 lg:mt-20 ">
        {question}
        {/* Bubble Tail */}
        <div
          className="
            absolute 
            lg:-left-3 lg:top-1/2 
            -bottom-2 left-1/2 
            w-0 h-0 
            border-x-8 border-x-transparent 
            border-t-8 border-t-gray 
            transform 
            -translate-x-1/2 
            lg:translate-x-0 
            lg:-translate-y-1/2 
            lg:rotate-90
          "
        />
      </div>

      {/* Image - appears second on mobile, first on desktop */}
      <Image
        src="/INTRO3.png"
        alt="Mascot"
        height={200}
        width={200}
        className="w-[200px] lg:w-[300px] order-2 lg:order-1"
      />
    </div>
  );
};
