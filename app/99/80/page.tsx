import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page80 = () => {
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
          ٱلتَّوَّابُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          At-Tawwāb – The Ever-Accepter of Repentance
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>At-Tawwāb</strong> is the One who always accepts repentance. 
          He constantly turns to His servants with forgiveness and mercy, again and again, no matter how many times they return to Him.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/80.m4a" />

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
          Even if you make a mistake a hundred times, <strong>At-Tawwāb</strong> is always ready to forgive you when you say “I’m sorry” and truly mean it. 
          Allah never gets tired of giving you another chance.<br></br><br></br>

          Allah not only accepts repentance, but loves those who return to Him often — no matter how many times they fall. At-Tawwāb means He keeps welcoming you back, again and again, as long as you turn to Him sincerely.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>At-Tawwāb</strong> comes from the root <strong>ت-و-ب (T-W-B)</strong>, meaning to return or to repent. 
            It emphasizes Allah’s frequent and continual acceptance of sincere repentance.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🧎‍♂️ Related Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>At-Tawwāb</strong> – Always accepting sincere repentance</li>
            <li><strong>Al-Ghafūr</strong> – Constantly forgiving</li>
            <li><strong>Al-ʿAfūw</strong> – Wipes away sins entirely</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/79" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/81" className={`${styles.navButton} ${styles.next}`}>
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
        <p><strong>At-Tawwāb</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah Al-Baqarah (2:160)</li>
          <li>Surah Al-Nūr (24:10)</li>
          <li>Surah Al-Ḥujurāt (49:12)</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/2/160"
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

export default Page80;
