import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page43 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلرَّقِيبُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Ar-Raqīb – The Watchful One
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Ar-Raqīb</strong> is the One who watches over everything — nothing escapes His sight. 
          He is fully aware of all things at all times: what we do, say, and even think. His watchfulness is complete and constant.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/43.m4a" />

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
          Even when no one else is around, <strong>Ar-Raqīb</strong> is there. 
          He sees your kindness, your struggles, and your mistakes. 
          That means you're never alone — and every good deed counts.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Ar-Raqīb</strong> comes from the root <strong>ر-ق-ب (R-Q-B)</strong>, which means **to observe**, **to watch**, or **to guard attentively**. 
            It conveys the idea of close, ongoing awareness and care.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Ar-Raqīb vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Ar-Raqīb</strong> – Constantly watching over all creation</li>
            <li><strong>Al-Ḥafīẓ</strong> – Preserves and protects everything from harm</li>
            <li><strong>Al-Baṣīr</strong> – Sees all things clearly and completely</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/42" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/44" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Ar-Raqīb</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 4:1</li>
          <li>Surah 5:117</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%B1%D9%82%D9%8A%D8%A8"
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

export default Page43;
