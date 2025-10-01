import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page75 = () => {
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
          ٱلظَّاهِرُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Az-Zāhir – The Most Manifest
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Az-Zāhir</strong> is the One whose existence is clear and evident in all things. 
          His signs are visible in creation, nature, and everything around us. 
          Though we may not see Him directly, His presence is obvious to anyone who reflects.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/75.m4a" />

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
          You might not see the wind, but you can see what it does — the trees move, the clouds shift. 
          <strong>Az-Zāhir</strong> is like that: we see His signs everywhere, in beauty, kindness, and the sky above us.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Az-Zāhir</strong> comes from the root <strong>ظ-ه-ر (Ẓ-H-R)</strong>, which means to be visible, clear, or apparent. 
            It reflects Allah’s reality being unmistakably present through His creation.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Az-Zāhir vs Al-Bāṭin</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Az-Zāhir</strong> – The Manifest, whose presence is visible in the world</li>
            <li><strong>Al-Bāṭin</strong> – The Hidden, who knows the secrets and unseen</li>
            <li>Both show that Allah is everywhere — known and unknown, outer and inner</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/74" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/76" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Az-Zāhir</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah Al-Hadid (57:3) – “He is the First and the Last, the Manifest and the Hidden...”</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/57/3"
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

export default Page75;
