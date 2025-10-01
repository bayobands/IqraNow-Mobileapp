import { NextResponse } from "next/server";

const verses = [
  {
    lines: [
      {
        arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
        transliteration: "Allāhu lā ilāha illā huwa al-ḥayyul-qayyūm",
        translation: "Allah – there is no deity except Him, the Ever-Living, the Sustainer of [all] existence.",
      },
      {
        arabic: "لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ",
        transliteration: "Lā ta’khudhuhu sinatun wa lā nawm",
        translation: "Neither drowsiness overtakes Him nor sleep.",
      },
      {
        arabic: "لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ",
        transliteration: "Lahu mā fī as-samāwāti wa mā fī al-arḍ",
        translation: "To Him belongs whatever is in the heavens and whatever is on the earth.",
      },
      {
        arabic: "مَنْ ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ",
        transliteration: "Man dhā alladhī yashfaʿu ʿindahu illā bi-idhnih",
        translation: "Who is it that can intercede with Him except by His permission?",
      },
      {
        arabic: "يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ",
        transliteration: "Yaʿlamu mā bayna aydīhim wa mā khalfahum",
        translation: "He knows what is [presently] before them and what will be after them,",
      },
      {
        arabic: "وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ",
        transliteration: "Wa lā yuḥīṭūna bishay’in min ʿilmihī illā bimā shā’",
        translation: "and they encompass not a thing of His knowledge except for what He wills.",
      },
      {
        arabic: "وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ",
        transliteration: "Wasiʿa kursiyyuhu as-samāwāti wa al-arḍ",
        translation: "His Kursi extends over the heavens and the earth,",
      },
      {
        arabic: "وَلَا يَئُودُهُ حِفْظُهُمَا",
        transliteration: "Wa lā ya’ūduhu ḥifẓuhumā",
        translation: "and their preservation tires Him not.",
      },
      {
        arabic: "وَهُوَ الْعَلِيُّ الْعَظِيمُ",
        transliteration: "Wa huwa al-ʿaliyyu al-ʿaẓīm",
        translation: "And He is the Most High, the Most Great.",
      },
    ],
    surah: "Al-Baqarah",
    surah_id: 2,
    verse_number: 255,
  },
];

export async function GET() {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 1);
  const weekNumber = Math.floor((today.getTime() - startOfYear.getTime()) / (7 * 24 * 60 * 60 * 1000));
  const index = weekNumber % verses.length;
  const verse = verses[index];

  return NextResponse.json(verse);
}
