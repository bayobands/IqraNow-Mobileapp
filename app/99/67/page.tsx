import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page67 = () => {
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
          ٱلْأَحَدُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Aḥad – The Indivisible One
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Aḥad</strong> means the One who is absolutely unique and indivisible. 
          He has no second, no equal, no parts, and no comparison. 
          He is One in His essence and cannot be divided or duplicated in any way.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/67.m4a" />

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
          When we say "One and only," we really mean <strong>Al-Aḥad</strong>. 
          There is no one like Him at all — not even a little bit. He’s completely unique in every way.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Aḥad</strong> comes from the root <strong>أ-ح-د (ʾ-Ḥ-D)</strong>, meaning one or single. 
            It emphasizes absolute oneness that cannot be shared, split, or matched.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Aḥad vs Al-Wāḥid</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Aḥad</strong> – One in essence, cannot be divided</li>
            <li><strong>Al-Wāḥid</strong> – One in number, no partners</li>
            <li>Both affirm Allah's absolute uniqueness and singularity</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/66" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/68" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Aḥad</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 112:1 – “Say: He is Allah, the One (Al-Aḥad)”</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/112/1"
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

export default Page67;
