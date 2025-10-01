import Image from "next/image";
import { useAudio } from "react-use";
import { Play, Pause } from "lucide-react";

type Props = {
  imageSrc: string;
  audioSrc: string;
  question: string;
};

export const AudioBubble = ({ imageSrc, audioSrc, question }: Props) => {
  const [audio, state, controls] = useAudio({
    src: audioSrc,
    autoPlay: false,
  });

  return (
    <div className="flex flex-col items-center gap-4 mb-6">
      {/* Question */}
      <p className="text-center text-lg lg:text-xl font-bold">{question}</p>

      {/* Image + Play button side by side */}
      <div className="flex items-center gap-4">
        <div className="relative w-[200px] h-[200px]">
          <Image
            src={imageSrc}
            alt="Audio Visual"
            fill
            className="object-contain rounded-xl"
          />
        </div>

        <button
          onClick={() => (state.playing ? controls.pause() : controls.play())}
          className="rounded-full p-4 border-2 hover:bg-neutral-100"
          aria-label={state.playing ? "Pause Audio" : "Play Audio"}
        >
          {state.playing ? (
            <Pause className="w-6 h-6 text-red-500" />
          ) : (
            <Play className="w-6 h-6 text-green-600" />
          )}
        </button>
      </div>

      {/* Hidden audio element */}
      <div className="hidden">{audio}</div>
    </div>
  );
};
