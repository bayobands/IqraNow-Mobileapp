"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Verse = {
  surah: string;
  verse_number: number;
};

export const MobileVersePopup = () => {
  const [verse, setVerse] = useState<Verse | null>(null);
  const [visible, setVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let showInterval: NodeJS.Timeout;
    let hideTimeout: NodeJS.Timeout;

    const showPopup = () => {
      fetch("/api/verse-of-the-week")
        .then((res) => res.json())
        .then((data) => {
          setVerse({ surah: data.surah, verse_number: data.verse_number });
          setShouldRender(true);
          setTimeout(() => setVisible(true), 10); // tiny delay to trigger transition
          hideTimeout = setTimeout(() => {
            setVisible(false);
            setTimeout(() => setShouldRender(false), 300); // match transition duration
          }, 5000); // show for 5 seconds
        });
    };

    showPopup();

    showInterval = setInterval(() => {
      showPopup();
    }, 10000); // every 10 seconds

    return () => {
      clearInterval(showInterval);
      clearTimeout(hideTimeout);
    };
  }, []);

  if (!verse || !shouldRender) return null;

  return (
    <div
      className={`lg:hidden fixed top-[110px] left-4 z-50 flex items-start gap-2 transition-all duration-300 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      }`}
    >
      <Image src="https://res.cloudinary.com/dkahuuvrf/image/upload/v1754542520/mascot_zehq0q.png" alt="Mascot" width={60} height={60} />
      <div className="bg-white text-gray-800 rounded-xl px-3 py-2 text-sm shadow-md">
        Check out<br />
        Surah {verse.surah}, Ayah {verse.verse_number}, <br />
        <a href="/verse-of-the-week" className="underline font-bold">Verse of the Week</a>
      </div>
    </div>
  );
};
