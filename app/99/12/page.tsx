import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page12 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلْبَارِئُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Al-Bāri’ – The Evolver, The Maker from Nothing
        </h2>

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Al-Bāri’</strong> is the One who brings all things into existence in perfect proportion and harmony. 
          While <em>Al-Khāliq</em> focuses on originating creation, <em>Al-Bāri’</em> highlights the act of evolving that creation in balance — forming systems, organs, species, and souls, all without copying anything.
        </p>

        {/* Audio Player */}
        <AudioPlayer src="/99/audio/12.m4a" />

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
          When you look at your fingers, your eyes, or how animals are all different — that’s the work of <strong>Al-Bāri’</strong>. 
          He made everything unique, beautiful, and balanced, without copying from anything before.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            <strong>Al-Bāri’</strong> comes from the root <strong>ب-ر-أ (B-R-A)</strong>, which means **to evolve**, **to bring forth**, or **to make free of imperfection**. 
            It’s used to describe something brought into perfect functional form, with no prior model.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Al-Bāri’ vs Similar Names</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li><strong>Al-Khāliq</strong> – Brings into existence from nothing</li>
            <li><strong>Al-Bāri’</strong> – Evolves and forms with harmony and order</li>
            <li><strong>Al-Musawwir</strong> – Designs and shapes with beauty and uniqueness</li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/99/11" className={`${styles.navButton} ${styles.last}`}>
            ← Last Name
          </a>
          <a href="/99/13" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>

      {/* Qur’an Sidebar */}
      <div className={styles.quranSidebar}>
        <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
        <p><strong>Al-Bāri’</strong> is mentioned in:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 59:24</li>
          <li>Surah 2:54</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%A8%D8%A7%D8%B1%D8%A6"
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

export default Page12;
