import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page38 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْحَفِيظُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Ḥafīẓ – The Preserver
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Ḥafīẓ</strong> is the One who watches over and protects all things. 
          Nothing is lost, forgotten, or out of His control. He guards the universe, our actions, and our souls. 
          He never forgets, never sleeps, and never misses a single detail.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/38.m4a" />

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
          When you’re scared or feel alone, remember <strong>Al-Ḥafīẓ</strong> is always watching over you. 
          He’s like the best protector — day and night, seen and unseen. He never takes a break.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Ḥafīẓ</strong> comes from the root <strong>ح-ف-ظ (Ḥ-F-Ẓ)</strong>, which means **to preserve**, **to protect**, or **to safeguard**. 
            It’s about keeping something safe from harm or loss — perfectly and continuously.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Ḥafīẓ vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Ḥafīẓ</strong> – Guards and protects all things from loss or harm</li>
            <li><strong>Al-Muhaymin</strong> – Watches over, safeguards, and manages all creation</li>
            <li><strong>Al-Wakīl</strong> – The One you can fully trust to take care of your affairs</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/37" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/39" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Ḥafīẓ</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 11:57</li>
          <li>Surah 34:21</li>
          <li>Surah 42:6</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%AD%D9%81%D9%8A%D8%B8"
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

export default Page38;
