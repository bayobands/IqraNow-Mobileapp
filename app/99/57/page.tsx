import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page57 = () => {
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
        <h1
          style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}
        >
          ٱلْمُحْصِي
        </h1>
        <h2
          style={{
            fontSize: "26px",
            color: "#444",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Al-Muḥṣī – The All-Enumerating
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            marginBottom: "30px",
            textAlign: "justify",
          }}
        >
          <strong>Al-Muḥṣī</strong> is the One who counts and records everything in perfect detail. 
          Not a single leaf falls, not a single breath is taken, except that He knows and keeps track of it all. 
          His knowledge is precise, and nothing is forgotten or overlooked.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/57.m4a" />

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
          <strong>Reflection:</strong>
          <br />
          <br />
          Ever counted stars or tried to remember everything you did in a day? 
          It's impossible for us, but <strong>Al-Muḥṣī</strong> never forgets. 
          He keeps track of every action, word, and intention — perfectly.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
            🌱 Root Word
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Muḥṣī</strong> comes from the root <strong>ح-ص-ى (Ḥ-Ṣ-Y)</strong>, meaning <em>to count</em>, <em>to number</em>, or <em>to record accurately</em>. 
            It conveys complete awareness and accountability of all things.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
            ⚖️ Al-Muḥṣī vs Similar Names
          </h3>
          <ul
            style={{
              paddingLeft: "20px",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            <li><strong>Al-Muḥṣī</strong> – Counts and records everything</li>
            <li><strong>Al-ʿAlīm</strong> – Knows everything in full detail</li>
            <li><strong>Ash-Shahīd</strong> – Witnesses all events firsthand</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/56" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/58" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
          📖 Found in the Qur’an
        </h3>
        <p>
          <strong>Al-Muḥṣī</strong> is mentioned conceptually in:
        </p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 72:28</li>
          <li>Surah 78:29</li>
          <li>Surah 36:12</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉{" "}
          <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%85%D8%AD%D8%B5%D9%8A"
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

export default Page57;
