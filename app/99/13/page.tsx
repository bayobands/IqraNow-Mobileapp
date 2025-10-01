import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page13 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْمُصَوِّرُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Musawwir – The Fashioner, The Shaper
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Musawwir</strong> is the One who gives every creation its unique shape, form, and features. 
          While <em>Al-Khāliq</em> creates and <em>Al-Bāri’</em> brings into being, <em>Al-Musawwir</em> beautifies and individualizes. 
          No two faces, flowers, or snowflakes are the same — each one is an intentional masterpiece.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/13.m4a" />

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
          When you look in the mirror and see your smile, your eyes, and your face — that’s from <strong>Al-Musawwir</strong>. 
          He made you just the way you are, and there’s no one exactly like you in the whole world.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Musawwir</strong> comes from the root <strong>ص-و-ر (Ṣ-W-R)</strong>, meaning **to form**, **to shape**, or **to fashion**. 
            From this root comes the word “ṣurah” (picture/form) and “taswīr” (drawing or designing).
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Musawwir vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Khāliq</strong> – Originates creation</li>
            <li><strong>Al-Bāri’</strong> – Evolves and harmonizes</li>
            <li><strong>Al-Musawwir</strong> – Shapes with beauty and uniqueness</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/12" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/14" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Musawwir</strong> is mentioned in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 59:24</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%85%D8%B5%D9%88%D9%91%D9%90%D8%B1"
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

export default Page13;
