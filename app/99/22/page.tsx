import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page22 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْخَافِضُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Khāfiḍ – The One Who Lowers
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Khāfiḍ</strong> is the One who lowers whomever He wills — in status, strength, or pride — as part of His perfect justice and wisdom. 
          He brings down the arrogant and humbles the oppressors, always balancing mercy with might.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/22.m4a" />

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
          If someone is being unfair or acting proud, <strong>Al-Khāfiḍ</strong> is the One who can gently bring them back down to earth. 
          Allah knows how to teach us humility, even when we forget.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Khāfiḍ</strong> comes from the root <strong>خ-ف-ض (Kh-F-Ḍ)</strong>, which means **to lower**, **to reduce**, or **to humble**.
            It’s the opposite of raising something up — it’s a divine balancing act.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Khāfiḍ vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Khāfiḍ</strong> – Lowers and humbles</li>
            <li><strong>Ar-Rāfiʿ</strong> – Raises and uplifts</li>
            <li><strong>Al-Ḥakam</strong> – Judges with fairness</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/21" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/23" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Khāfiḍ</strong> is understood through divine action but is not mentioned directly as a Name.</p>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%AE%D8%A7%D9%81%D8%B6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Search on Quran.com →
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page22;
