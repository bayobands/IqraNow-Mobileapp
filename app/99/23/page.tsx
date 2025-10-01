import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page23 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلرَّافِعُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Ar-Rāfiʿ – The One Who Elevates
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Ar-Rāfiʿ</strong> is the One who raises people, ranks, and honor. He elevates believers in status, lifts hearts from sadness, 
          and raises the truth above falsehood. His elevation is both spiritual and worldly — given with wisdom and purpose.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/23.m4a" />

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
          When someone tries hard to be kind, to learn, or to help others — <strong>Ar-Rāfiʿ</strong> lifts them up in ways no one else can. 
          He raises people not just with success, but with love and meaning.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Ar-Rāfiʿ</strong> comes from the root <strong>ر-ف-ع (R-F-ʿ)</strong>, meaning **to raise**, **to elevate**, or **to lift up**. 
            It can refer to rank, dignity, or even emotional and spiritual states.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Ar-Rāfiʿ vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Ar-Rāfiʿ</strong> – Elevates with honor</li>
            <li><strong>Al-Khāfiḍ</strong> – Humbles the arrogant</li>
            <li><strong>Al-Muʿizz</strong> – Grants dignity and might</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/22" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/24" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Ar-Rāfiʿ</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 6:83</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%B1%D8%A7%D9%81%D8%B9"
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

export default Page23;
