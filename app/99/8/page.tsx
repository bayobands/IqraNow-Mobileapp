import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page8 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْعَزِيزُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-‘Azīz – The Almighty, The Invincible
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-‘Azīz</strong> means that Allah is all-powerful, unbeatable, and beyond defeat. 
          His might is not only unmatched, but it is always paired with wisdom and mercy. 
          He cannot be overcome, and nothing can happen without His will. He is firm in His decisions, glorious in His majesty, 
          and elevated above all weakness or dependence.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/8.m4a" />

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
          Imagine someone so strong that no one can beat them — and they’re kind too. That’s <strong>Al-‘Azīz</strong>.
          Allah never loses, never gets tired, and always knows what’s best. He uses His strength with kindness and care.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-‘Azīz</strong> comes from the root <strong>ع-ز-ز (ʿA-Z-Z)</strong>, which conveys meanings of **might**, **honor**, **strength**, and **rarity**.
            Something ‘azīz is rare and precious, and Allah’s strength is one of a kind — both dominant and majestic.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-‘Azīz vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-‘Azīz</strong> – Unmatched strength and dignity</li>
            <li><strong>Al-Qawwiyy</strong> – Pure physical might and power</li>
            <li><strong>Al-Jabbār</strong> – The Compeller who enforces divine justice with strength</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/7" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/9" className={`${styles.navButton} ${styles.next}`}>
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
        <p><strong>Al-‘Azīz</strong> is mentioned in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 2:129</li>
          <li>Surah 3:6</li>
          <li>Surah 4:158</li>
          <li>Surah 48:7</li>
          <li>Surah 59:23</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2"
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

export default Page8;
