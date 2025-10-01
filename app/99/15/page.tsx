import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page15 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْقَهَّارُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Qahhār – The All-Subduer, The Irresistible
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Qahhār</strong> is the One who overcomes and subdues all creation. Nothing can resist His power or escape His control. 
          Whether it’s the mightiest tyrant or the smallest atom, they all submit to His will. His domination is not cruel — it’s just, wise, and always purposeful.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/15.m4a" />

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
          Imagine someone who can stop the wind or the waves with just a word. 
          That’s <strong>Al-Qahhār</strong> — no one can stop Him, and nothing happens without His command. But He uses His power with mercy and care.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Qahhār</strong> comes from the root <strong>ق-ه-ر (Q-H-R)</strong>, meaning **to subdue**, **to overpower**, or **to dominate**. 
            It implies strength that cannot be resisted and victory that is total and permanent.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Qahhār vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Qahhār</strong> – Irresistible subduer of all things</li>
            <li><strong>Al-‘Azīz</strong> – All-powerful and unshakable</li>
            <li><strong>Al-Jabbār</strong> – Compels and restores with might</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/14" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/16" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Qahhār</strong> is mentioned in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 12:39</li>
          <li>Surah 13:16</li>
          <li>Surah 14:48</li>
          <li>Surah 38:65</li>
          <li>Surah 39:4</li>
          <li>Surah 40:16</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%82%D9%87%D8%A7%D8%B1"
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

export default Page15;
