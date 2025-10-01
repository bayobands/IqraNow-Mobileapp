import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page81 = () => {
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
          ٱلْمُنْتَقِمُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Muntaqim – The Avenger
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Muntaqim</strong> is the One who justly inflicts punishment upon the oppressors and wrongdoers. 
          He balances mercy with justice and never punishes without due cause. 
          When people harm others and persist in evil, Allah, in His wisdom, avenges the wrong.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/81.m4a" />

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
          If someone keeps hurting others without saying sorry, <strong>Al-Muntaqim</strong> sees it and will give justice. 
          Allah is fair — He protects the innocent and holds the guilty accountable.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Muntaqim</strong> comes from the root <strong>ن-ق-م (N-Q-M)</strong>, meaning to take revenge, to punish justly, or to exact retribution. 
            It reflects divine justice against those who arrogantly defy His mercy.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Mercy & Justice</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Ar-Raḥmān</strong> – Mercy is offered to all</li>
            <li><strong>Al-Muntaqim</strong> – Justice is given when mercy is rejected</li>
            <li>Allah’s punishment is never cruel, but always deserved and measured</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/80" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/82" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Muntaqim</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah As-Sajdah (32:22)</li>
          <li>Surah Az-Zukhruf (43:41)</li>
          <li>Surah Ad-Dukhān (44:16)</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/32/22"
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

export default Page81;
