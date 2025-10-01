import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page66 = () => {
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
          ٱلْوَاحِدُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Wāḥid – The One
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Wāḥid</strong> means that Allah is absolutely One — unique, without partner, equal, or rival. 
          He is One in His being, His actions, His power, and His right to be worshiped. 
          There is no one like Him in any way.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/66.m4a" />

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
          When you build something amazing, people might copy it. But no one can copy Allah. 
          <strong>Al-Wāḥid</strong> is the only One like Himself. 
          He’s the One and Only God — forever and always.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Wāḥid</strong> comes from the root <strong>و-ح-د (W-Ḥ-D)</strong>, meaning one, alone, or singular. 
            It affirms that Allah is uniquely One — no division, no comparison, no partner.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Wāḥid vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Wāḥid</strong> – The One without partner</li>
            <li><strong>Al-Aḥad</strong> – The Only, indivisible One</li>
            <li><strong>As-Ṣamad</strong> – The One needed by all, but who needs none</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/65" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/67" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Wāḥid</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 13:16</li>
          <li>Surah 14:48</li>
          <li>Surah 38:65</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%88%D8%A7%D8%AD%D8%AF"
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

export default Page66;
