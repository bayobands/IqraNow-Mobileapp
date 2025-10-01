import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page10 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْمُتَكَبِّرُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Mutakabbir – The Supremely Great
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Mutakabbir</strong> means that Allah is supremely great and above all limitations. 
          He alone has the right to greatness, pride, and glory — without arrogance, injustice, or comparison. 
          His greatness does not depend on anything. He is above weakness, need, or flaw — and when He reveals this name, 
          it humbles the arrogant and uplifts the sincere.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/10.m4a" />

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
          When someone brags, we feel it’s not nice — but Allah is <strong>Al-Mutakabbir</strong>, and only He is allowed to be proud, 
          because He truly is the greatest. He made everything, needs nothing, and is perfect in every way.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Mutakabbir</strong> comes from the root <strong>ك-ب-ر (K-B-R)</strong>, meaning **greatness**, **bigness**, or **supremacy**. 
            From it we get words like “Akbar” (greater) and “kibr” (pride). When people show kibr, it’s sinful — but when Allah is 
            <em>Mutakabbir</em>, it is truth and majesty.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Mutakabbir vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Mutakabbir</strong> – Supremely great, above all weakness or need</li>
            <li><strong>Al-‘Azīz</strong> – Almighty and dignified in strength</li>
            <li><strong>Al-Jabbār</strong> – The Compeller who restores and dominates</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/9" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/11" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
          <a href="/study/99" className={`${styles.navButton} ${styles.next}`}>
                                ↩ Back to All Names
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Mutakabbir</strong> is mentioned in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 59:23</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%85%D8%AA%D9%83%D8%A8%D8%B1"
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

export default Page10;
