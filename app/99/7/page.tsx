import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page7 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْمُهَيْمِنُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Muhaymin – The All-Watchful Guardian
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Muhaymin</strong> means that Allah is constantly **watching over**, **protecting**, and **judging** His creation. 
          He sees everything — what’s hidden and what’s shown — and ensures truth is preserved. His care is full of mercy and His 
          observation is perfect. He protects the believer’s faith, oversees all actions, and maintains balance in the universe.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/audio/al-muhaymin.mp3" />

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
          Imagine someone who never stops looking after you — even when you're sleeping or far away. That’s <strong>Al-Muhaymin</strong>.
          Allah watches you with love, knows what’s in your heart, and protects your faith like a shield that never drops.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Muhaymin</strong> comes from the root <strong>ه-ي-م-ن (H-Y-M-N)</strong>, which carries meanings of 
            **watching over**, **protecting**, and **witnessing with authority**. It’s a rare and powerful word, unique in its usage.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Muhaymin vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Muhaymin</strong> – Constantly watches and protects truth and creation</li>
            <li><strong>Al-Mu’min</strong> – Gives safety and belief to hearts</li>
            <li><strong>Al-Hafidh</strong> – Preserves and guards what He wills</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/6" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/8" className={`${styles.navButton} ${styles.next}`}>
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
        <p><strong>Al-Muhaymin</strong> is mentioned in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 59:23</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%85%D9%8F%D9%87%D9%8A%D9%92%D9%85%D9%90%D9%86%D9%8F"
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

export default Page7;
