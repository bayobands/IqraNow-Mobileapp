import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page50 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلشَّهِيدُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Ash-Shahīd – The All-Observing Witness
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Ash-Shahīd</strong> is the One who sees and knows everything — nothing escapes His attention. 
          He is the perfect witness to all actions, thoughts, and intentions. He sees the truth, and He will testify to it on the Day of Judgment.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/50.m4a" />

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
          Even when no one sees the good you do — Allah sees it. 
          Even when you try to hide your pain — Allah knows it. 
          <strong>Ash-Shahīd</strong> is always watching with care and justice.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Ash-Shahīd</strong> comes from the root <strong>ش-ه-د (Sh-H-D)</strong>, meaning **to witness**, **to be present**, or **to testify**. 
            It refers to both seeing and standing as a truthful witness.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Ash-Shahīd vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Ash-Shahīd</strong> – The ever-watching witness of all deeds</li>
            <li><strong>Al-Baṣīr</strong> – Sees all things, even what’s hidden</li>
            <li><strong>Al-Ḥafīẓ</strong> – Protects and records all actions</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/49" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/51" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Ash-Shahīd</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 4:79</li>
          <li>Surah 41:53</li>
          <li>Surah 33:55</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%B4%D9%87%D9%8A%D8%AF"
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

export default Page50;
