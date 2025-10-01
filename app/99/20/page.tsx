import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page20 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْقَابِضُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Qābiḍ – The Withholder, The Restrainer
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Qābiḍ</strong> is the One who takes away, restricts, or withholds — not out of cruelty, but out of wisdom. 
          Whether it's wealth, health, emotions, or opportunities, Allah may limit something in your life so you grow, reflect, or return to Him.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/20.m4a" />

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
          Sometimes when you don’t get what you want, it's because <strong>Al-Qābiḍ</strong> is protecting you or guiding you to something better. 
          Like a parent who doesn’t give candy before dinner — it’s love, not punishment.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Qābiḍ</strong> comes from the root <strong>ق-ب-ض (Q-B-Ḍ)</strong>, which means **to seize**, **to contract**, or **to withhold**. 
            It reflects purposeful control — holding back out of care, not anger.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Qābiḍ vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Qābiḍ</strong> – Restrains or holds back</li>
            <li><strong>Al-Bāsit</strong> – Expands and gives freely</li>
            <li><strong>Al-Māniʿ</strong> – Prevents harm or danger</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/19" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/21" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Qābiḍ</strong> is mentioned in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 2:245</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%82%D8%A7%D8%A8%D8%B6"
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

export default Page20;
