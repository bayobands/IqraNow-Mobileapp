import styles from "../NamesLayout.module.css";
import AudioPlayer from "../AudioPlayer";

const Page1 = () => {
  return (
    <div className={styles.quranLayout} style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1200px", margin: "auto" }}>
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "80px", marginBottom: "10px", textAlign: "center" }}>ٱلرَّحْمَـٰنُ</h1>
        <h2 style={{ fontSize: "26px", color: "#444", marginBottom: "20px", textAlign: "center" }}>
          Ar-Rahman – The Most Merciful
        </h2>


        {/* Custom Audio Player */}
        <AudioPlayer src="/99/audio/1.m4a" />

        {/* Main Description */}
        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          Ar-Rahman means Allah’s mercy is vast and covers <strong>everything and everyone</strong>, whether they believe
          in Him or not. He is merciful to all His creation — giving them life, food, safety, and love. His mercy is
          present in the sun that rises every day, in every breath we take, and in the hearts of mothers who care for
          their children.
        </p>

        <p style={{ fontSize: "19px", lineHeight: "1.7", marginBottom: "30px", textAlign: "justify" }}>
          Three things to keep in mind when you hear Ar-Rahman: <br></br>
          - <strong style={{fontSize: "17px",}}>Temporary</strong> <br></br>
          - <strong style={{fontSize: "17px",}}>High need for</strong> <br></br>
          - <strong style={{fontSize: "17px",}}>Urgent</strong> <br></br>
        </p>

        

        {/* Kid-friendly Section */}
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
          Imagine a tiny baby in its mother’s belly. The baby cannot see her, talk to her, or even comprehend her. Yet the mother
          feeds it, protects it, warms it and loves it with her whole heart... The baby is taken care if in everyway — all without anything in return for the mother.<br /><br />

          This is a small, beautiful example of what <strong>Ar-Rahman</strong> means. Allah loves us even more than that.
          He gives before we ask. He takes care of us even when we forget Him. Just like the womb surrounds the baby, Allah’s
          mercy surrounds <strong>everything</strong> — whether we see it or not.<br /><br />

          The Prophet ﷺ said in a hadith:
          <br /><br />
          <em>
            “The womb is derived from Ar-Rahman, so whoever keeps the ties of the womb, Allah will keep ties with him...”<br />
          </em>
          <span style={{ fontSize: "14px", color: "#666" }}>— Sahih al-Bukhari & Sahih Muslim</span>
          <br /><br />

          Allah chose <strong>Ar-Rahman</strong> as one of His most special names. It shows us how deeply He cares, how
          constantly He gives, and how His love, like a mother’s, never stops.
        </div>

        {/* Root Word Section */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🌱 Root Word</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            The name <strong>Ar-Rahman</strong> comes from the root word <strong>ر-ح-م (R-Ḥ-M)</strong>, which means
            mercy, compassion, and womb — showing deep, nurturing love. It’s the same root used for “rahmah” (mercy) and
            “rahim” (womb).
          </p>
        </div>

        {/* Comparison with Similar Names */}
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚖️ Ar-Rahman vs Ar-Raheem</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            Both names come from the same root (ر-ح-م) but carry different shades of meaning:
          </p>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li>
              <strong>Ar-Rahman</strong> – vast, all-encompassing mercy for <strong>all creation</strong>, in <strong>this life</strong>.
            </li>
            <li>
              <strong>Ar-Raheem</strong> – continuous, special mercy for <strong>believers</strong>, especially in <strong>the hereafter</strong>.
            </li>
            
          </ul>
          
        </div>


        {/* Comparison with Similar Names */}
        <div style={{ marginBottom: "40px" }}>
          <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>⚔️ Ar-Rahamn vs Ar-Ra'uf</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
           Ar-Ra’ūf (ٱلرَّءُوف) and Ar-Raḥmān (ٱلرَّحْمَٰن) are names of Allah that relate to His mercy, but they emphasize different aspects of it.
          </p>
          <ul style={{ paddingLeft: "20px", fontSize: "16px", marginTop: "10px" }}>
            <li>
              <strong>Ar-Rahman</strong> – this type of mercy from Allah is <strong>Temporary</strong>, in <strong>this life</strong>.
            </li>
            <li>
              <strong>Ar-Ra'uf'</strong> – "pitying mercy" is mercy driven by heartfelt compassion. Not just kindness, but a soft, deeply caring kind of kindness.
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div className={styles.navContainer}>
          <a href="/study/99" className={`${styles.navButton} ${styles.next}`}>
            ↩ Back to All Names
          </a>
          <a href="/99/2" className={`${styles.navButton} ${styles.next}`}>
            Next Name →
          </a>
        </div>
      </div>
        

      {/* Qur'an Sidebar */}
<div className={styles.quranSidebar}>
  <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>📖 Found in the Qur’an</h3>
  <p>
    <strong>Ar-Rahman</strong> is mentioned <strong>57 times</strong> in <strong>18 surahs</strong>. Key locations:
  </p>
  <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
    <li>Surah 1:1, 1:3</li>
    <li>Surah 17:110</li>
    <li>Surah 19 – 16 times total</li>
    <li>Surah 55:1</li>
  </ul>
  <p style={{ marginTop: "10px" }}>
    👉 <a
      href="https://quran.com/search?q=%D8%A7%D9%84%D8%B1%D9%91%D8%AD%D9%92%D9%85%D9%8E%D9%80%D9%B4%D9%86%D9%8F"
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

export default Page1;
