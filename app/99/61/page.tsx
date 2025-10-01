import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page61 = () => {
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
          ٱلْمُمِيتُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Mumīt – The Creator of Death
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Mumīt</strong> is the One who causes all living things to die at their appointed time. 
          Death is not the end, but a transition. Allah gives life, and He takes it back with full wisdom, mercy, and justice.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/61.m4a" />

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
          Everything that lives will one day return to Allah. 
          <strong>Al-Mumīt</strong> reminds us to live kindly, knowing we’ll return to Him, 
          the Most Just and Most Merciful.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Mumīt</strong> comes from the root <strong>م-و-ت (M-W-T)</strong>, meaning <em>to die</em> or <em>to cause death</em>. 
            It emphasizes that Allah alone controls the beginning and end of life.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Mumīt vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Mumīt</strong> – Brings death at the right time</li>
            <li><strong>Al-Muḥyī</strong> – Gives and restores life</li>
            <li><strong>Al-Qayyūm</strong> – Sustains all of existence</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/60" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/62" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Mumīt</strong> is referenced in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 3:156</li>
          <li>Surah 15:23</li>
          <li>Surah 2:258</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%85%D9%85%D9%8A%D8%AA"
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

export default Page61;
