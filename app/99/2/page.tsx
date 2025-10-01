import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page2 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلرَّحِيمُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Ar-Raheem – The Especially Merciful
        </h2>

        {/* Custom Audio Player */}
        <AudioPlayer src="/99/audio/2.m4a" />

        {/* Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          <strong>Ar-Raheem</strong> refers to Allah’s **special, ongoing mercy** that is shown especially to the believers.
          While <strong>Ar-Rahman</strong> covers all of creation, Ar-Raheem is more specific: it is personal, deep, and lasting — especially in the **next life**. It is the mercy that forgives, guides, answers, and rewards.
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
          Imagine a teacher who sees you get the answer wrong — but instead of getting upset, they smile and say, 
          “Let’s try again.” And the next day, they help you again. And again. They never give up on you.That’s like <strong>Ar-Raheem</strong>. Allah’s
           special mercy is just like that — kind, patient, and always there for those who believe in Him. Even when we make mistakes,
           He keeps helping us, forgiving us, and rewarding us when we try our best.
        </div>

        {/* Root Word */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            Like Ar-Rahman, <strong>Ar-Raheem</strong> comes from the root <strong>ر-ح-م (R-Ḥ-M)</strong>, meaning mercy and compassion.
            Both names show different shades of Allah’s care — Ar-Rahman is wide and vast; Ar-Raheem is constant and close.
          </p>
        </div>

        {/* Comparison */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Ar-Raheem vs Ar-Rahman</h3>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li>
              <strong>Ar-Rahman</strong> – Allah’s mercy for **everyone**, in **this world**.
            </li>
            <li>
              <strong>Ar-Raheem</strong> – Allah’s special mercy for **believers**, especially in **the Hereafter**.
            </li>
          </ul>
        </div>

        {/* Navigation */}
<div className={styles.navContainer}>
  <a href="/99/1" className={`${styles.navButton} ${styles.last}`}>
    ← Last Name
  </a>

  <a href="/99/3" className={`${styles.navButton} ${styles.next}`}>
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
        <p>
          <strong>Ar-Raheem</strong> appears <strong>over 100 times</strong> in the Qur’an, often alongside Ar-Rahman. Examples:
        </p>
        <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
          <li>Surah 1:1, 1:3</li>
          <li>Surah 2:163</li>
          <li>Surah 33:43</li>
        </ul>
        <p style={{ marginTop: "10px" }}>
          👉 <a
            href="https://quran.com/search?q=%D8%A7%D9%84%D8%B1%D9%91%D8%AD%D9%90%D9%8A%D9%85%D9%8F"
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

export default Page2;
