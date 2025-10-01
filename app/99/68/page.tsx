import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page68 = () => {
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
          ٱلصَّمَدُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          As-Ṣamad – The Self-Sufficient, Eternal Refuge
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>As-Ṣamad</strong> is the One whom all creation depends on, but who depends on nothing. 
          He is the eternal, perfect refuge — the One we turn to in need, and the One who never needs anything in return.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/68.m4a" />

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
          When you're scared or need help, you run to someone who can take care of you. 
          <strong>As-Ṣamad</strong> is the One you can always run to — He never runs out of help, love, or strength.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>As-Ṣamad</strong> comes from the root <strong>ص-م-د (Ṣ-M-D)</strong>, which means to go to someone for help, to remain firm, or to be solid and self-reliant. 
            It shows how Allah is the One all seek in times of need, and how He is never in need Himself.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ As-Ṣamad vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>As-Ṣamad</strong> – The eternal refuge, never needs anything</li>
            <li><strong>Al-Ghaniyy</strong> – Completely free of need</li>
            <li><strong>Al-Ḥayy</strong> – Ever-Living, without weakness or end</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/67" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/69" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>As-Ṣamad</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 112:2 – “Allah, the Eternal Refuge”</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/112/2"
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

export default Page68;
