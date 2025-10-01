import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page87 = () => {
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
          ٱلْجَامِعُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Jāmiʿ – The Gatherer
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Jāmiʿ</strong> is the One who gathers people, things, and events together with purpose and precision. 
          He will gather all of creation on the Day of Judgment and unites hearts, ideas, and destinies in this life.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/87.m4a" />

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
          Have you ever had a big family reunion or seen all your friends in one place? 
          <strong>Al-Jāmiʿ</strong> will one day gather every single person who ever lived — and He never misses anyone.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Jāmiʿ</strong> comes from the root <strong>ج-م-ع (J-M-ʿ)</strong>, which means to gather, bring together, or collect in an organized way. 
            This name reflects both physical gathering and spiritual unity.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🔗 Gathering & Unity</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li>He gathers people on Earth and in the Hereafter</li>
            <li>He unites hearts, minds, and causes</li>
            <li>Even scattered lives come together under His plan</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/86" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/88" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Jāmiʿ</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah Āli ʿImrān (3:9)</li>
          <li>Surah Ash-Shūrā (42:29)</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/3/9"
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

export default Page87;
