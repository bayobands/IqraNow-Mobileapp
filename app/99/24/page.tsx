import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page24 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْمُعِزُّ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Muʿizz – The Giver of Honor
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Muʿizz</strong> is the One who grants dignity, respect, and strength to whomever He wills. 
          Real honor doesn’t come from fame or followers — it comes from Allah, who lifts people through faith, character, and trust in Him.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/24.m4a" />

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
          When you do the right thing, even if no one claps for you — <strong>Al-Muʿizz</strong> sees you. 
          He is the One who gives true honor, and that kind of respect lasts forever.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Muʿizz</strong> comes from the root <strong>ع-ز-ز (‘A-Z-Z)</strong>, meaning **to be strong**, **respected**, or **glorious**. 
            It also forms the name <strong>Al-‘Azīz</strong>, “The Almighty.”
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Muʿizz vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Muʿizz</strong> – Gives honor to whom He wills</li>
            <li><strong>Al-Mudhill</strong> – Lowers the arrogant</li>
            <li><strong>Al-‘Azīz</strong> – The All-Powerful, always honored</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/23" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/25" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Muʿizz</strong> is referenced through meaning in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 3:26</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/3/26"
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

export default Page24;
