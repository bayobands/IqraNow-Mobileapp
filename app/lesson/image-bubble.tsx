

// components/image-bubble.tsx
import Image from "next/image";

type Props = {
  visualImageSrc: string;
  question: string;
};

export const ImageBubble = ({ visualImageSrc, question }: Props) => {
  return (
    <div className="rounded-xl  p-4 w-full max-w-md mx-auto text-center">
      <div className="mb-4 text-lg font-semibold">{question}</div>
      <Image
        src={visualImageSrc}
        alt="Visual challenge"
        width={1000}
        height={800}
        className="rounded-xl object-cover w-full h-auto"
      />
    </div>
  );
};
