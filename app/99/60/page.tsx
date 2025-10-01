import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page60 = () => {
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
          ٱلْمُحْيِي
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Muḥyī – The Giver of Life
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Muḥyī</strong> is the One who gives life to the living. 
          He brings the dead back to life and revives hearts, souls, and nations. 
          Every heartbeat, breath, and birth is a sign of His divine power and mercy.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/60.m4a" />

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
          Your heart beats without you telling it to. Plants grow, birds hatch, and people are born — all because <strong>Al-Muḥyī</strong> gives life. 
          He’s the reason everything is alive.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Muḥyī</strong> comes from the root <strong>ح-ي-ي (Ḥ-Y-Y)</strong>, which means to live, to be alive, or to revive. 
            It describes Allah’s power to create and restore life both physically and spiritually.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Muḥyī vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Muḥyī</strong> – Gives and restores life</li>
            <li><strong>Al-Mumīt</strong> – Takes away life when the time is right</li>
            <li><strong>Al-Bāʿith</strong> – Resurrects on the Day of Judgment</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/59" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/61" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Muḥyī</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 30:50</li>
          <li>Surah 2:73</li>
          <li>Surah 7:158</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%85%D8%AD%D9%8A%D9%8A"
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

export default Page60;
