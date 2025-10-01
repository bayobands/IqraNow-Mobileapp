import { useKey, useMedia } from "react-use";
import { CheckCircle, XCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {
  onCheck: () => void;
  status: "correct" | "wrong" | "completed" | "none";
  disabled?: boolean;
  lessonId?: number;
  buttonLabel?: string; // ✅ new optional override
};

export const Footer = ({
  onCheck,
  status,
  disabled,
  lessonId,
  buttonLabel,
}: Props) => {
  useKey("Enter", onCheck, {}, [onCheck]);
  const isMobile = useMedia("(max-width: 1024px)");

  const showCorrect = status === "correct";
  const showWrong = status === "wrong";
  const showCompleted = status === "completed";

  const label =
    buttonLabel ??
    (status === "none"
      ? "Check"
      : status === "correct"
      ? "Next"
      : status === "wrong"
      ? "Retry"
      : "Continue");

  return (
    <footer
      className={cn(
        "lg:-h[140px] h-[100px] border-t-2",
        showCorrect && "border-transparent bg-green-100",
        showWrong && "border-transparent bg-rose-100"
      )}
    >
      <div className="max-w-[1140px] h-full mx-auto flex items-center justify-between px-6 lg:px-10">
        {showCorrect && (
          <div className="text-green-500 font-bold text-base lg:text-2xl flex items-center">
            <CheckCircle className="h- w-6 lg:h-10 lg:w-10 mr-4" />
            Nice Work!!!
          </div>
        )}
        {showWrong && (
          <div className="text-rose-500 font-bold text-base lg:text-2xl flex items-center">
            <XCircle className="h- w-6 lg:h-10 lg:w-10 mr-4" />
            Trash!
          </div>
        )}
        {showCompleted && (
          <Button
            variant="default"
            size={isMobile ? "sm" : "lg"}
            onClick={() => (window.location.href = `/lesson/${lessonId}`)}
          >
            Practice again
          </Button>
        )}
        <Button
          disabled={disabled}
          className="ml-auto"
          onClick={onCheck}
          size={isMobile ? "sm" : "lg"}
          variant={showWrong ? "danger" : "secondary"}
        >
          {label}
        </Button>
      </div>
    </footer>
  );
};
