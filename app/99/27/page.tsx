import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page27 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْبَصِيرُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Baṣīr – The All-Seeing
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Baṣīr</strong> is the One who sees everything — every action, every tear, every kind deed done in secret. 
          He sees what’s in the light and the dark, what’s public and private. His seeing is perfect and complete.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/27.m4a" />

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
          Even when no one notices the good you do, <strong>Al-Baṣīr</strong> sees you. He sees every smile you give, 
          every mess you clean, and every prayer you make — even if no one else does.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Baṣīr</strong> comes from the root <strong>ب-ص-ر (B-Ṣ-R)</strong>, meaning **to see clearly**, **to understand**, 
            or **to perceive**. It’s not just physical sight — it includes deep awareness and insight.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Baṣīr vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Baṣīr</strong> – Sees all things clearly</li>
            <li><strong>As-Samīʿ</strong> – Hears all things completely</li>
            <li><strong>Al-Khabīr</strong> – Is aware of the hidden and subtle</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/26" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/28" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Baṣīr</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 4:58</li>
          <li>Surah 17:1</li>
          <li>Surah 42:27</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%A8%D8%B5%D9%8A%D8%B1"
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

export default Page27;
