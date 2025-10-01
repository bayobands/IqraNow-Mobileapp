import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page99 = () => {
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
          ٱلصَّبُورُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          As-Sabūr – The Most Patient
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>As-Sabūr</strong> is the One who does not rush, who gives us countless chances, and waits for us to turn back to Him. 
          His patience is beyond what we can imagine — despite all the mistakes people make, He gives time, mercy, and forgiveness.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/99.m4a" />

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
          Imagine someone who never gives up on you — even when you mess up. 
          <strong>As-Sabūr</strong> watches, waits, and helps you try again and again. 
          His patience is full of love.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>As-Sabūr</strong> comes from the root <strong>ص-ب-ر (Ṣād-Bā-Rā)</strong>, 
            which means to be patient, to endure, and to calmly persevere. 
            It is the same root as the word <em>ṣabr</em> (patience).
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🕊️ Endless Patience</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li>He gives people time to repent and grow</li>
            <li>He doesn’t punish quickly — He waits with wisdom</li>
            <li>Even when people forget Him, He is patient</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/98" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/study/99" className={`${styles.navButton} ${styles.next}`}>
            ↩ Back to All Names
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Reflected in the Qur’an</h3>
        <p><strong>As-Sabūr</strong> is not mentioned directly as a Name in the Qur’an, but His patience is reflected in many verses:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah Al-Baqarah (2:153)</li>
          <li>Surah An-Nahl (16:126)</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/2/153"
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

export default Page99;
