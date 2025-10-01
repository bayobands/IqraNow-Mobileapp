import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page69 = () => {
  return (
    <div
      className={styles.quranLayout}
      style={{
        padding: "40px",
        fontFamily: "sans-serif",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>
          ٱلْقَادِرُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Qādir – The Omnipotent
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Qādir</strong> is the One who has perfect power and ability to do whatever He wills. 
          He is capable of creating, changing, giving life, taking life, and doing all things — nothing is beyond Him.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/69.m4a" />

        {/* Kid-friendly Reflection */}
        <div
          style={{
            fontSize: "16px",
            lineHeight: "1.8",
            backgroundColor: "#fff8e1",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "30px",
            border: "1px solid #ffecb3",
          }}
        >
          <strong>Reflection:</strong><br /><br />
          If you had a magic wand, you still couldn’t do what Allah can. 
          <strong>Al-Qādir</strong> can do anything — make the stars shine, heal a broken heart, or bring the dead to life.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Qādir</strong> comes from the root <strong>ق-د-ر (Q-D-R)</strong>, which means to measure out, to decree, or to be able to. 
            It reflects Allah’s total power, control, and precise planning of all things.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Qādir vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Qādir</strong> – The One with absolute power</li>
            <li><strong>Al-Qahhār</strong> – The Subduer, who overpowers all</li>
            <li><strong>Al-ʿAzīz</strong> – The Almighty, with unbeatable strength</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/68" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/70" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Qādir</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 6:65</li>
          <li>Surah 75:40</li>
          <li>Surah 46:33</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%82%D8%A7%D8%AF%D8%B1"
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

export default Page69;
