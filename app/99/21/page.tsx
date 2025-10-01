import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page21 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْبَاسِطُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Bāsit – The Expander, The One Who Gives Abundantly
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Bāsit</strong> is the One who extends His mercy, spreads blessings, and provides space for growth and healing. 
          He expands our hearts with happiness, our sustenance with ease, and our lives with opportunities.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/21.m4a" />

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
          When you feel joy, when things in your life suddenly get better, or when your heart feels light — that’s <strong>Al-Bāsit</strong> giving you space to breathe, feel, and grow.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Bāsit</strong> comes from the root <strong>ب-س-ط (B-S-T)</strong>, meaning **to extend**, **to spread**, or **to expand**. 
            It’s used for things like extending a hand or stretching the earth.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Bāsit vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Qābiḍ</strong> – Restrains with wisdom</li>
            <li><strong>Al-Bāsit</strong> – Expands with love and generosity</li>
            <li><strong>Ar-Razzāq</strong> – Continuously provides</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/20" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/22" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Bāsit</strong> is referenced in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 2:245</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%A8%D8%A7%D8%B3%D8%B7"
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

export default Page21;
