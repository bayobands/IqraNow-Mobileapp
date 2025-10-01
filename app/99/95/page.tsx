import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page95 = () => {
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
          ٱلْبَدِيعُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Badīʿ – The Incomparable Originator
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Badīʿ</strong> is the One who creates in a way that has never been seen before. 
          His creations are unique, perfect, and without any prior model. 
          He brought the universe into existence out of nothing — without blueprint or example.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/95.m4a" />

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
          Have you ever made something new from your imagination? 
          <strong>Al-Badīʿ</strong> made the whole world — oceans, stars, people — without copying anything. 
          He imagined it all, and then made it real.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Badīʿ</strong> comes from the root <strong>ب-د-ع (Bā-Dāl-ʿAyn)</strong>, which means to innovate, create, or invent something new — never seen before. 
            This is the source of the word <em>bidʿah</em>, which means innovation.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>✨ Originality Without Limit</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li>He didn’t copy or imitate anything</li>
            <li>He imagined the colors, shapes, planets — and they became real</li>
            <li>No one creates like Him</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/94" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/96" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Badīʿ</strong> is mentioned in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah Al-Baqarah (2:117)</li>
          <li>Surah Al-Anʿām (6:101)</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/2/117"
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

export default Page95;
