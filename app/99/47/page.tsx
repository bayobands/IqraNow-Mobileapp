import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page47 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْوَدُودُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Wadūd – The Most Loving
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Wadūd</strong> is the One who loves His creation deeply, purely, and unconditionally. 
          His love isn’t just a feeling — it’s shown in constant care, mercy, forgiveness, and guidance. 
          He loves even when we turn away, and He always invites us back.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/47.m4a" />

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
          When you feel alone or sad, remember <strong>Al-Wadūd</strong> is always loving you. 
          He gives you air to breathe, hearts to connect with, and moments of happiness — all out of His love.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Wadūd</strong> comes from the root <strong>و-د-د (W-D-D)</strong>, which means **to love**, **to be affectionate**, or **to long for good for others**. 
            It’s a warm, nurturing love that’s full of kindness.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Wadūd vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Wadūd</strong> – Loves deeply and acts out of that love</li>
            <li><strong>Ar-Raḥmān</strong> – Shows mercy to all, rooted in love</li>
            <li><strong>Al-Ḥalīm</strong> – Patient and gentle with those He loves</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/46" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/48" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Wadūd</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 11:90</li>
          <li>Surah 85:14</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%88%D8%AF%D9%88%D8%AF"
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

export default Page47;
