import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page93 = () => {
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
          ٱلنُّورُ
        </h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          An-Nūr – The Light
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>An-Nūr</strong> is the One who brings light to all of creation. 
          He illuminates the hearts of believers, guides us through darkness, and is the source of all true light in this world and the next.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/93.m4a" />

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
          Think about how you feel when you turn on a light in a dark room — it feels safe and clear. 
          <strong>An-Nūr</strong> is the One who gives light not just to your eyes, but to your heart. 
          He helps you see what’s right and beautiful.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>An-Nūr</strong> comes from the root <strong>ن-و-ر (Nūn-Wāw-Rā)</strong>, which means light, radiance, and clarity. 
            This root is used for both physical and spiritual illumination.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>💡 Light Beyond the Eyes</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li>An-Nūr gives physical light like the sun and stars</li>
            <li>He gives spiritual light — guidance, wisdom, clarity</li>
            <li>His light can never be extinguished</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/92" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/94" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>An-Nūr</strong> is directly mentioned in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah An-Nūr (24:35)</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/24/35"
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

export default Page93;
