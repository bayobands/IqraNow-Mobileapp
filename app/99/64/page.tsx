import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page64 = () => {
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
          ٱلْوَاجِدُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Wājid – The Perceiver
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Wājid</strong> is the One who perceives everything — He is never unaware, never lacking. 
          Nothing is hidden from Him, and He never needs help to find anything. 
          He is rich beyond need, and complete in knowledge and power.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/64.m4a" />

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
          When you lose something, you look for it. But <strong>Al-Wājid</strong> never loses anything. 
          He sees, knows, and finds everything — even the tiniest ant walking in the dark.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Wājid</strong> comes from the root <strong>و-ج-د (W-J-D)</strong>, which means to find, perceive, or feel. 
            It reflects Allah’s complete knowledge, perception, and richness — He never needs to seek or search.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Wājid vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Wājid</strong> – Perceives all without seeking</li>
            <li><strong>Al-Khabīr</strong> – Fully aware of all inner details</li>
            <li><strong>Al-ʿAlīm</strong> – All-Knowing, aware of all facts</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/63" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/65" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Wājid</strong> is not mentioned directly by name in the Qur’an,</p>
        <p>but the meaning is present in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 93:6 – "Did He not find you an orphan and give you refuge?"</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/93/6"
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

export default Page64;
