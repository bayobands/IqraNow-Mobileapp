"use client";

import { useEffect, useState } from "react";

type Verse = {
  text: string;
  transliteration: string;
  translation: string;
  surah: string;
  surah_id: number;
  verse_number: number;
};

export const Footer = () => {
  const [verse, setVerse] = useState<Verse | null>(null);

  useEffect(() => {
    fetch("/api/verse-of-the-week")
      .then((res) => res.json())
      .then((data) => setVerse(data))
      .catch(() => setVerse(null));
  }, []);

  return (
    <>
      {/* Desktop footer (unchanged) */}
      <footer className="hidden lg:block w-full border-t-2 border-slate-200 bg-green-700 text-white">
        <div className="max-w-screen-lg mx-auto px-6 py-6 text-center space-y-4">
          {verse ? (
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <p className="text-2xl font-bold leading-relaxed">
                Check out the verse of the week
              </p>
              <a
                href="/verse-of-the-week"
                className="text-sm underline hover:text-gray-300 transition"
              >
                — Surah {verse.surah}, Ayah {verse.verse_number}
              </a>
            </div>
          ) : (
            <p className="text-lg">Loading verse of the week...</p>
          )}

          <div className="flex justify-center gap-6 text-sm mt-4">
            <a
              href="/privacy-policy"
              className="underline hover:text-gray-300 transition"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="underline hover:text-gray-300 transition"
              aria-label="Terms of Service"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile-only legal links (simple + visible) */}
      <footer className="lg:hidden w-full border-t border-slate-200 bg-white text-slate-700">
        <nav
          className="max-w-screen-md mx-auto px-4 py-3 flex items-center justify-center gap-6 text-sm"
          aria-label="Legal"
        >
          <a
            href="/privacy-policy"
            className="underline hover:text-slate-900 transition"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="underline hover:text-slate-900 transition"
            aria-label="Terms of Service"
          >
            Terms of Service
          </a>
        </nav>
      </footer>
    </>
  );
};
