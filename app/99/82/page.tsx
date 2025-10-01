import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page82 = () => {
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
          ٱلْعَفُوُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-ʿAfūw – The Pardoner
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-ʿAfūw</strong> is the One who not only forgives sins, but completely erases them. 
          He removes all traces as if they never existed. His pardon is pure mercy and complete, freeing us from guilt and punishment.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/82.m4a" />

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
          Imagine writing something wrong on a board. <strong>Al-ʿAfūw</strong> doesn’t just cross it out — 
          He wipes it away like it was never there. That’s how completely Allah forgives.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-ʿAfūw</strong> comes from the root <strong>ع-ف-و (ʿAyn-Fā-Wāw)</strong>, which means to erase, remove, or pardon completely. 
            It signifies complete erasure of faults and mercy without holding them against you.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🧼 Al-Ghafūr vs Al-ʿAfūw</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><a href="/99/34"><strong>Al-Ghafūr</strong></a> – Forgives and covers sins</li>
            <li><strong>Al-ʿAfūw</strong> – Completely erases and removes sins</li>
            <li>Both are from Allah’s immense mercy — but Al-ʿAfūw wipes the slate totally clean</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/81" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/83" className={`${styles.navButton} ${styles.next}`}>
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
        <p><strong>Al-ʿAfūw</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah An-Nisā (4:99)</li>
          <li>Surah Al-Ḥajj (22:60)</li>
          <li>Surah Ash-Shūrā (42:30)</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/4/99"
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

export default Page82;
