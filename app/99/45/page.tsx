import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page45 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْوَاسِعُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Wāsiʿ – The All-Encompassing
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Wāsiʿ</strong> is the One whose knowledge, mercy, and provision encompass everything. 
          Nothing is beyond His reach. His wisdom is wide, His forgiveness is wide, and His generosity knows no limits.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/45.m4a" />

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
          No matter how big your problem is, <strong>Al-Wāsiʿ</strong> is bigger. 
          His mercy wraps around the whole world. He always has room for your prayers, your hopes, and your mistakes.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Wāsiʿ</strong> comes from the root <strong>و-س-ع (W-S-ʿ)</strong>, which means **to be wide**, **spacious**, or **abundant**. 
            It shows how vast Allah’s knowledge, power, and mercy truly are.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Wāsiʿ vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Wāsiʿ</strong> – His knowledge, mercy, and generosity fill all space</li>
            <li><strong>Al-ʿAlīm</strong> – His knowledge encompasses all things specifically</li>
            <li><strong>Ar-Raḥmān</strong> – His mercy reaches everyone, everywhere</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/44" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/46" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Wāsiʿ</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 2:115</li>
          <li>Surah 2:247</li>
          <li>Surah 5:54</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%88%D8%A7%D8%B3%D8%B9"
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

export default Page45;
