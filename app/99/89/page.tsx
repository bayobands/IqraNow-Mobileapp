import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page89 = () => {
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
          ٱلْمُغْنِي
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Mughni – The Enricher
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Mughni</strong> is the One who enriches whomever He wills. 
          He grants independence, wealth, and self-sufficiency to His servants without needing repayment. 
          Whether material or spiritual, all enrichment flows from Him.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/89.m4a" />

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
          If you ever wished for something valuable — like food, money, or even love — <strong>Al-Mughni</strong> is the One who gives it. 
          He makes people feel full, blessed, and strong without needing help from anyone else.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Mughni</strong> shares the same root as <strong>Al-Ghaniyy</strong> — <strong>غ-ن-ي (Ghayn-Nūn-Yā)</strong>. 
            It means to be rich, content, and free of need. While Al-Ghaniyy is self-sufficient, Al-Mughni gives sufficiency to others.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>💰 Giving vs Owning</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Ghaniyy</strong> – He has everything and needs nothing</li>
            <li><strong>Al-Mughni</strong> – He gives others everything they need</li>
            <li>He lifts people from poverty, need, or emotional emptiness</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/88" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/90" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Mughni</strong> is derived from:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah An-Nūr (24:32)</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/24/32"
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

export default Page89;
