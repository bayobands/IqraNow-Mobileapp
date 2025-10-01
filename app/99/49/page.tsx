import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page49 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْبَاعِثُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Bāʿith – The Resurrector
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Bāʿith</strong> is the One who brings the dead back to life. 
          On the Day of Judgment, He will raise all people from their graves for accountability. 
          He also awakens the hearts of people in this life, bringing faith and purpose to those who seek Him.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/49.m4a" />

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
          One day, Allah will bring us all back to life — not just our bodies, but also our hopes and our hearts. 
          <strong>Al-Bāʿith</strong> gives second chances, both in this life and the next.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Bāʿith</strong> comes from the root <strong>ب-ع-ث (B-ʿ-TH)</strong>, meaning **to send**, **to awaken**, or **to resurrect**. 
            It refers to both physical resurrection and spiritual revival.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Bāʿith vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Bāʿith</strong> – Raises the dead and revives the heart</li>
            <li><strong>Al-Muḥyī</strong> – Gives life to the living</li>
            <li><strong>Al-Ḥakam</strong> – Judges after resurrection with complete justice</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/48" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/50" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Bāʿith</strong> is referenced in meaning (though not by name) in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 22:7</li>
          <li>Surah 36:51</li>
          <li>Surah 58:6</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=baʿatha"
            target="_blank"
            rel="noopener noreferrer"
          >
            View resurrection verses →
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page49;
