import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page46 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْحَكِيمُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Ḥakīm – The All-Wise
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Ḥakīm</strong> is the One whose every action is full of perfect wisdom. 
          He never makes a mistake, and nothing He does is random. Everything He plans, gives, or withholds is for the best — even when we don’t understand it.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/46.m4a" />

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
          Sometimes you don’t get what you want — but <strong>Al-Ḥakīm</strong> knows it’s not the right time. 
          Like a parent who says “no” for a good reason, Allah’s wisdom protects you and guides you to what’s better.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Ḥakīm</strong> comes from the root <strong>ح-ك-م (Ḥ-K-M)</strong>, which means **to judge**, **to be wise**, or **to govern with skill**. 
            It refers to divine wisdom that is always just, perfect, and well-timed.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Ḥakīm vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Ḥakīm</strong> – Acts with perfect wisdom in all decisions</li>
            <li><strong>Al-ʿAlīm</strong> – Has full knowledge of all things</li>
            <li><strong>Al-Ḥakam</strong> – The ultimate judge between truth and falsehood</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/45" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/47" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Ḥakīm</strong> is found in many verses, often paired with other names:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 2:129</li>
          <li>Surah 4:26</li>
          <li>Surah 6:128</li>
          <li>Surah 33:1</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%AD%D9%83%D9%8A%D9%85"
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

export default Page46;
