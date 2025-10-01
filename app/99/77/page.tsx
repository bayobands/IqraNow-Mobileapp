import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page77 = () => {
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
          ٱلْوَالِي
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Wāli – The Sole Governor
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Wāli</strong> is the One who governs and manages all affairs of creation. 
          His authority is complete — nothing happens in the universe without His permission and control. 
          He governs with power, justice, and wisdom.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/77.m4a" />

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
          Just like a school has a principal to take care of everything, the whole universe has <strong>Al-Wāli</strong>. 
          He watches over everything — big or small — and keeps it all working perfectly.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Wāli</strong> comes from the root <strong>و-ل-ي (W-L-Y)</strong>, meaning to be near, to govern, or to be in charge. 
            It indicates Allah’s nearness and control over all that exists.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Wāli vs Al-Walī</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Wāli</strong> – The Governor who manages and controls the universe</li>
            <li><strong>Al-Walī</strong> – The Protective Friend who is close to the believers</li>
            <li>One highlights authority, the other highlights personal care</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/76" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/78" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Wāli</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah Ar-Ra’d (13:11)</li>
          <li>Surah Al-A’raf (7:196)</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/7/196"
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

export default Page77;
