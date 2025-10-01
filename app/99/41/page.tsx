import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page41 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْجَلِيلُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Jalīl – The Majestic
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Jalīl</strong> is the One who possesses infinite majesty, greatness, and glory. 
          His presence inspires awe and reverence. He is far above anything low or imperfect — 
          His majesty is complete and beyond our imagination.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/41.m4a" />

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
          When you see a tall mountain or a powerful ocean, imagine the majesty of <strong>Al-Jalīl</strong> — even greater than that. 
          He deserves deep respect, honor, and love for how mighty and perfect He is.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Jalīl</strong> comes from the root <strong>ج-ل-ل (J-L-L)</strong>, which means **to be grand**, **majestic**, or **dignified**. 
            It refers to greatness in both power and appearance.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Jalīl vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Jalīl</strong> – Majestic in glory and honored beyond comparison</li>
            <li><strong>Al-ʿAẓīm</strong> – Tremendous in strength and greatness</li>
            <li><strong>Al-Kabīr</strong> – Great and exalted above all creation</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/40" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/42" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Jalīl</strong> is not explicitly mentioned in the Qur’an by name, but His attributes of majesty are seen throughout.</p>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%AC%D9%84%D8%A7%D9%84"
            target="_blank"
            rel="noopener noreferrer"
          >
            Search for “Jalāl” on Quran.com →
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page41;
