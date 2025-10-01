import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page55 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْوَلِيُّ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Waliyy – The Protecting Ally
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Waliyy</strong> is the One who lovingly supports and protects His righteous servants. 
          He is always near, guiding and helping, never leaving them alone. 
          He is not just a protector, but a loyal guardian and ally.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/55.m4a" />

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
          Think of your best friend always looking out for you — but way better. 
          <strong>Al-Waliyy</strong> is always there, even when you feel alone. 
          He protects your soul and your journey back to Him.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Waliyy</strong> comes from the root <strong>و-ل-ي (W-L-Y)</strong>, meaning **to be near**, **to support**, or **to befriend**. 
            It reflects a close, protective relationship full of care.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Waliyy vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Waliyy</strong> – A close, protecting friend and guardian</li>
            <li><strong>Al-Ḥafīẓ</strong> – Protects from harm and preserves</li>
            <li><strong>An-Naṣīr</strong> – The One who gives victory and aid</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/54" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/56" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Waliyy</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 2:257</li>
          <li>Surah 42:28</li>
          <li>Surah 7:196</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%88%D9%84%D9%8A"
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

export default Page55;
