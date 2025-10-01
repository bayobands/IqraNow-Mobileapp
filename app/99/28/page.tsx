import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page28 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْحَكَمُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Ḥakam – The Impartial Judge
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Ḥakam</strong> is the One who judges with perfect fairness. He never makes mistakes, never favors anyone unjustly, 
          and His judgment is always final. He settles disputes, rights wrongs, and gives everyone what they truly deserve.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/28.m4a" />

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
          Sometimes life feels unfair, but <strong>Al-Ḥakam</strong> sees the whole truth. 
          Even if no one else does, Allah will make things right in the end — because He is the Most Just Judge.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Ḥakam</strong> comes from the root <strong>ح-ك-م (Ḥ-K-M)</strong>, which means **to judge**, **to decide**, or **to give a ruling**. 
            It’s the same root used in the word <em>ḥikmah</em>, which means wisdom.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Ḥakam vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Ḥakam</strong> – Judges with fairness</li>
            <li><strong>Al-‘Adl</strong> – Embodies perfect justice</li>
            <li><strong>Al-‘Alīm</strong> – Knows everything that influences judgment</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/27" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/29" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Ḥakam</strong> is reflected in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 6:114</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/6/114"
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

export default Page28;
