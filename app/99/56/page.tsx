import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page56 = () => {
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
          ٱلْحَمِيدُ
        </h1>
        <h2
          style={{
            fontSize: "26px",
            color: "#444",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Al-Ḥamīd – The Praiseworthy
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
          <strong>Al-Ḥamīd</strong> is the One who is always worthy of all praise.
          Whether in ease or hardship, His perfection and mercy deserve constant
          appreciation. His actions are full of wisdom, and every blessing
          reflects His greatness.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/56.m4a" />

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
          When someone gives you a gift, you say thank you. But Allah gives you
          life, love, food, and more every single day. <strong>Al-Ḥamīd</strong>{" "}
          means He always deserves your thanks — even when things are tough.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
            🌱 Root Word
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Ḥamīd</strong> comes from the root{" "}
            <strong>ح-م-د (Ḥ-M-D)</strong>, meaning <em>to praise</em>,{" "}
            <em>to thank</em>, or <em>to glorify with admiration</em>. It is the
            same root used in “Al-ḥamdu lillāh” – All praise belongs to Allah.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
            ⚖️ Al-Ḥamīd vs Similar Names
          </h3>
          <ul
            style={{
              paddingLeft: "20px",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            <li>
              <strong>Al-Ḥamīd</strong> – Deserving of constant and eternal
              praise
            </li>
            <li>
              <strong>Ash-Shakūr</strong> – Rewards even the smallest good deed
            </li>
            <li>
              <strong>Al-Karīm</strong> – The generous one who gives
              abundantly
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/55" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/57" className={`${styles.navButton} ${styles.next}`}>
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
          <strong>Al-Ḥamīd</strong> is found in:
        </p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 14:8</li>
          <li>Surah 22:64</li>
          <li>Surah 31:12</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉{" "}
          <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%AD%D9%85%D9%8A%D8%AF"
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

export default Page56;
