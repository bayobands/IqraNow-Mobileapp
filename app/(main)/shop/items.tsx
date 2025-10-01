"use client";

import { refillHearts } from "@/actions/user-progress";
import { createStripeUrl } from "@/actions/user-subscription";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useEffect, useState, useTransition } from "react";

const POINTS_TO_REFILL = 10;

type Props = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

function detectInAppWebView(): boolean {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent || (navigator as any).vendor || "";

  const isAndroid = /Android/i.test(ua);
  const isIOS = /iPhone|iPad|iPod/i.test(ua);

  // Android WebView commonly includes ; wv
  const isAndroidWV =
    /; wv\)/i.test(ua) ||
    (isAndroid && /Version\/\d+\.\d+/i.test(ua) && /Chrome/i.test(ua));

  // iOS WKWebView often exposes window.webkit.messageHandlers
  const hasWKMessageHandlers =
    typeof (window as any).webkit?.messageHandlers !== "undefined";

  // Natively (or your shell) can add a custom token to UA
  const fromNatively = /Natively/i.test(ua);

  // Other common in-app browsers if you ever want to hide there too:
  // const inSocialApp = /(FBAN|FBAV|Instagram|Line|WeChat)/i.test(ua);

  return Boolean(isAndroidWV || (isIOS && hasWKMessageHandlers) || fromNatively);
}

export const Items = ({ hearts, points, hasActiveSubscription }: Props) => {
  const [pending, startTransition] = useTransition();
  const [inApp, setInApp] = useState(false);

  useEffect(() => {
    try {
      setInApp(detectInAppWebView());
    } catch {
      setInApp(false);
    }
  }, []);

  const onRefillHearts = () => {
    if (pending || hearts === 5 || points < POINTS_TO_REFILL) return;
    startTransition(() => {
      refillHearts().catch(() => toast.error("Something went wrong"));
    });
  };

  const onUpgrade = () => {
    startTransition(() => {
      createStripeUrl()
        .then((response) => {
          if (response?.error === "missing_email") {
            toast.error("Please add an email before upgrading.");
            window.location.href = "/user";
            return;
          }
          if (response?.data) {
            window.location.href = response.data;
          }
        })
        .catch(() => {
          toast.error("Something went wrong.");
        });
    });
  };

  const onDonate = () => {
    window.location.href = "/donate";
  };

  return (
    <ul className="w-full">
      {/* Refill Hearts (always shown) */}
      <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
        <Image src="/heart.png" alt="Heart" height={60} width={60} />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Refill Hearts
          </p>
        </div>
        <Button
          onClick={onRefillHearts}
          disabled={pending || hearts === 5 || points < POINTS_TO_REFILL}
        >
          {hearts === 5 ? (
            "Full"
          ) : (
            <div className="flex items-center gap-x-1">
              <Image
                src="/blue_body_square.png"
                alt="Points"
                height={20}
                width={20}
              />
              <p>{POINTS_TO_REFILL}</p>
            </div>
          )}
        </Button>
      </div>

      {/* In-App notice (shown only inside iOS/Android app shell) */}
      {inApp && (
        <div className="w-full p-4 text-center text-sm text-muted-foreground border-t-2">
          Payments are not offered in the mobile app. Visit our website to
          manage your plan or donate.
        </div>
      )}

      {/* Unlimited Hearts & Donation — hidden only inside app shell */}
      {!inApp && (
        <>
          {/* Unlimited Hearts */}
          <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2">
            <Image src="/EpicHeart.png" alt="Unlimited" height={60} width={60} />
            <div className="flex-1">
              <p className="text-neutral-700 text-base lg:text-xl font-bold">
                Unlimited Hearts
              </p>
            </div>
            <Button onClick={onUpgrade} disabled={pending || hasActiveSubscription}>
              {hasActiveSubscription ? "Active" : "Upgrade"}
            </Button>
          </div>

          {/* Donation */}
          <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2">
            <Image
              src="https://res.cloudinary.com/dkahuuvrf/image/upload/v1754542085/donation_uybiu4.png"
              alt="Donate"
              height={60}
              width={60}
            />
            <div className="flex-1">
              <p className="text-neutral-700 text-base lg:text-xl font-bold">
                Support Us
              </p>
            </div>
            <Button onClick={onDonate}>Donate</Button>
          </div>
        </>
      )}
    </ul>
  );
};
