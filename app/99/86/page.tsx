import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page86 = () => {
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
          ٱلْمُقْسِطُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Muqsiṭ – The Just One
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Muqsiṭ</strong> is the One who acts with complete justice. 
          He sets things right and gives everyone what they truly deserve. 
          His justice is never unfair or delayed — it is always perfect.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/86.m4a" />

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
          If someone cheats and someone is honest, <strong>Al-Muqsiṭ</strong> knows what happened and will make sure things are fair. 
          Allah never makes mistakes — His decisions are always right.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Muqsiṭ</strong> comes from the root <strong>ق-س-ط (Q-S-T)</strong>, which means to be just, to distribute fairly, or to establish balance and equity. 
            It refers to bringing justice in a way that restores harmony.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-ʿAdl vs Al-Muqsiṭ</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-ʿAdl</strong> – Absolute justice by nature</li>
            <li><strong>Al-Muqsiṭ</strong> – The One who brings balance and corrects injustice</li>
            <li>Both show that Allah never wrongs anyone — ever</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/85" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/87" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Muqsiṭ</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah Āli ʿImrān (3:18)</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/3/18"
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

export default Page86;
