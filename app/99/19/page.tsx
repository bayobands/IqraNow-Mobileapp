import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page19 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْعَلِيمُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-‘Alīm – The All-Knowing
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-‘Alīm</strong> is the One who knows everything — past, present, and future. 
          Nothing is hidden from Him, not even a leaf falling or a tear unseen. His knowledge is complete, eternal, and perfect.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/19.m4a" />

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
          Even if no one sees what you’re going through, <strong>Al-‘Alīm</strong> knows. 
          He understands how you feel, what you’re thinking, and what’s best for you — always.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-‘Alīm</strong> comes from the root <strong>ع-ل-م (‘A-L-M)</strong>, which means **to know**, **to be aware**, or **to have knowledge**. 
            It’s the same root as “ʿilm” (knowledge) and “ʿālim” (scholar).
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-‘Alīm vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-‘Alīm</strong> – Knows everything completely</li>
            <li><strong>Al-Khabīr</strong> – Knows hidden, inner realities</li>
            <li><strong>Ash-Shahīd</strong> – Witnesses all events</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/18" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/20" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-‘Alīm</strong> is mentioned in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 2:282</li>
          <li>Surah 3:5</li>
          <li>Surah 4:35</li>
          <li>Surah 6:59</li>
          <li>...and many more</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%B9%D9%84%D9%8A%D9%85"
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

export default Page19;
