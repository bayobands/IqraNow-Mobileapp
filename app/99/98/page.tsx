import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page98 = () => {
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
          ٱلرَّشِيدُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Ar-Rashīd – The Guide, the One Who Directs Rightly
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Ar-Rashīd</strong> is the One who guides with deep wisdom and purpose. 
          He not only shows the path but nurtures you on it — like a loving teacher, like a mother to her child. 
          His guidance is always perfect, even when we don’t see the full picture.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/98.m4a" />

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
          Have you ever been taught how to ride a bike or read a book? 
          <strong>Ar-Rashīd</strong> is the one who lovingly shows you the way, helps you when you fall, 
          and celebrates when you succeed — just like someone who really cares.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Ar-Rashīd</strong> comes from the root <strong>ر-ش-د (Rā-Shīn-Dāl)</strong>, 
            meaning guidance, maturity, wisdom, and being on the right path. 
            It includes both showing the way and developing a person to walk it well.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🎓 Guidance With Love</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Hādī</strong> shows the way — the direction</li>
            <li><strong>Ar-Rashīd</strong> grows your heart and mind to walk it</li>
            <li>He guides like a mentor, shaping your journey over time</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/97" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/99" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Reflected in the Qur’an</h3>
        <p><strong>Ar-Rashīd</strong> is not directly mentioned by name in the Qur’an, but His attribute of perfect guidance is seen in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah Al-Kahf (18:10)</li>
          <li>Surah Taha (20:50)</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/20/50"
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

export default Page98;
