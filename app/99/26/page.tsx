import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page26 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلسَّمِيعُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          As-Samīʿ – The All-Hearing
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>As-Samīʿ</strong> is the One who hears everything — every whisper, every cry, every prayer. 
          He hears the secrets in our hearts and the words we dare not speak out loud. His hearing is complete and perfect, without limits or delay.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/26.m4a" />

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
          Even when no one listens to you, <strong>As-Samīʿ</strong> is listening. You can talk to Him any time, about anything. 
          He hears every duʿāʾ, even when it’s just in your heart.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>As-Samīʿ</strong> comes from the root <strong>س-م-ع (S-M-ʿ)</strong>, which means **to hear**, **to listen**, or **to pay attention**. 
            It’s not just physical hearing — it’s hearing with awareness and care.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ As-Samīʿ vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>As-Samīʿ</strong> – Hears all things perfectly</li>
            <li><strong>Al-Baṣīr</strong> – Sees all things perfectly</li>
            <li><strong>Al-‘Alīm</strong> – Knows all things, seen and unseen</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/25" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/27" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>As-Samīʿ</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 2:127</li>
          <li>Surah 8:17</li>
          <li>Surah 58:1</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%B3%D9%85%D9%8A%D8%B9"
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

export default Page26;
