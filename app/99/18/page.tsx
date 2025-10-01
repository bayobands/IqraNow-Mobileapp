import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page18 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْفَتَّاحُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Fattāḥ – The Opener, The Granter of Victory
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Fattāḥ</strong> is the One who opens doors — to guidance, mercy, success, and relief. 
          He resolves what’s locked, clears confusion, and removes barriers. Whether it’s victory in a battle or a breakthrough in life, it is Al-Fattāḥ who makes the way open.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/18.m4a" />

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
          Have you ever felt stuck or unsure what to do next? <strong>Al-Fattāḥ</strong> is the One who helps you move forward. 
          He opens up paths in life just like He opens a flower or the sky after a storm.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Fattāḥ</strong> comes from the root <strong>ف-ت-ح (F-T-Ḥ)</strong>, which means **to open**, **to grant access**, or **to decide**. 
            It refers to both physical openings and openings of the heart and mind.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Fattāḥ vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Fattāḥ</strong> – Opens paths and grants victories</li>
            <li><strong>Al-‘Alīm</strong> – Knows which doors to open and when</li>
            <li><strong>Al-Hādī</strong> – Guides to the correct door</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/17" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/19" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Fattāḥ</strong> is mentioned in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 34:26</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%81%D8%AA%D9%91%D8%A7%D8%AD"
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

export default Page18;
