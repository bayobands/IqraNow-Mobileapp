import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page97 = () => {
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
          ٱلْوَارِثُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Wārith – The Inheritor
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Wārith</strong> is the One who remains after everything else passes away. 
          He is the true owner of all things — after people leave this world, and even when the universe ends, everything returns to Him.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/97.m4a" />

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
          When someone passes away, they leave behind their toys, their house, their things. 
          But <strong>Al-Wārith</strong> is the One who truly owns everything. 
          Even after we’re gone, everything goes back to Him.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Wārith</strong> comes from the root <strong>و-ر-ث (Wāw-Rā-Thā)</strong>, 
            which means to inherit, receive, or be left with something after others have passed. 
            Allah inherits all, because He outlives all.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🏠 What Do We Really Own?</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li>We borrow things for a time — Allah owns them always</li>
            <li>When we die, our things stay — but Allah never leaves</li>
            <li>Al-Wārith teaches us to live with purpose, not for possessions</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/96" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/98" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Wārith</strong> is mentioned in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah Al-Ḥijr (15:23)</li>
          <li>Surah Maryam (19:40)</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/19/40"
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

export default Page97;
