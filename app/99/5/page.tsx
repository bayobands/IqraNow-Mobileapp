import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page5 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلسَّلَامُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          As-Salām – The Source of Peace
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>As-Salām</strong> means that Allah is the one who is completely free from any imperfection, harm, fear, or injustice —
          and He is the One who grants that same peace to His creation. He is the One who gives safety to hearts, stillness to the soul, 
          and peace in both this life and the next. He is the source of all peace — spiritually, physically, eternally.
        </p>

        {/* Custom Audio Player */}
        <AudioPlayer src="/99/audio/5.m4a" />

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
          Imagine a moment where everything is calm — no noise, no fear, no fighting — just quiet, safe peace.
          That’s the kind of feeling Allah gives when He shows His name <strong>As-Salām</strong>. 
          He makes your heart feel safe and protected, no matter what’s happening around you.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>As-Salām</strong> comes from the root <strong>س-ل-م (S-L-M)</strong>, which means **peace**, **safety**, and **soundness**.
            It’s the same root in the words <em>Islam</em> (submission that brings peace) and <em>Salam</em> (peaceful greeting).
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ As-Salām vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>As-Salām</strong> – The One free from any harm or flaw, who gives true peace</li>
            <li><strong>Al-Mu’min</strong> – The One who gives security and faith to His servants</li>
            <li><strong>Al-Quddus</strong> – The Absolutely Pure (no corruption, no imperfection)</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/4" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/6" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
          <a href="/study/99" className={`${styles.navButton} ${styles.next}`}>
                                ↩ Back to All Names
          </a>
        </div>
      </div>

      {/* Qur'an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>As-Salām</strong> is mentioned in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 59:23</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%B3%D9%91%D9%8E%D9%84%D9%8E%D8%A7%D9%85%D9%8F"
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

export default Page5;
