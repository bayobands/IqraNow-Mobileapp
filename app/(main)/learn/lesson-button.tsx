"use client";

import { Check, Crown, Star, MoonStar } from "lucide-react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "react-circular-progressbar/dist/styles.css";
import { Progress } from "@/components/ui/progress";

type Props = {
  id: number;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
  name: string; // ✅ Added
};

// ✅ Renamed to avoid conflict with lucide-react
const LabelIcon = ({ text }: { text: string }) => (
  <div className="h-10 w-30 text-white-700 flex items-center justify-center font-bold text-sm">
    {text}
  </div>
);

export const LessonButton = ({
  id,
  index,
  totalCount,
  locked,
  current,
  percentage,
  name,
}: Props) => {
  const cycleLength = 8;
  const cycleIndex = index % cycleLength;

  const isFirst = index === 0;
  const isLast = index === totalCount;
  const isCompleted = !current && !locked;

  const Icon = isCompleted
    ? () => <LabelIcon text={`${name}`} /> // ✅ Show lesson name for completed
    : isLast
    ? () => <LabelIcon text={`${name}`} />
    : () => <LabelIcon text={`${name}`} />;

  const content = (
    <div
      className="relative"
      style={{
        marginTop: isFirst && !isCompleted ? 60 : 24,
      }}
    >
      {current ? (
        <div>
          <Button
            size="rounded"
            variant={locked ? "locked" : "secondary"}
            className="h-[70px] w-[300px] animate-bounce"
          >
            <div
              className={cn(
                locked
                  ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                  : "fill-primary-foreground text-primary-foreground",
                isCompleted && "fill-none stroke-[4]"
              )}
            >
              <Progress className="bg-gray-100 transition-all" value={percentage} />
              <p>YAllah | يالا</p>
            </div>
          </Button>
        </div>
      ) : (
        <Button
          size="rounded"
          variant={locked ? "locked" : "secondary"}
          className="h-[70px] w-[300px]"
        >
          <Icon />
        </Button>
      )}
    </div>
  );

  if (locked) {
    return <div className="cursor-not-allowed">{content}</div>;
  }

  return <Link href={`/lesson/${id}`}>{content}</Link>;
};
