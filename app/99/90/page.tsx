import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page90 = () => {
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
          ٱلْمَانِعُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Māniʿ – The Withholder
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Māniʿ</strong> is the One who withholds harm, danger, or even blessings when it is better for you. 
          He is the One who protects by preventing, and He stops anything from reaching you unless it’s by His wisdom.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/90.m4a" />

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
          Sometimes we want something really badly — a toy, a trip, a treat — and we don’t get it. 
          But <strong>Al-Māniʿ</strong> only stops it because He knows what’s truly good for us, even if we don’t understand it yet.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Māniʿ</strong> comes from the root <strong>م-ن-ع (Mīm-Nūn-ʿAyn)</strong>, meaning to prevent, deny, or shield. 
            This name shows Allah’s power to stop both visible and invisible harm.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🛡 Protection Through Denial</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li>Sometimes Allah gives by *not* giving</li>
            <li>He stops harm from reaching us even when we don’t see it</li>
            <li>He knows what’s better for us — always</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/89" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/91" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Māniʿ</strong> is not directly named in the Qur’an, but its meaning is present in verses that reflect Allah’s power to prevent harm.</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah Yūnus (10:107)</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/10/107"
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

export default Page90;
