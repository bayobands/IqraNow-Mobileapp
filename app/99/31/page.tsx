import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page31 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْخَبِيرُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Khabīr – The All-Aware
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Khabīr</strong> is the One who is fully aware of everything — not just what we do, but why we do it. 
          He knows what is deep in our hearts, our secrets, our motives, and our true needs. 
          Nothing escapes His awareness, and His knowledge is never superficial.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/31.m4a" />

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
          You can tell Allah anything — even what you don’t know how to say. <strong>Al-Khabīr</strong> already knows what’s inside your heart. 
          He understands your feelings, your fears, and your dreams better than anyone else.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Khabīr</strong> comes from the root <strong>خ-ب-ر (Kh-B-R)</strong>, which means **to know deeply**, **to be informed**, or **to have experience**. 
            It refers to full, detailed knowledge — not just facts, but the story behind them.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Khabīr vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-ʿAlīm</strong> – Knows all things, vast and general</li>
            <li><strong>Al-Khabīr</strong> – Knows details, motives, and what’s hidden</li>
            <li><strong>Ash-Shahīd</strong> – Is witness to all actions</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/30" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/32" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Khabīr</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 6:18</li>
          <li>Surah 31:34</li>
          <li>Surah 49:13</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%AE%D8%A8%D9%8A%D8%B1"
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

export default Page31;
