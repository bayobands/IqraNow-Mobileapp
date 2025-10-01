import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page85 = () => {
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
          ذُو ٱلْجَلَالِ وَٱلْإِكْرَامِ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Dhū al-Jalāl wa al-Ikrām – The Lord of Glory and Honor
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Dhū al-Jalāl wa al-Ikrām</strong> is the One full of majesty, nobility, and generosity. 
          He possesses absolute greatness and deserves all glory and honor. 
          His might is overwhelming, and His generosity is unmatched.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/85.m4a" />

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
          Think of the most powerful king and the kindest person — Allah is more majestic and more generous than both. 
          <strong>Dhū al-Jalāl wa al-Ikrām</strong> means He is full of greatness and gives with honor.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Meanings</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Jalāl</strong> means majesty, awe, and greatness.<br />
            <strong>Ikrām</strong> means honor, generosity, and nobility. <br />
            Together, they describe Allah’s awe-inspiring power and His noble treatment of His creation.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌟 Majesty & Generosity</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Jalāl</strong> – Makes you feel awe and humility</li>
            <li><strong>Ikrām</strong> – Makes you feel honored and cared for</li>
            <li>Allah combines both in a perfect, divine balance</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/84" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/86" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Dhū al-Jalāl wa al-Ikrām</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah Ar-Raḥmān (55:27)</li>
          <li>Surah Ar-Raḥmān (55:78)</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/55/27"
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

export default Page85;
