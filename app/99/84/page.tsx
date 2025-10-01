import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page84 = () => {
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
          مَالِكُ ٱلْمُلْكِ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Mālik al-Mulk – Master of the Kingdom
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Mālik al-Mulk</strong> is the One who owns and controls all kingdoms, dominions, and all that exists. 
          He rules over the heavens, the earth, and everything in between with complete authority, wisdom, and justice.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/84.m4a" />

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
          Kings and presidents have power over countries, but only for a short time. 
          <strong>Mālik al-Mulk</strong> is the true King who owns everything — forever. No one can take His power away.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Mālik</strong> comes from the root <strong>م-ل-ك (M-L-K)</strong>, meaning to possess, to rule, or to have power over something. 
            <strong>Mulk</strong> refers to the dominion or kingdom. Together, Mālik al-Mulk shows that Allah is the Owner of all ownership.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>👑 Ownership vs. Authority</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Mālik</strong> – The King (focuses on sovereignty)</li>
            <li><strong>Mālik al-Mulk</strong> – Master of all Kingdoms (emphasizes ownership of all dominion)</li>
            <li>One refers to royal status, the other to divine control of all existence</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/83" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/85" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Mālik al-Mulk</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah Āli ʿImrān (3:26)</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/3/26"
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

export default Page84;
