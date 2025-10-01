import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page58 = () => {
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
          ٱلْمُبْدِئُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Mubdi’ – The Originator
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Mubdi’</strong> is the One who brings things into existence from nothing. 
          Without needing a model, blueprint, or materials, He creates with absolute will and power. 
          Everything we see – from galaxies to tiny insects – began with His command.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/58.m4a" />

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
          When you make a drawing, you need a pencil and paper. 
          But <strong>Al-Mubdi’</strong> creates everything from nothing. 
          He doesn’t need tools — just says “Be,” and it is.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Mubdi’</strong> comes from the root <strong>ب-د-ء (B-D-ʾ)</strong>, which means to begin, to start, or to innovate something brand new.
            It points to Allah’s unique power to originate things independently.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Mubdi’ vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Mubdi’</strong> – Begins creation from nothing</li>
            <li><strong>Al-Khāliq</strong> – Shapes and forms creation</li>
            <li><strong>Al-Bāri’</strong> – Perfects and sets things in order</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/57" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/59" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Mubdi’</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 10:4</li>
          <li>Surah 27:64</li>
          <li>Surah 29:19</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%85%D8%A8%D8%AF%D8%A6"
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

export default Page58;
