import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page6 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْمُؤْمِنُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Mu’min – The Giver of Faith and Security
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Mu’min</strong> is the One who gives **iman (faith)** to hearts and **security** to lives. He is the One who removes fear, grants trust, and provides inner peace. He protects His servants from harm in both this world and the next, and He is the source of all true belief, safety, and assurance.
        </p>

        {/* Custom Audio Player */}
        <AudioPlayer src="/99/audio/6.m4a" />

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
          When you’re scared and someone hugs you and says, “You’re safe now” — that’s the feeling of <strong>Al-Mu’min</strong>. 
          Allah gives you calm in your heart, belief in your mind, and protection around you. He makes you feel safe in a way no one else can.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Mu’min</strong> comes from the root <strong>أ-م-ن (A-M-N)</strong>, which means **to be secure**, **to trust**, or **to believe**.
            From this root we get <em>iman</em> (faith), <em>amana</em> (trust), and <em>amin</em> (safety).
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Mu’min vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Mu’min</strong> – Gives faith and safety</li>
            <li><strong>As-Salām</strong> – Source of total peace and protection</li>
            <li><strong>Al-Muhaymin</strong> – Oversees and watches over all creation with care</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/5" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/7" className={`${styles.navButton} ${styles.next}`}>
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
        <p><strong>Al-Mu’min</strong> is mentioned in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 59:23</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D9%85%D9%8F%D8%A4%D9%92%D9%85%D9%90%D9%86%D9%8F"
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

export default Page6;
