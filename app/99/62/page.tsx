import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page62 = () => {
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
          ٱلْحَيُّ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Ḥayy – The Ever-Living
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Ḥayy</strong> is the One who is eternally alive. His life has no beginning and no end. 
          He is not dependent on food, sleep, or rest — unlike us. 
          All life comes from Him and continues only by His will.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/62.m4a" />

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
          People need food and sleep to live, but <strong>Al-Ḥayy</strong> never gets tired or hungry. 
          He lives forever and keeps everything else alive. When you're scared or tired, 
          remember the One who is always there and never fades.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Ḥayy</strong> comes from the root <strong>ح-ي-ي (Ḥ-Y-Y)</strong>, which means <em>life</em> or <em>to live</em>. 
            It highlights a life that is perfect, eternal, and self-sustained — qualities that belong only to Allah.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Ḥayy vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Ḥayy</strong> – Lives forever without need</li>
            <li><strong>Al-Qayyūm</strong> – Sustains all that exists</li>
            <li><strong>Al-Muḥyī</strong> – Gives life to others</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/61" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/63" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Ḥayy</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 2:255 (Ayat al-Kursi)</li>
          <li>Surah 3:2</li>
          <li>Surah 20:111</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%AD%D9%8A"
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

export default Page62;
