import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page37 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْكَبِيرُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Kabīr – The Most Great
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Kabīr</strong> means that Allah is greater than anything else. 
          His greatness has no limit, and everything in creation is small compared to Him. 
          He is powerful, majestic, and infinitely beyond our understanding.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/37.m4a" />

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
          When you say “Allahu Akbar” (Allah is the Greatest), you're remembering that no problem, fear, or challenge is too big. 
          <strong>Al-Kabīr</strong> is always greater — and He’s on your side.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Kabīr</strong> comes from the root <strong>ك-ب-ر (K-B-R)</strong>, which means **to be great**, **to be vast**, or **to grow in size or importance**. 
            It's the same root as the word *takbīr* (saying “Allahu Akbar”).
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Kabīr vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Kabīr</strong> – Great in being, power, and status</li>
            <li><strong>Al-ʿAẓīm</strong> – Majestic in strength and grandeur</li>
            <li><strong>Al-Jalīl</strong> – Majestic in honor and dignity</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/36" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/38" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Kabīr</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 34:23</li>
          <li>Surah 40:12</li>
          <li>Surah 22:62</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%83%D8%A8%D9%8A%D8%B1"
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

export default Page37;
