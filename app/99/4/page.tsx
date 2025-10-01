import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page4 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْقُدُّوسُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Quddus – The Absolutely Pure
        </h2>


        {/* Custom Audio Player */}
        <AudioPlayer src="/99/audio/4.m4a" />



        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Quddus</strong> means that Allah is completely and perfectly <strong>pure</strong> — free from any flaw, imperfection, or weakness.
          He is untouched by evil, unaffected by tiredness, and beyond anything that is impure in creation. His actions,
          names, and essence are pure and perfect — He is holiness itself.
        </p>

        

        {/* Kid Reflection */}
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
          Imagine a room so clean that no dust or dirt can ever reach it. That’s just a tiny idea of what
          <strong> Al-Quddus</strong> means. Allah isn’t just clean — He is <strong>perfectly pure</strong>.
          Nothing wrong, bad, or unfair ever touches Him. Everything He does is beautiful and flawless.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Quddus</strong> comes from the root <strong>ق-د-س (Q-D-S)</strong>, meaning <strong>pure</strong>, <strong>holy</strong>, or <strong>blessed</strong>.
            From this root we get the word <em>Quds</em> (sacred), as in <em>Bayt al-Maqdis</em> (Jerusalem).
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Quddus vs As-Salam</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Quddus</strong> – Absolute purity from flaws or fault</li>
            <li><strong>As-Salam</strong> – Absolute peace, wholeness, and freedom from harm</li>
            <li>Together: Allah is perfectly pure and perfectly peaceful — inside and out</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/3" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/5" className={`${styles.navButton} ${styles.next}`}>
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
        <p><strong>Al-Quddus</strong> is mentioned in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 59:23</li>
          <li>Surah 62:1</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%82%D9%8F%D8%AF%D9%91%D9%8F%D9%88%D8%B3%D9%8F"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all on Quran.com →
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page4;
