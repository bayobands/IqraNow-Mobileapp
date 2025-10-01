"use client";

import { useEffect, useState } from "react";

type VerseLine = {
  arabic: string;
  transliteration: string;
  translation: string;
};

type Verse = {
  lines: VerseLine[];
  surah: string;
  surah_id: number;
  verse_number: number;
};

export default function VerseOfTheWeekPage() {
  const [verse, setVerse] = useState<Verse | null>(null);

  useEffect(() => {
    fetch("/api/verse-of-the-week")
      .then((res) => res.json())
      .then((data) => setVerse(data));
  }, []);

  return (
    <main className="max-w-2xl mx-auto px-6 py-12 text-center space-y-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold">Verse of the Week</h1>

      {verse ? (
        <>
          <div className="space-y-6">
            {verse.lines.map((line, idx) => (
              <div key={idx} className="space-y-2">
                <p className="text-2xl font-bold leading-relaxed">{line.arabic}</p>
                <p className="text-md italic text-gray-600 dark:text-gray-300">
                  {line.transliteration}
                </p>
                <p className="text-md text-gray-700 dark:text-gray-200">
                  “{line.translation}”
                </p>
              </div>
            ))}
          </div>

          <a
            href={`https://quran.com/${verse.surah_id}/${verse.verse_number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-6 text-sm underline text-blue-600 hover:text-blue-400 transition"
          >
            View full verse on Quran.com ↗
          </a>

          <p className="text-sm text-gray-500">
            Surah {verse.surah}, Ayah {verse.verse_number}
          </p>
        </>
      ) : (
        <p>Loading verse...</p>
      )}
    </main>
  );
}
