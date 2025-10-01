import { challenges } from "@/db/schema";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback } from "react";

import { useAudio, useKey } from "react-use";

type Props ={
    id:number;
    imageSrc: string | null;
    audioSrc: string | null;
    text: string;
    shortcut: string;
    selected?: boolean;
    onClick: () => void;
    disabled?: boolean;
    status?:"correct" | "wrong" | "none",
    type: typeof challenges.$inferSelect["type"];
};

export const Card =({
    id,
    imageSrc,
    audioSrc,
    text,
    shortcut,
    selected,
    onClick,
    status,
    disabled,
    type,
}: Props) => {
    const [audio, _, controls] = useAudio({ src: audioSrc || "" });

    const handleClick = useCallback(() => {
        if(disabled) return;

        controls.play();
        onClick();
    }, [disabled, onClick, controls]);

    useKey(shortcut, handleClick, {}, [handleClick]);
    return (
        <div
        onClick={handleClick}
        className={cn(
            "h-full border-2 rounded-xl hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-4",
            selected && "border-sky-300 bg-sky-100 hover:bg-sky-100",
            selected && status === "correct" 
            && "border-green-300 bg-green-100 hover:bg-green-100",
            selected && status === "wrong" 
            && "border-rose-300 bg-rose-100 hover:bg-rose-100",
            disabled && "pointer-events-none hover:bg-white",
            type === "ASSIST" && "lg:p-3 w-full",
            type === "INTRO" && "lg:p-3 w-full",


        )}
        >
            {audio}
            {imageSrc && (
                <div className="relative aspect-square mb-4 max-h-[100px] lg:max-h-[160px] w-full">
                    <Image src={imageSrc} fill alt={text}/>
                </div>

            )}
            <div>
                <p className="text-center font-semibold text-lg font-sans">
                    {text}
                </p>
            </div>
        </div>
    );
};


