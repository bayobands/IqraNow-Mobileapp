"use client";

import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reflections = [
  {
    verse: "وَلۡيَعۡفُوا۟ وَلۡيَصۡفَحُوٓا۟ۗ أَلَا تُحِبُّونَ أَن يَغۡفِرَ ٱللَّهُ لَكُمۡۗ وَٱللَّهُ غَفُورٞ رَّحِيمٌۭ",
    translation: "Let them pardon and overlook. Do you not wish that Allah should forgive you? And Allah is Forgiving and Merciful.",
    source: "Surah An-Nur (24:22)",
    background: `This verse was revealed after the slander incident against Aisha (RA)... Mistah, a relative of Abu Bakr (RA), was involved in spreading rumors. Abu Bakr vowed to stop helping him — but Allah revealed this verse to remind him to forgive, especially those who seek forgiveness.`,
    keyMessage: [
      "Forgive others even when they hurt you deeply.",
      "Don’t hold grudges—pardon and overlook.",
      "Why? Because you also need Allah’s forgiveness.",
    ],
    reflection: `This verse flips the question on you: “Don’t you want Allah to forgive you?” If you do, then be the kind of person who forgives others — even when it’s hard. That’s how mercy flows — both ways.`,
  },
  {
    verse: "قَالَ رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَٱغْفِرْ لِي فَغَفَرَ لَهُ",
    translation: "He said, 'My Lord, I have wronged myself, so forgive me,' and He forgave him.",
    source: "Surah Al-Qasas (28:16)",
    background: `This is when Musa (AS) accidentally killed a man. He turned to Allah in sincere repentance — and Allah forgave him immediately. This shows how near Allah’s mercy is for those who return to Him.`,
    keyMessage: [
      "Repent quickly and sincerely when you make a mistake.",
      "Don’t be ashamed to return to Allah — He is waiting.",
      "Allah’s door is always open to those who come back.",
    ],
    reflection: `This story reminds us: even prophets made mistakes. But what matters is how fast we turn back to Allah. And Allah — Al-Ghafūr, At-Tawwāb — forgives us right then and there.`,
  },
];

const Page34 = () => {
  const [index, setIndex] = useState<number>(0);
  const current = reflections[index];

  const next = () => setIndex((prev: number) => (prev + 1) % reflections.length);
  const prev = () => setIndex((prev: number) => (prev - 1 + reflections.length) % reflections.length);

  return (
    <div
      className={styles.quranLayout}
      style={{
        padding: "20px",
        fontFamily: "sans-serif",
        maxWidth: "100%",
        margin: "auto",
      }}
    >
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px", textAlign: "center" }}>ٱلْغَفُورُ</h1>
        <h2 style={{ fontSize: "20px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Ghafūr – The Most Forgiving
        </h2>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.7",
            marginBottom: "30px",
            textAlign: "justify",
          }}
        >
          <strong>Al-Ghafūr</strong> is the One who forgives even the most serious and major of sins.
          No matter how heavy the mistake, His mercy covers it.
          His forgiveness is vast, generous, and filled with compassion.
        </p>

        <AudioPlayer src="/99/audio/34.m4a" />

        {/* Kid-friendly Reflection Card */}
<div
  style={{
    position: "relative",
    marginBottom: "30px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  }}
>
  {/* Reflection Card */}
  <div
    style={{
      fontSize: "15px",
      lineHeight: "1.8",
      backgroundColor: "#fff8e1",
      padding: "20px",
      borderRadius: "12px",
      border: "1px solid #ffecb3",
    }}
  >
    <p>
      <strong>Lessons taught to us by Allah</strong>
    </p>
    <br />
    <h3>
      <strong>🔹 Snippet of The Verse</strong>
    </h3>
    <p style={{ fontWeight: "bold", fontSize: "22px" }}>{current.verse}</p>
    <p>{current.translation}</p>
    <p>{current.source}</p>
    <br />
    <h3>
      <strong>🔹 Background</strong>
    </h3>
    <p>{current.background}</p>
    <br />
    <h3>
      <strong>🔹 Key Message</strong>
    </h3>
    <ul>
      {current.keyMessage.map((msg, i) => (
        <li key={i}>
          <strong>{msg}</strong>
        </li>
      ))}
    </ul>
    <br />
    <h3>
      <strong>🔹 Reflection</strong>
    </h3>
    <p>{current.reflection}</p>
  </div>

  {/* Arrow Buttons - BELOW */}
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginTop: "10px",
    }}
  >
    <button
      onClick={prev}
      style={{
        backgroundColor: "#fff3cd",
        borderRadius: "9999px",
        padding: "8px",
        border: "1px solid #f8d67c",
      }}
    >
      <ChevronLeft />
    </button>
    <button
      onClick={next}
      style={{
        backgroundColor: "#fff3cd",
        borderRadius: "9999px",
        padding: "8px",
        border: "1px solid #f8d67c",
      }}
    >
      <ChevronRight />
    </button>
  </div>
</div>


        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
            <strong>Al-Ghafūr</strong> comes from the root <strong>غ-ف-ر (Gh-F-R)</strong>, which means <em>to cover</em>, <em>to shield</em>, or <em>to forgive</em>.
            It describes forgiveness that hides faults completely — like they never existed.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>⚖️ Al-Ghafūr vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "15px", marginTop: "10px" }}>
            <li><strong>Al-Ghafūr</strong> – Forgives the most major of sins</li>
            <li><a href="/99/14"><strong>Al-Ghafar</strong></a> – Forgives repeatedly</li>
            <li><a href="/99/82"><strong>Al-ʿAfūw</strong></a> – Completely erases sins</li>
            <li><a href="/99/80"><strong>At-Tawwāb</strong></a> – Accepts sincere repentance</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/33" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/35" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
          <a href="/study/99" className={`${styles.navButton} ${styles.next}`}>
            ↩ Back to All Names
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Ghafūr</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 39:53</li>
          <li>Surah 16:110</li>
          <li>Surah 85:14</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%BA%D9%81%D9%88%D8%B1"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Quran.com →
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page34;
