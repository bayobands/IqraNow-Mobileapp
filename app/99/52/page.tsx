import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page52 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْوَكِيلُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Wakīl – The Trustee
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Wakīl</strong> is the One you can completely rely on. 
          He manages all affairs with wisdom, power, and care. 
          When you entrust your worries, your plans, and your life to Him, He takes care of them better than anyone else could.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/52.m4a" />

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
          When you’re scared or unsure, remember <strong>Al-Wakīl</strong> is taking care of everything. 
          Like giving a puzzle to someone who knows exactly how to solve it, giving your trust to Allah brings peace.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Wakīl</strong> comes from the root <strong>و-ك-ل (W-K-L)</strong>, which means **to entrust**, **to rely upon**, or **to manage affairs**. 
            It highlights Allah’s perfect ability to take responsibility for what we give Him.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Wakīl vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Wakīl</strong> – The one trusted to take care of everything</li>
            <li><strong>Al-Ḥafīẓ</strong> – The Preserver and Protector</li>
            <li><strong>Al-Qayyūm</strong> – The One who sustains and maintains all things</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/51" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/53" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Wakīl</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 3:173</li>
          <li>Surah 4:171</li>
          <li>Surah 33:3</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%88%D9%83%D9%8A%D9%84"
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

export default Page52;
