import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page83 = () => {
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
          ٱلرَّؤُوفُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Ar-Raʾūf – The Most Kind and Gentle
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Ar-Raʾūf</strong> is the One whose kindness is deep, gentle, and caring. 
          He is tender with His creation, showing mercy in the most subtle and comforting ways, without harshness or delay.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/83.m4a" />

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
          When someone talks to you kindly or hugs you when you’re sad, that feels so nice. 
          <strong>Ar-Raʾūf</strong> gives even greater comfort — His care reaches the hearts of those who need it most.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Ar-Raʾūf</strong> comes from the root <strong>ر-ء-ف (R-Hamza-F)</strong>, which means to be compassionate, soft, and gentle. 
            It emphasizes Allah’s mercy with a special tone of warmth and affection.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🕊️ Ar-Raḥīm vs Ar-Raʾūf</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Ar-Raḥīm</strong> – Mercy that is ongoing and protective</li>
            <li><strong>Ar-Raʾūf</strong> – Mercy that is tender, gentle, and healing</li>
            <li>Both highlight Allah’s loving nature — but Ar-Raʾūf is especially about soft kindness</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/82" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/84" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Ar-Raʾūf</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah Al-Baqarah (2:207)</li>
          <li>Surah At-Tawbah (9:117)</li>
          <li>Surah Al-Ḥadīd (57:9)</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/9/117"
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

export default Page83;
