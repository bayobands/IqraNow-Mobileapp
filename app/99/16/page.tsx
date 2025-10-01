import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page16 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْوَهَّابُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Wahhāb – The Giver of Gifts
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Wahhāb</strong> is the One who gives freely, generously, and continuously — without needing anything in return. 
          He grants blessings even when we don’t ask, and even when we don’t deserve them. His gifts include love, guidance, health, and faith — all priceless and unearned.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/16.m4a" />

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
          Imagine someone always giving you presents — even when you forget to say thank you. 
          That’s <strong>Al-Wahhāb</strong>. He gives us our families, our hearts, our food, and even chances to do good — all as free gifts.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Wahhāb</strong> comes from the root <strong>و-ه-ب (W-H-B)</strong>, which means **to give**, **to grant**, or **to bestow freely**. 
            This gift is unconditional — no expectation of return, no price.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Wahhāb vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Ar-Razzāq</strong> – Provides what is needed for life</li>
            <li><strong>Al-Karīm</strong> – The Most Generous in honor and giving</li>
            <li><strong>Al-Wahhāb</strong> – Gives purely out of love and grace</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/15" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/17" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Wahhāb</strong> is mentioned in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 3:8</li>
          <li>Surah 38:9</li>
          <li>Surah 38:35</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%88%D9%87%D9%91%D8%A7%D8%A8"
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

export default Page16;
