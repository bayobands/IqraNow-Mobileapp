import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page39 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْمُقِيتُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Muqīt – The Sustainer
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Muqīt</strong> is the One who provides everyone with exactly what they need — whether it’s food, strength, support, or guidance. 
          He gives each creation its sustenance in the perfect way, at the perfect time.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/39.m4a" />

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
          Every bite you eat, every breath you take — it’s all from <strong>Al-Muqīt</strong>. 
          He gives birds their food and trees their sunlight. He gives you everything you need to live and grow.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Muqīt</strong> comes from the root <strong>ق-و-ت (Q-W-T)</strong>, which refers to **nourishment**, **sustenance**, or **support**. 
            It’s about giving what is needed to survive and thrive.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Muqīt vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Muqīt</strong> – Provides detailed and tailored sustenance</li>
            <li><strong>Ar-Razzāq</strong> – Provides abundant provision to all</li>
            <li><strong>Al-Karīm</strong> – Gives generously beyond what’s asked</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/38" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/40" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Muqīt</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 4:85</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%85%D9%82%D9%8A%D8%AA"
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

export default Page39;
