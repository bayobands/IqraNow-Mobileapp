import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page92 = () => {
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
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>
          ٱلنَّافِعُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          An-Nāfiʿ – The Giver of Benefit
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>An-Nāfiʿ</strong> is the One who brings about all that is beneficial — in this life and the next. 
          He gives knowledge, guidance, health, friendships, and success. Every good we receive flows from His will and mercy.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/92.m4a" />

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
          Did you ever learn something cool? Make a new friend? Get better after being sick? 
          <strong>An-Nāfiʿ</strong> is the One who gave you that benefit. 
          Every good thing in our lives is from Him.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>An-Nāfiʿ</strong> comes from the root <strong>ن-ف-ع (Nūn-Fā-ʿAyn)</strong>, meaning to benefit or to be useful. 
            It’s the opposite of the root for harm (Ḍ-R-R), and shows Allah’s active role in guiding good toward His creation.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌟 Benefit vs Harm</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Ad-Dhārr</strong> – allows harm when it brings wisdom</li>
            <li><strong>An-Nāfiʿ</strong> – brings all benefit and goodness</li>
            <li>Both work together for your best outcome in the end</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/91" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/93" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Reflected in the Qur’an</h3>
        <p><strong>An-Nāfiʿ</strong> is not mentioned by name in the Qur’an but is reflected through verses about Allah granting benefit and goodness.</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah Fāṭir (35:2)</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/35/2"
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

export default Page92;
