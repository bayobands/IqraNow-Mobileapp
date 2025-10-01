import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page30 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱللَّطِيفُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Laṭīf – The Subtle, Most Kind
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Laṭīf</strong> is the One who is gentle and subtle in His care. 
          He helps you in ways you don’t even realize, placing ease and guidance in your path without making it obvious. 
          His kindness reaches you softly — like the breeze or a sudden comfort in a hard moment.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/30.m4a" />

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
          Have you ever had something really hard suddenly get easier? 
          Or someone show up just when you needed them? That’s <strong>Al-Laṭīf</strong> — caring for you in the kindest, quietest ways.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Laṭīf</strong> comes from the root <strong>ل-ط-ف (L-Ṭ-F)</strong>, meaning **gentle**, **subtle**, **kind**, or **delicate**. 
            It refers to actions done so gracefully they’re almost invisible — but full of love.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Laṭīf vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Laṭīf</strong> – Gentle and subtle in His kindness</li>
            <li><strong>Ar-Raḥīm</strong> – Always merciful and loving</li>
            <li><strong>Al-Khabīr</strong> – Knows all hidden things and acts wisely</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/29" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/31" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Laṭīf</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 6:103</li>
          <li>Surah 42:19</li>
          <li>Surah 67:14</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%84%D8%B7%D9%8A%D9%81"
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

export default Page30;
