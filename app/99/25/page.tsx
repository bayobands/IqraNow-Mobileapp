import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page25 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْمُذِلُّ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Mudhill – The Dishonorer, The Humiliator
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Mudhill</strong> is the One who lowers those who are arrogant, unjust, or ungrateful. 
          When someone uses their power to harm others, Allah has the ability to strip them of their pride and position. 
          His dishonoring is always just and purposeful.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/25.m4a" />

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
          If someone is using their strength to hurt others, <strong>Al-Mudhill</strong> can remove their power and show them they're not above anyone. 
          Allah protects people from pride and brings fairness in His way.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Mudhill</strong> comes from the root <strong>ذ-ل-ل (Dh-L-L)</strong>, which means **to be low**, **humiliated**, or **disgraced**. 
            It’s not cruelty, but divine justice against those who rebel against truth.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Mudhill vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Muʿizz</strong> – Grants true honor</li>
            <li><strong>Al-Mudhill</strong> – Lowers the arrogant and unjust</li>
            <li><strong>Al-Ḥakam</strong> – The ultimate Judge who gives everyone what they deserve</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/24" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/26" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Mudhill</strong> is reflected in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 3:26</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/3/26"
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

export default Page25;
