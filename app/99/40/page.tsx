import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page40 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْحَسِيبُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Ḥasīb – The Reckoner
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Ḥasīb</strong> is the One who takes full account of everything. 
          He knows all actions, intentions, and outcomes — nothing is missed or forgotten. 
          He gives each soul exactly what it deserves, with perfect justice and wisdom.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/40.m4a" />

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
          You might forget things you do, but <strong>Al-Ḥasīb</strong> never does. 
          He sees your good and bad choices — and He’s fair and kind in how He judges each one.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Ḥasīb</strong> comes from the root <strong>ح-س-ب (Ḥ-S-B)</strong>, which means **to count**, **to calculate**, or **to reckon**. 
            It relates to Allah’s precise knowledge of everything and His perfect justice.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Ḥasīb vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Ḥasīb</strong> – Calculates and judges all matters with fairness</li>
            <li><strong>Al-ʿAdl</strong> – The Just; ensures absolute fairness and balance</li>
            <li><strong>Al-ʿAlīm</strong> – Knows all things, even what is hidden</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/39" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/41" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Ḥasīb</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 4:6</li>
          <li>Surah 4:86</li>
          <li>Surah 33:39</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%AD%D8%B3%D9%8A%D8%A8"
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

export default Page40;
