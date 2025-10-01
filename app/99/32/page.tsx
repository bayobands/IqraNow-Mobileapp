import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page32 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْحَلِيمُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Ḥalīm – The Most Forbearing
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Ḥalīm</strong> is the One who does not rush to punish. 
          Even when people sin or disobey, He gives them time to turn back, to reflect, and to repent. 
          His patience is endless, and He never reacts with anger like humans do.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/32.m4a" />

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
          Even when we make mistakes, <strong>Al-Ḥalīm</strong> is patient. 
          He gives us chance after chance to fix things and come back to Him. 
          His kindness doesn’t run out — ever.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Ḥalīm</strong> comes from the root <strong>ح-ل-م (Ḥ-L-M)</strong>, which means **to be calm**, **to delay reaction**, 
            or **to be gentle even when anger is deserved**. It’s the kind of patience that holds back power, not weakness.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Ḥalīm vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Ḥalīm</strong> – Shows great patience and restraint</li>
            <li><strong>Al-Ghafūr</strong> – Forgives mistakes generously</li>
            <li><strong>Al-ʿAfūw</strong> – Erases sins completely</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/31" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/33" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Ḥalīm</strong> is found in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 2:235</li>
          <li>Surah 17:44</li>
          <li>Surah 35:41</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%AD%D9%84%D9%8A%D9%85"
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

export default Page32;
