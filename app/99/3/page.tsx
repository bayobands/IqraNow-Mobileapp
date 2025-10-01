import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page3 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْمَلِكُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Malik – The King and Owner of All
        </h2>


        {/* Custom Audio Player */}
        <AudioPlayer src="/99/audio/3.m4a" />

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Malik</strong> means Allah is the **Sovereign**, the **absolute King** over everything that exists. 
          He owns all creation, rules it without any need for approval, and nothing can happen without His permission. 
          His power is not limited by time, space, or authority — He doesn’t just control, He created the entire dominion.
        </p>



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
          <strong>Al-Malik (The King)</strong><br></br> — Allah is the true and eternal King, the owner of all that exists. Everything belongs to Him, and nothing moves without His command.<br></br>
<br></br>
          <strong>How you can live by it:</strong><br></br>
Walk humbly, knowing you are His slave — created to serve, not to rule. Your worth isn’t in 
what you own, but in who owns you. Trust His rule over your life, submit with love, and find honor in being a servant of the Most Majestic King.<br></br>
<br></br>
          Imagine the most powerful king you’ve ever seen in a story — with armies, gold, castles. Allah is more than that.
          He doesn’t just rule a land — He rules **the universe**, every planet, every heart. And He never sleeps or gets tired.
          That’s what it means when we say Allah is <strong>Al-Malik</strong>: the King of kings.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Malik</strong> comes from the root <strong>م-ل-ك (M-L-K)</strong>, which means to **own**, **possess**, and **govern**.
            From this root also come the names <em>Malik</em> (king) and <em>Mulk</em> (dominion or kingdom).
          </p>
        </div>

        {/* Comparison with Similar Names */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Malik vs Al-Maalik</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Malik</strong> – King over all creation (full dominion)</li>
            <li><strong>Malik Yawm ad-Deen</strong> – “Master of the Day of Judgement” (Surah Al-Fatiha)</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/2" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/4" className={`${styles.navButton} ${styles.next}`}>
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
        <p><strong>Al-Malik</strong> is mentioned in several places, including:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 59:23</li>
          <li>Surah 20:114</li>
          <li>Surah 23:116</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%85%D9%8E%D9%84%D9%90%D9%83%D9%8F"
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

export default Page3;
