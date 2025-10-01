import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page33 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْعَظِيمُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-ʿAẓīm – The Magnificent
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-ʿAẓīm</strong> is the One who is truly great in every way — in power, knowledge, mercy, and presence. 
          His greatness is beyond imagination. Nothing is like Him, and no one can ever compare to His majesty.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/33.m4a" />

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
          When we say “Subḥāna Rabbiyal-ʿAẓīm” in rukūʿ during prayer, we are praising the One who is greater than all things. 
          <strong>Al-ʿAẓīm</strong> means no problem is too big for Him — He can handle everything with ease.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-ʿAẓīm</strong> comes from the root <strong>ع-ظ-م (ʿA-Ẓ-M)</strong>, meaning **greatness**, **might**, or **to be vast and grand**. 
            It conveys the idea of something so huge and majestic that it fills the heart with awe.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-ʿAẓīm vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-ʿAẓīm</strong> – So great that nothing can compare</li>
            <li><strong>Al-Kabīr</strong> – The Incomparably Great</li>
            <li><strong>Al-Jalīl</strong> – Majestic in power and dignity</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/32" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/34" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-ʿAẓīm</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 2:255 (Āyat al-Kursī)</li>
          <li>Surah 42:4</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%B9%D8%B8%D9%8A%D9%85"
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

export default Page33;
