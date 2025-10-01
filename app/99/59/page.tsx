import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page59 = () => {
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
          ٱلْمُعِيدُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Muʿīd – The Restorer
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Muʿīd</strong> is the One who brings back what was lost or destroyed. 
          He will return creation after death and restore everything in the Hereafter. 
          His power isn't limited to beginning things — He also brings them back again.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/59.m4a" />

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
          When you lose your toy or something breaks, you wish it could come back. 
          <strong>Al-Muʿīd</strong> can bring back anything — even life after death. 
          He is the Restorer of hope, of life, and of all that is good.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Muʿīd</strong> comes from the root <strong>ع-و-د (ʿA-W-D)</strong>, meaning to return, repeat, or bring back. 
            It emphasizes Allah’s ability to return everything to its original form or to restore it in a better way.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Muʿīd vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Muʿīd</strong> – Brings back and restores what once was</li>
            <li><strong>Al-Mubdi’</strong> – Begins creation from nothing</li>
            <li><strong>Al-Bāʿith</strong> – Brings the dead back to life on the Day of Judgment</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/58" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/60" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Muʿīd</strong> is referenced in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 10:4</li>
          <li>Surah 21:104</li>
          <li>Surah 30:11</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%85%D8%B9%D9%8A%D8%AF"
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

export default Page59;
