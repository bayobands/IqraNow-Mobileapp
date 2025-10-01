import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page70 = () => {
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
          ٱلْمُقْتَدِرُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Muqtadir – The Creator of All Power
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Muqtadir</strong> is the One who has supreme power and absolute control over all things. 
          He not only possesses power like <strong>Al-Qādir</strong>, but He creates it, distributes it, and governs it however He wills.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/70.m4a" />

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
          A superhero might be strong, but only because Allah gave them strength. 
          <strong>Al-Muqtadir</strong> is the One who creates every power — the wind, your heart beating, even the tiniest ant’s movement.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Muqtadir</strong> comes from the root <strong>ق-د-ر (Q-D-R)</strong>, same as <strong>Al-Qādir</strong>, but with a more intense and active form. 
            It emphasizes the total dominance and execution of power in every detail.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Muqtadir vs Al-Qādir</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Qādir</strong> – Has all power</li>
            <li><strong>Al-Muqtadir</strong> – Uses, controls, and manifests that power in everything</li>
            <li>One expresses ability; the other expresses unstoppable execution</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/69" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/71" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Muqtadir</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 54:42</li>
          <li>Surah 54:55</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%85%D9%82%D8%AA%D8%AF%D8%B1"
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

export default Page70;
