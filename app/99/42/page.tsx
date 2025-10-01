import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page42 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْكَرِيمُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Karīm – The Most Generous
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Karīm</strong> is the One who gives endlessly, without expecting anything in return. 
          His generosity is unmatched — He gives even to those who disobey Him, and He continues to give more than we can imagine.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/42.m4a" />

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
          Think about someone who gives you a gift — even when you didn’t ask for it. 
          That’s <strong>Al-Karīm</strong> — He gives us food, family, forgiveness, and even paradise. 
          He’s kind, patient, and always generous.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Karīm</strong> comes from the root <strong>ك-ر-م (K-R-M)</strong>, meaning **nobility**, **generosity**, or **honor**. 
            It refers to someone who gives freely, with dignity and goodness.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Karīm vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Karīm</strong> – Constantly generous in both material and spiritual gifts</li>
            <li><strong>Ar-Razzāq</strong> – Provides all forms of provision and sustenance</li>
            <li><strong>Al-Ghanīyy</strong> – Self-sufficient and gives from His endless riches</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/41" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/43" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Karīm</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 27:40</li>
          <li>Surah 82:6</li>
          <li>Surah 96:3</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85"
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

export default Page42;
