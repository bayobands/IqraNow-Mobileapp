import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page91 = () => {
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
          ٱلضَّارُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Ad-Dhārr – The Distresser
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Ad-Dhārr</strong> is the One who allows harm to occur when there is a hidden wisdom. 
          He never harms unjustly. Any pain or difficulty He permits is for a greater good — to teach, protect, or awaken the soul.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/91.m4a" />

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
          Sometimes things hurt — a scrape, a test, a sadness. 
          <strong>Ad-Dhārr</strong> only lets that happen if there’s a lesson or growth behind it. 
          Like medicine that tastes bad but makes you better.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Ad-Dhārr</strong> comes from the root <strong>ض-ر-ر (Ḍād-Rā-Rā)</strong>, which means to harm, damage, or cause adversity. 
            Allah never harms without wisdom or without purpose — His will is always just.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🩹 Hidden Mercy in Hardship</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li>Ad-Dhārr lets difficulty in — but never without reason</li>
            <li>He uses hardship to bring growth, patience, or protection</li>
            <li>Even pain can lead to closeness to Allah</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/90" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/92" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Reflected in the Qur’an</h3>
        <p><strong>Ad-Dhārr</strong> is not mentioned by name, but His attribute is reflected in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah Al-Anʿām (6:17)</li>
          <li>Surah Yunus (10:107)</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/6/17"
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

export default Page91;
