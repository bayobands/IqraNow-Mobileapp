import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page9 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْجَبَّارُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Jabbār – The Compeller, The Restorer
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Jabbār</strong> is the One who compels all things into His divine will — none can escape His decree. 
          But this name also holds a beautiful gentleness: He is the One who **repairs broken hearts**, **heals wounds**, and **restores** what is lost. 
          His power is irresistible, yet full of mercy for the weak and oppressed.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/9.m4a" />

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
          When something breaks — like your toy or your heart — Allah is the One who can fix it. 
          He is <strong>Al-Jabbār</strong>, the One who has the power to fix anything and the kindness to want to do it.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Jabbār</strong> comes from the root <strong>ج-ب-ر (J-B-R)</strong>, which means **to compel**, **to force**, and also **to restore** or **mend**.
            From this root, we get words like “jabirah” (splint used to heal a broken bone). Allah’s power heals as well as commands.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Jabbār vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Jabbār</strong> – Compels and restores with power</li>
            <li><strong>Al-‘Azīz</strong> – Almighty, invincible in might</li>
            <li><strong>Al-Qahhār</strong> – Overwhelms and dominates all by force</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/8" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/10" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
          <a href="/study/99" className={`${styles.navButton} ${styles.next}`}>
                                ↩ Back to All Names
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Jabbār</strong> is mentioned in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 59:23</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%AC%D8%A8%D9%91%D8%A7%D8%B1"
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

export default Page9;
