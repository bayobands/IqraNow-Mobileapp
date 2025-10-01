"use client";

import { cn } from "@/lib/utils";
import { Check, Lock, X } from "lucide-react";
import Image from "next/image";
import { useState, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

type Props = {
  title: string;
  id: number;
  imageSrc: string;
  onClick: (id: number) => void; // used when signed in
  disabled?: boolean;
  active?: boolean;
  /** Optional override; if omitted we auto-detect via Clerk */
  locked?: boolean;
};

export const Card = ({
  title,
  id,
  imageSrc,
  disabled,
  onClick,
  active,
  locked: lockedOverride,
}: Props) => {
  const router = useRouter();
  const { isSignedIn } = useAuth();          // 👈 auto-detect guest
  const locked = lockedOverride ?? !isSignedIn;

  const [showModal, setShowModal] = useState(false);

  const handleActivate = () => {
    if (disabled) return;
    if (locked) {
      setShowModal(true);                    // 👈 show popup for guests
    } else {
      onClick(id);                           // ✅ signed-in flow
    }
  };

  const handleKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleActivate();
    }
  };

  return (
    <>
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled || undefined}
        aria-label={title + (locked ? " (locked)" : "")}
        onClick={handleActivate}
        onKeyDown={handleKey}
        className={cn(
          "relative border-4 rounded-xl hover:bg-black/5 cursor-pointer active:border-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] w-full max-w-[200px] sm:w-[200px] outline-none focus:ring-2 focus:ring-red-500/40",
          disabled && "pointer-events-none opacity-50 cursor-not-allowed"
        )}
      >
        <div className="h-6 w-full flex items-center justify-end">
          {active && (
            <div className="rounded-md bg-green-600 flex items-center justify-center p-1.5">
              <Check className="text-white stroke-[4] h-4 w-4" />
            </div>
          )}
        </div>

        <div className="relative">
          <Image
            src={imageSrc}
            alt={title}
            height={140}
            width={140}
            className="rounded-lg drop-shadow-md border object-cover"
            draggable={false}
          />
          {locked && (
            <div className="absolute inset-0 rounded-lg bg-black/35 flex items-center justify-center">
              <div className="rounded-full bg-white/95 shadow px-2.5 py-1.5 flex items-center gap-1.5">
                <Lock className="h-4 w-4" />
                <span className="text-xs font-medium">Locked</span>
              </div>
            </div>
          )}
        </div>

        <p className="text-neutral-700 text-center font-bold mt-3">{title}</p>
      </div>

      {showModal && (
        <>
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div role="dialog" aria-modal="true" className="w-full max-w-md rounded-2xl bg-white shadow-xl p-6">
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-semibold text-neutral-800">
                  Create an account to access gameplay
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-1 rounded-md hover:bg-neutral-100"
                  aria-label="Close"
                >
                  <X className="h-5 w-5 text-neutral-600" />
                </button>
              </div>

              <p className="mt-2 text-sm text-neutral-600">
                You need an account to access <span className="font-medium">Gameplay</span>,{" "}
                <span className="font-medium">Shop</span>, and{" "}
                <span className="font-medium">Leaderboard</span>.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => router.push("/")}
                  className="w-full inline-flex items-center justify-center rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition"
                >
                  Go to Main Page
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
