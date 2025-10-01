import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page74 = () => {
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
          ٱلْآخِرُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Ākhir – The Last
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Ākhir</strong> means the One who will remain after everything else ends. 
          He is everlasting, the final reality, and nothing will exist after Him. 
          All creation will end, but He will remain — forever.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/74.m4a" />

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
          Everything will one day be gone — the stars, our homes, even us — 
          but <strong>Al-Ākhir</strong> will always be there. He is the forever after, never fading away.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Ākhir</strong> comes from the root <strong>أ-خ-ر (ʾ-Kh-R)</strong>, which means to come last, to end, or to remain behind. 
            It shows that Allah’s existence never ends — He is the last, with no one after Him.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Awwal vs Al-Ākhir</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Awwal</strong> – The First, before all things</li>
            <li><strong>Al-Ākhir</strong> – The Last, after all things</li>
            <li>Allah surrounds all time — beginning to end — with His eternal existence</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/73" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/75" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Ākhir</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah Al-Hadid (57:3) – “He is the First and the Last...”</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/57/3"
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

export default Page74;
