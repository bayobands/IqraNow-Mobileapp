import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page17 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلرَّزَّاقُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Ar-Razzāq – The Provider of Sustenance
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Ar-Razzāq</strong> is the One who ensures every living being receives its provision. 
          He gives us not only food and drink but also strength, knowledge, relationships, and opportunities. His rizq reaches hearts, minds, and souls.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/17.m4a" />

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
          Every apple you eat, every hug you feel, and every smile you share — these are all rizq from <strong>Ar-Razzāq</strong>. 
          He gives every bird its worm and every person exactly what they need.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Ar-Razzāq</strong> comes from the root <strong>ر-ز-ق (R-Z-Q)</strong>, which means **to provide**, **to sustain**, or **to nourish**. 
            Rizq includes both material and spiritual provisions — from food to faith.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Ar-Razzāq vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Ar-Razzāq</strong> – Continuously provides all forms of sustenance</li>
            <li><strong>Al-Karīm</strong> – Generous beyond measure in what He gives</li>
            <li><strong>Al-Wahhāb</strong> – Gives without expecting anything in return</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/16" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/18" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Ar-Razzāq</strong> is mentioned in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 51:58</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%B1%D8%B2%D9%91%D8%A7%D9%82"
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

export default Page17;
