import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page11 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْخَالِقُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Khāliq – The Creator
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Khāliq</strong> is the One who creates from nothing. He designs, originates, and brings into existence every single thing with precision and purpose. 
          From the tiniest cell to the farthest star — all are the result of His perfect creation. He creates not just forms, but also destinies, moments, and opportunities.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/audio/al-khaliq.mp3" />

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
          When you draw or build something, you use tools — but Allah made everything from nothing. He is <strong>Al-Khāliq</strong>, the one who created your eyes, your smile, your voice, and the whole world.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Khāliq</strong> comes from the root <strong>خ-ل-ق (Kh-L-Q)</strong>, which means **to create**, **to shape**, or **to measure exactly**. 
            From this root we get <em>makhluq</em> (creation) and <em>khilqah</em> (innate nature).
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Khāliq vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Khāliq</strong> – Creates from nothing with perfect design</li>
            <li><strong>Al-Bāri’</strong> – Brings into existence with harmony and balance</li>
            <li><strong>Al-Musawwir</strong> – Shapes and gives form with beauty and uniqueness</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/10" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/12" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Khāliq</strong> is mentioned in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 59:24</li>
          <li>Surah 6:102</li>
          <li>Surah 39:62</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%AE%D8%A7%D9%84%D9%82"
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

export default Page11;
