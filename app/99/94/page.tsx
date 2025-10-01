import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page94 = () => {
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
          ٱلْهَادِي
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Hādī – The Guide
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Hādī</strong> is the One who gently leads His creation to the straight path. 
          He guides hearts to truth, minds to clarity, and souls to peace. 
          Every step toward goodness is a result of His guidance.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/94.m4a" />

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
          If you ever felt lost or didn’t know what to do, 
          <strong>Al-Hādī</strong> is the One who helps you find your way. 
          He’s like the light in a dark forest or a map that shows the path home.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Hādī</strong> comes from the root <strong>ه-د-ي (Hā-Dāl-Yā)</strong>, 
            which means to guide, to lead, or to show the way. 
            It’s the same root used in the word <em>hidayah</em> (guidance).
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🧭 Inner & Outer Guidance</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li>Al-Hādī shows both the road and how to walk it</li>
            <li>He guides hearts, minds, and actions</li>
            <li>His guidance is constant and never-ending</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/93" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/95" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Hādī</strong> is referenced in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah Al-Furqān (25:31)</li>
          <li>Surah Al-Qasas (28:56)</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/28/56"
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

export default Page94;
