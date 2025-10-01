import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page54 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْمَتِينُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Matīn – The Firm One
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Matīn</strong> is the One whose strength is firm, solid, and unwavering. 
          Unlike temporary power, His strength is constant and never fails. 
          He supports all of creation without ever being fatigued or weakened.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/54.m4a" />

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
          Imagine the strongest wall that can never fall — that’s the firmness of <strong>Al-Matīn</strong>. 
          When life shakes you, remember that Allah is always steady, never shaken.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Matīn</strong> comes from the root <strong>م-ت-ن (M-T-N)</strong>, which means **to be firm**, **solid**, **strong**, or **durable**. 
            It emphasizes Allah’s unshakable power and stability.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Matīn vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Matīn</strong> – Unshakable and unbreakable in power</li>
            <li><strong>Al-Qawiyy</strong> – Possesses immense strength</li>
            <li><strong>Al-ʿAzīz</strong> – Mighty, noble, and never defeated</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/53" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/55" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Matīn</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 51:58</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%85%D8%AA%D9%8A%D9%86"
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

export default Page54;
