import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page71 = () => {
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
          ٱلْمُقَدِّمُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Muqaddim – The One Who Brings Forward
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Muqaddim</strong> is the One who brings forward whomever He wills. 
          He advances people, events, and outcomes at the perfect time with complete wisdom. 
          Nothing is early or late except by His plan.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/71.m4a" />

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
          Ever get chosen to go first in line? That’s because <strong>Al-Muqaddim</strong> made it happen. 
          He decides when people lead, succeed, or move ahead — and His timing is always right.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Muqaddim</strong> comes from the root <strong>ق-د-م (Q-D-M)</strong>, meaning to precede, to move forward, or to promote. 
            It reflects Allah’s control in bringing things ahead in time, status, or priority.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Muqaddim vs Al-Mu’akhkhir</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Muqaddim</strong> – Brings forward or advances</li>
            <li><strong>Al-Mu’akhkhir</strong> – Delays or postpones</li>
            <li>Both show Allah's perfect timing in every matter</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/70" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/72" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Muqaddim</strong> is not mentioned by name in the Qur’an,</p>
        <p>but its meaning appears in many verses that describe Allah’s control over time and destiny.</p>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Quran →
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page71;
