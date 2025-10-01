import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page53 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْقَوِيُّ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Qawiyy – The All-Strong
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Qawiyy</strong> is the One whose strength is absolute. 
          No one can overpower Him, and nothing weakens Him. 
          His strength protects, supports, and sustains everything in the universe — and He never tires.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/53.m4a" />

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
          No matter how strong a person is, they get tired. But <strong>Al-Qawiyy</strong> never does. 
          He is strong enough to carry the weight of all your problems and still give you peace.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Qawiyy</strong> comes from the root <strong>ق-و-ي (Q-W-Y)</strong>, which means **strength**, **power**, or **ability**. 
            It implies complete and unstoppable might.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Qawiyy vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Qawiyy</strong> – Strong in essence and action</li>
            <li><strong>Al-ʿAzīz</strong> – Mighty and undefeatable</li>
            <li><strong>Al-Matīn</strong> – Firm and unwavering in power</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/52" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/54" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Qawiyy</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 22:40</li>
          <li>Surah 42:19</li>
          <li>Surah 58:21</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%82%D9%88%D9%8A"
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

export default Page53;
