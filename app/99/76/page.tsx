import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page76 = () => {
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
          ٱلْبَاطِنُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Bāṭin – The Most Hidden
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Bāṭin</strong> is the One who is hidden from our physical senses, yet closer to us than anything else. 
          He sees the secrets of our hearts, knows our thoughts, and is present in the unseen.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/76.m4a" />

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
          Even if you whisper in your heart, <strong>Al-Bāṭin</strong> hears it. 
          You can’t see Him, but He is always there — watching, caring, and helping in ways you don’t even notice.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Bāṭin</strong> comes from the root <strong>ب-ط-ن (B-Ṭ-N)</strong>, meaning "to be hidden" or "inward." 
            It refers to what is unseen, internal, and beyond human perception.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Bāṭin vs Az-Zāhir</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Az-Zāhir</strong> – The Manifest, seen in His signs and creation</li>
            <li><strong>Al-Bāṭin</strong> – The Hidden, present in the unseen and the secrets</li>
            <li>Together, they describe Allah as both clearly known and deeply mysterious</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/75" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/77" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Bāṭin</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah Al-Hadid (57:3) – “He is the First and the Last, the Manifest and the Hidden...”</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/57/3"
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

export default Page76;
