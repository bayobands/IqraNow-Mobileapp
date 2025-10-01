import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page63 = () => {
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
          ٱلْقَيُّومُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Qayyūm – The Sustainer
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Qayyūm</strong> is the One who sustains and manages all that exists. 
          Nothing can function or survive without His constant support. 
          He never rests, sleeps, or forgets. Every atom is under His care, every moment.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/63.m4a" />

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
          Imagine holding up the sky, the stars, the trees, and every single heartbeat — 
          <strong>Al-Qayyūm</strong> does all of that and never gets tired. 
          He’s the reason everything stays in place.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Qayyūm</strong> comes from the root <strong>ق-و-م (Q-W-M)</strong>, meaning to stand, support, or be self-sufficient. 
            It highlights Allah’s perfection in maintaining all existence without any need or dependence.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Qayyūm vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Qayyūm</strong> – Supports and sustains all creation</li>
            <li><strong>Al-Ḥayy</strong> – Lives eternally and perfectly</li>
            <li><strong>Ar-Razzāq</strong> – Provides what is needed for that life</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/62" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/64" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Qayyūm</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 2:255 (Ayat al-Kursi)</li>
          <li>Surah 3:2</li>
          <li>Surah 20:111</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%82%D9%8A%D9%88%D9%85"
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

export default Page63;
