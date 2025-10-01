import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page36 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْعَلِيُّ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-ʿAliyy – The Most High
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-ʿAliyy</strong> is the One who is far above all weaknesses, limits, or comparisons. 
          He is high above the heavens, above all creation, and above every form of imperfection. 
          His status is absolute greatness, and His knowledge and power reach everything.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/36.m4a" />

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
          When we feel small, scared, or unsure — remember that <strong>Al-ʿAliyy</strong> is higher than our fears and stronger than any challenge. 
          He watches over everything and lifts up those who trust in Him.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-ʿAliyy</strong> comes from the root <strong>ع-ل-و (ʿA-L-W)</strong>, meaning **to rise**, **to be high**, or **to be exalted**. 
            It indicates complete transcendence — beyond creation, beyond flaws, beyond limits.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-ʿAliyy vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-ʿAliyy</strong> – Supremely elevated in status and essence</li>
            <li><strong>Al-Mutaʿālī</strong> – The One who is exalted beyond all comprehension</li>
            <li><strong>Al-ʿAẓīm</strong> – Magnificent in greatness and strength</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/35" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/37" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-ʿAliyy</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 2:255 (Āyat al-Kursī)</li>
          <li>Surah 42:4</li>
          <li>Surah 31:30</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%B9%D9%84%D9%8A"
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

export default Page36;
