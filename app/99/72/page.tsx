import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page72 = () => {
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
          ٱلْمُؤَخِّرُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Mu’akhkhir – The One Who Delays
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Mu’akhkhir</strong> is the One who postpones, delays, and sets things back according to His divine wisdom. 
          Sometimes what we want is delayed for our protection, growth, or to fulfill a bigger purpose.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/72.m4a" />

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
          Ever wait a long time for something and wonder why? 
          <strong>Al-Mu’akhkhir</strong> might be protecting you or saving something better for later. 
          Allah knows when the time is right — and His timing is perfect.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Mu’akhkhir</strong> comes from the root <strong>أ-خ-ر (ʾ-Kh-R)</strong>, which means to delay, postpone, or make something come later. 
            It shows Allah’s control over time and sequence, always for a wise reason.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Mu’akhkhir vs Al-Muqaddim</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Muqaddim</strong> – Brings things forward</li>
            <li><strong>Al-Mu’akhkhir</strong> – Delays or postpones them</li>
            <li>Both reflect Allah’s mastery of perfect timing</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/71" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/73" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Mu’akhkhir</strong> is not mentioned by name in the Qur’an,</p>
        <p>but its concept appears in many verses about Allah’s will and decree over events and timing.</p>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Quran →
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page72;
