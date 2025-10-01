import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page78 = () => {
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
          ٱلْمُتَعَالِي
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Mutaʿālī – The Self-Exalted
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Mutaʿālī</strong> means the One who is far above and beyond all imperfections, limits, and weaknesses. 
          He is exalted in His power, knowledge, and majesty. Nothing compares to Him, and He is never affected by creation.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/78.m4a" />

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
          We all need help, we all make mistakes — but <strong>Al-Mutaʿālī</strong> is perfect and above all of that. 
          His greatness can’t be measured, and He never gets tired or confused.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Mutaʿālī</strong> comes from the root <strong>ع-ل-و (ʿAyn-Lām-Wāw)</strong>, which means to be high, lofty, or elevated. 
            It expresses Allah’s supreme position above anything in existence — in status, glory, and essence.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🪶 Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-ʿAliyy</strong> – The Most High (focuses on high rank and honor)</li>
            <li><strong>Al-Mutaʿālī</strong> – The Self-Exalted (stresses absolute transcendence and perfection)</li>
            <li>Both names remind us of Allah’s elevated nature, beyond comparison</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/77" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/79" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Mutaʿālī</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah Ar-Raʿd (13:9)</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/13/9"
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

export default Page78;
