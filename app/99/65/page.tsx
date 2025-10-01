import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page65 = () => {
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
          ٱلْمَاجِدُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Mājid – The Glorious, Most Honorable
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Mājid</strong> is the One full of glory, nobility, and generosity. 
          His greatness is beyond our imagination, and His honor is unmatched. 
          He is Majestic in His being, words, and actions — worthy of all praise.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/65.m4a" />

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
          When you see something amazing, like a rainbow or the stars, it makes you say "Wow!" 
          <strong>Al-Mājid</strong> is greater than all of that — full of beauty, honor, and endless goodness.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Mājid</strong> comes from the root <strong>م-ج-د (M-J-D)</strong>, meaning glory, nobility, and vastness. 
            It reflects someone who is elevated, praised, and abundant in virtue — all of which perfectly describe Allah.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Mājid vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Mājid</strong> – Full of glory, honor, and goodness</li>
            <li><strong>Al-Jalīl</strong> – The Majestic, worthy of awe</li>
            <li><strong>Al-Karīm</strong> – The Generous, abundant in giving</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/64" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/66" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Mājid</strong> appears in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 11:73 – "Indeed, He is the Praiseworthy, the Glorious (Al-Mājid)"</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/11/73"
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

export default Page65;
