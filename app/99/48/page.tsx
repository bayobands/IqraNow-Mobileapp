import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page48 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْمَجِيدُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Majīd – The Glorious One
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Majīd</strong> is the One whose greatness is beyond our imagination. 
          He is full of glory, honor, and generosity. His actions are majestic, His words are perfect, and His essence is magnificent.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/48.m4a" />

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
          Think of the most beautiful sunset, the stars in the sky, or the kindness of a stranger. 
          All of that reflects the glory of <strong>Al-Majīd</strong>. He is truly majestic in every way.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Majīd</strong> comes from the root <strong>م-ج-د (M-J-D)</strong>, which means **glory**, **nobility**, or **honor**. 
            It refers to someone full of richness, generosity, and grandeur.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Majīd vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Majīd</strong> – Majestic and glorious in essence and action</li>
            <li><strong>Al-Karīm</strong> – Generous in giving</li>
            <li><strong>Al-ʿAẓīm</strong> – Supreme in greatness</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/47" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/49" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Majīd</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 11:73</li>
          <li>Surah 85:15</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%85%D8%AC%D9%8A%D8%AF"
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

export default Page48;
