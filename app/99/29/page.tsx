import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page29 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْعَدْلُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-ʿAdl – The Utterly Just
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-ʿAdl</strong> is the One whose justice is complete and never fails. 
          He is fair in all His rulings and gives everyone what they truly deserve — not too little, not too much. 
          His justice brings balance to creation, and He never wrongs anyone.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/29.m4a" />

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
          Even if something seems unfair right now, <strong>Al-ʿAdl</strong> sees the full picture. 
          He is always fair, and He will make sure that everyone is treated justly — whether in this life or the next.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-ʿAdl</strong> comes from the root <strong>ع-د-ل (ʿA-D-L)</strong>, which means **justice**, **fairness**, or **balance**. 
            It’s about giving each person their full right, in the right way, at the right time.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-ʿAdl vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-ʿAdl</strong> – Always gives everyone what is just</li>
            <li><strong>Al-Ḥakam</strong> – Judges fairly and wisely</li>
            <li><strong>Ar-Raqīb</strong> – Watches all actions to ensure accountability</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/28" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/30" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-ʿAdl</strong> is not mentioned directly as a Name, but Allah’s justice is affirmed in many verses:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 4:40</li>
          <li>Surah 21:47</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%B9%D8%AF%D9%84"
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

export default Page29;
