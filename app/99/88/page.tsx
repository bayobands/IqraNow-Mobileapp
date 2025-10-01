import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page88 = () => {
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
          ٱلْغَنِيُّ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Ghaniyy – The Self-Sufficient, The Rich One
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Ghaniyy</strong> is the One who is completely free of any need. He needs nothing from anyone, but everything needs Him. 
          His richness is absolute, and His treasures are endless — yet giving doesn’t diminish Him in the slightest.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/88.m4a" />

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
          Sometimes people get tired of helping or run out of things to give — but not <strong>Al-Ghaniyy</strong>. 
          He never runs out, and He gives without ever needing anything in return.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Ghaniyy</strong> comes from the root <strong>غ-ن-ي (Ghayn-Nūn-Yā)</strong>, which means to be free of need, to be rich, or to be content and independent.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>💎 Al-Ghaniyy vs Ar-Razzāq</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Ar-Razzāq</strong> – The Provider, who gives abundantly</li>
            <li><strong>Al-Ghaniyy</strong> – The One who owns all riches and never needs to take</li>
            <li>Al-Ghaniyy gives without limit and without ever being in need</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/87" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/89" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Ghaniyy</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah Āli ʿImrān (3:97)</li>
          <li>Surah Luqmān (31:26)</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/3/97"
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

export default Page88;
