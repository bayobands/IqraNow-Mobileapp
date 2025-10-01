import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page14 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْغَفَّارُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Ghaffār – The Constant Forgiver
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Ghaffār</strong> is the One who continuously and repeatedly forgives sins, no matter how big or how often they occur. 
          His forgiveness is unlimited, never running out. He forgives again and again when we return to Him with sincerity — and He loves to forgive.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/14.m4a" />

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
          Even if you make the same mistake again and again, <strong>Al-Ghaffār</strong> will forgive you if you say sorry and mean it. 
          Allah never gets tired of forgiving — He’s always ready to wipe away your sadness and start fresh.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Ghaffār</strong> comes from the root <strong>غ-ف-ر (Gh-F-R)</strong>, which means **to cover**, **to protect**, or **to forgive**. 
            It’s like putting a protective shield over a wound so it can heal. Allah not only forgives, but covers and restores.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Ghaffār vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Ghaffār</strong> – Constant, repeated forgiver</li>
            <li><strong>Al-Ghafūr</strong> – The Great Forgiver with deep mercy</li>
            <li><strong>Al-‘Afūw</strong> – Erases and removes all trace of sin</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/13" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/15" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Ghaffār</strong> is mentioned in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 20:82</li>
          <li>Surah 38:66</li>
          <li>Surah 39:5</li>
          <li>Surah 71:10</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%BA%D9%81%D9%91%D8%A7%D8%B1"
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

export default Page14;
