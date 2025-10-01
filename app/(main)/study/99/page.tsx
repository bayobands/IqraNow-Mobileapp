"use client";

import Image from "next/image";
import { useAudio } from "react-use";
import {
  Play,
  Pause,
  Loader2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
} from "react";
import classNames from "classnames";
import Link from "next/link";



type AudioCardProps = {
  id: string;
  name: string;
  meaning: string;
  advanced: React.ReactNode;
  image: string;
  audioSrc: string;
  page: string;
};

const AudioCard = ({
  id,
  name,
  meaning,
  advanced,
  image,
  audioSrc,
  page,
}: AudioCardProps) => {
  const [audio, state, controls] = useAudio({ src: audioSrc, autoPlay: false });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <div className="border border-neutral-800 rounded-xl p-5 shadow-md relative overflow-hidden h-[160px]">
      <div
        className="lg:hidden absolute top-0 right-0 z-30 h-full w-12 bg-gray-600 hover:bg-gray-300 flex items-center justify-center cursor-pointer"
        onClick={() => setShowAdvanced(!showAdvanced)}
      >
        {showAdvanced ? (
          <ChevronLeft size={20} className="text-white" />
        ) : (
          <ChevronRight size={20} className="text-white" />
        )}
      </div>

      <div
        className={classNames(
          "transition-transform duration-500 ease-in-out w-full",
          showAdvanced
            ? "translate-x-[-100%] lg:translate-x-0 hidden lg:flex"
            : "translate-x-0 block"
        )}
      >
        <div className="text-sm text-neutral-500 mb-2">#{id}</div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-6">
              <div className="relative w-[200px] h-[100px] bg-white">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                    <Loader2 className="animate-spin text-gray-500" size={32} />
                  </div>
                )}
                <Image
                  src={image}
                  alt={name}
                  fill
                  className={`rounded-lg object-contain transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                  onLoadingComplete={() => setImageLoaded(true)}
                />
              </div>

              <div className="flex items-center mb-6 gap-4">
                <button
                  onClick={() =>
                    state.playing ? controls.pause() : controls.play()
                  }
                  className="p-3 bg-none text-black rounded-full hover:text-blue-800"

                >
                  {state.playing ? <Pause size={28} /> : <Play size={28} />}
                </button>
                {audio}
              </div>
            </div>
          </div>

          <div className="hidden lg:block flex-1 mt-0 lg:mt-0">
            <div className="text-neutral-600 text-sm max-h-[130px] overflow-y-auto pr-4 scroll-thin mb-4">
              <p className="text-neutral-700 text-xl font-semibold">{name}</p>
            <p className="text-neutral-600 text-base mb-2">{meaning}</p>
              
              <div className="mt-2 mb-9">
              <Link href={page}>
                <button className="px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-400">
                  Learn More
                </button>
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={classNames(
          "lg:hidden absolute top-0 left-0 right-12 bg-white p-5 z-20 h-full transition-transform duration-500 ease-in-out",
          showAdvanced ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="text-sm text-neutral-500 mb-2">#{id}</div>
        <p className="text-neutral-700 text-xl font-semibold">{name}</p>
        <p className="text-neutral-600 text-base mb-4">{meaning}</p>
        <div className="text-neutral-600 text-sm max-h-[125px] overflow-y-auto pr-2 scroll-thin mb-4">
          <div className="mt-auto">
          <Link href={page}>
            <button className="px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-400">
                  Learn More
              </button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};



const StudyGuidePage = () => {
  const [showReflection, setShowReflection] = useState(false);
  const itemRefs = useMemo(() => {
    const refs: Record<string, React.RefObject<HTMLDivElement | null>> = {};
    Object.keys(studyData).forEach((id) => {
      refs[id] = React.createRef<HTMLDivElement>();
    });
    return refs;
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const sortedItems: [string, AudioCardProps][] = Object.entries(studyData)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .filter(([id, content]) => {
      const query = searchQuery.toLowerCase();
      return (
        id.includes(query) || content.name.toLowerCase().includes(query)
      );
    });

  const [visibleCount, setVisibleCount] = useState(10);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) =>
            Math.min(prev + 10, sortedItems.length)
          );
        }
      },
      { threshold: 1 }
    );

    const currentRef = loaderRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [sortedItems.length]);

  return (
    <div className="min-h-screen px-6 py-10 bg-white">
      <h1 className="text-2xl font-bold mb-8">The 99 Names of Allah: A Path to Inner Refinement</h1>

      
{/* Mobile: Show/Hide button before the reflection section */}
<div className="lg:hidden">
  <button
    onClick={() => setShowReflection(!showReflection)}
    className="mb-6 text-sm font-medium text-black-600 hover:underline"
  >
    {showReflection ? "Hide" : "Show"}
  </button>
</div>

{/* Desktop: Show/Hide button above search bar */}
<div className="hidden lg:block mb-6">
  <button
    onClick={() => setShowReflection(!showReflection)}
    className="text-sm font-medium text-black-600 hover:underline"
  >
    {showReflection ? "Hide" : "Show"}
  </button>
</div>


{/* Conditional Content */}
{showReflection && (
  <div className="space-y-4 text-gray-800 text-sm leading-relaxed">
    <p>
      Imam Al-Ghazali, the great Islamic theologian and mystic, taught that the 99 Names of Allah are not merely divine titles to be memorized — <strong>they are a blueprint for the soul’s journey toward God.</strong> Each Name highlights an attribute of Allah, but it also serves as a mirror by which we can reflect and refine our own character.
    </p>
    <p><strong>He wrote:</strong></p>
    <p className="font-bold">
      "نصيب العبد من كل اسم أن يتحلى بمعناه قدر طاقته، ويظهر أثره في معاملته لخلق الله"
    </p>
    <p>
      "The servant's share in each of these Names is that he should take on a meaning from it, to the extent of his ability, and that this should manifest in his behavior with God’s creation."
      <br />
      — Imam Al-Ghazali, <em>Al-Maqsad al-Asna fi Sharh Asma’ Allah al-Husna</em>
    </p>
    <p>
      Knowing Ar-Rahman should make us more merciful. Reflecting Al-‘Adl should make us just — these Names of Allah are not just understood, they are lived.
    </p>
    <p><strong>To Al-Ghazali, this is the essence of spiritual refinement:</strong></p>
    <p>
      "To draw near to God is to take on, in a human way, the qualities He loves — and He has revealed those qualities in His Names."
    </p>
    <p>🌿 To know His Names is to begin the path of becoming more like the qualities He loves.</p>
  </div>
)}


      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by number or name..."
        className="my-8 p-2 border border-gray-300 rounded w-full max-w-md"
        onChange={(e) => {
          const value = e.target.value;
          setSearchQuery(value);
          const match = Object.entries(studyData).find(
            ([id, content]) =>
              id === value ||
              content.name.toLowerCase() === value.toLowerCase()
          );
          if (match) {
            const [matchId] = match;
            const el = itemRefs[matchId]?.current;
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
      />
      <br></br>

      {/* Names List */}
      <div className="flex flex-col gap-10">
        {sortedItems.slice(0, visibleCount).map(([id, content]) => (
          <div key={id} ref={itemRefs[id]}>
            <AudioCard
              id={id}
              name={content.name}
              meaning={content.meaning}
              advanced={content.advanced}
              image={content.image}
              audioSrc={content.audioSrc}
              page={content.page}
            />
          </div>
        ))}
        <div ref={loaderRef} className="h-10" id="scroll-anchor" />
      </div>
    </div>
  );
};

export default StudyGuidePage;


const studyData: Record<string, AudioCardProps> = {
  "1": {
    id: "1",
    name: "Ar-Rahman",
    meaning: "The Most Merciful",
    advanced:(
    <ul className="list-disc list-inside space-y-1">
      <div>Ar-Rahman indicates an all-encompassing mercy from Allah that extends to all creation in this life.</div>
      <div>3 things to keep in mind when أن is added to any word in arabic:</div>
      <li>Temporary.</li>
      <li>High need of.</li>
      <li>Urgent.</li>
      <div>The root word (rhm) means womb, this comparision that Allah gives is mindblowing. In the womb, a baby is lovingly provided for by a mother it cannot see or comprehend. Likewise, we are sustained by Allah’s mercy and care, even when we fail to recognize His presence. </div>
    </ul>
    
  ),
    page: "/99/1",
    image: "/99/images/99-1.png",
    audioSrc: "/99/audio/1.m4a",
  },
  "2": {
    id: "2",
    name: "Ar-Rahim",
    meaning: "The Most Compassionate",
    advanced:
      "Ar-Rahim reflects Allah's special mercy toward the believers, particularly in the Hereafter.",
    image: "/99/images/99-2.png",
    audioSrc: "/99/audio/2.m4a",
    page: "/99/2",
  },
  "3": {
    id: "3",
    name: "Al-Malik",
    meaning: "The King and Owner of Dominion",
    advanced:
      "Al-Malik signifies that Allah alone owns and rules over all creation with absolute authority.",
    image: "/99/images/99-3.png",
    audioSrc: "/99/audio/3.m4a",
    page: "/99/3",
  },
  "4": {
    id: "4",
    name: "Al-Quddus",
    meaning: "The Pure One",
    advanced:
      "Allah is completely pure from any flaw, weakness, or imperfection. His actions, names, and essence are holy and perfect. Al-Quddūs is above anything corrupt, unjust, or impure.",
    image: "/99/images/99-4.png",
    audioSrc: "/99/audio/4.m4a",
    page: "/99/4",
  },
  "5": {
    id: "5",
    name: "As-Salam",
    meaning: "The Source of Peace",
    advanced:
      "Allah is the giver of peace, safety, and freedom from harm. His presence brings calm, His actions are free from flaw, and He grants inner and outer peace to His creation. As-Salām is the one who protects and perfects.",
    image: "/99/images/99-5.png",
    audioSrc: "/99/audio/5.m4a",
    page: "/99/5",
  },
  "6": {
    id: "6",
    name: "Al-Mu'min",
    meaning: "The Inspirer of Faith",
    advanced:
      "Allah grants faith to hearts and safety to lives. He is the one who confirms the truth, protects the believers, and gives peace from fear. Al-Mu’min assures His servants through His promises and His protection.",
    image: "/99/images/99-6.png",
    audioSrc: "/99/audio/6.m4a",
    page: "/99/6",
  },
  "7": {
    id: "7",
    name: "Al-Muhaymin",
    meaning: "The Guardian",
    advanced:
      "Allah watches over all creation, protects it, and keeps it in perfect order. He sees every hidden thing and knows every detail. Al-Muhaymin ensures justice, truth, and care in everything He oversees.",
    image: "/99/images/99-7.png",
    audioSrc: "/99/audio/7.m4a",
    page: "/99/7",
  },
  "8": {
    id: "8",
    name: "Al-Aziz",
    meaning: "The Almighty",
    advanced:
      "Allah is all-powerful, honored above all, and never defeated. He has complete control and grants strength and dignity to whom He wills. Often paired with Al-Ḥakīm (The Wise), this reminds us that His unmatched power is always exercised with perfect wisdom — never random, never unjust.",
    image: "/99/images/99-8.png",
    audioSrc: "/99/audio/8.m4a",
    page: "/99/8",
  },
  "9": {
    id: "9",
    name: "Al-Jabbar",
    meaning: "The Compeller",
    advanced:(
    <ul className="list-disc list-inside space-y-1">
      <div>Allah is the One who cannot be resisted. He enforces His will over all things, heals the broken, and lifts the oppressed. Al-Jabbār combines supreme power with mercy — He mends hearts and brings justice with absolute control.</div>
      <div>When used for people, however, “jabbār” often means tyrannical or oppressive, because no human can rightfully claim such absolute authority. What is majestic in Allah becomes blameworthy in creation — reminding us that only Al-Jabbār can be both powerful and perfectly just.</div>
    </ul>
    ),
    image: "/99/images/99-9.png",
    audioSrc: "/99/audio/9.m4a",
    page: "/99/9",
  },
  "10": {
    id: "10",
    name: "Al-Mutakabbir",
    meaning: "The Supremely Great",
    advanced:
      "N/A",
    image: "/99/images/99-10.png",
    audioSrc: "/99/audio/10.m4a",
    page: "/99/10",
  },
  "11": {
    id: "11",
    name: "Al-Khaliq",
    meaning: "The Creator",
    advanced:
      "",
    image: "/99/images/99-11.png",
    audioSrc: "/99/audio/11.m4a",
    page: "/99/11",
  },
  "12": {
    id: "12",
    name: "Al-Bari'",
    meaning: "The Maker of Order",
    advanced:
      "N/A",
    image: "/99/images/99-12.png",
    audioSrc: "/99/audio/12.m4a",
    page: "/99/12",
  },
  "13": {
    id: "13",
    name: "Al-Musawwir",
    meaning: "The Shaper of Beauty",
    advanced:
      "N/A",
    image: "/99/images/99-13.png",
    audioSrc: "/99/audio/13.m4a",
    page: "/99/13",
  },
  "14": {
    id: "14",
    name: "Al-Ghaffar",
    meaning: "The Forgiving",
    advanced:
      "N/A",
    image: "/99/images/99-14.png",
    audioSrc: "/99/audio/14.m4a",
    page: "/99/14",
  },
  "15": {
    id: "15",
    name: "Al-Qahhar",
    meaning: "The Subduer",
    advanced:
      "N/A",
    image: "/99/images/99-15.png",
    audioSrc: "/99/audio/15.m4a",
    page: "/99/15",
  },
  "16": {
    id: "16",
    name: "Al-Wahhab",
    meaning: "The Giver of All",
    advanced:
      "N/A",
    image: "/99/images/99-16.png",
    audioSrc: "/99/audio/16.m4a",
    page: "/99/16",
  },
  "17": {
    id: "17",
    name: "Ar-Razzaq",
    meaning: "The Sustainer",
    advanced:
      "N/A",
    image: "/99/images/99-17.png",
    audioSrc: "/99/audio/17.m4a",
    page: "/99/17",
  },
  "18": {
    id: "18",
    name: "Al-Fattah",
    meaning: "The Opener",
    advanced:
      "N/A",
    image: "/99/images/99-18.png",
    audioSrc: "/99/audio/18.m4a",
    page: "/99/18",
  },
  "19": {
    id: "19",
    name: "Al-'Alim",
    meaning: "The Knower of All",
    advanced:
      "N/A",
    image: "/99/images/99-19.png",
    audioSrc: "/99/audio/19.m4a",
    page: "/99/19",
  },
  "20": {
    id: "20",
    name: "Al-Qabid",
    meaning: "The Constrictor",
    advanced:
      "N/A",
    image: "/99/images/99-20.png",
    audioSrc: "/99/audio/20.m4a",
    page: "/99/20",
  },
  "21": {
    id: "21",
    name: "Al-Basit",
    meaning: "The Reliever",
    advanced:
      "N/A",
    image: "/99/images/99-21.png",
    audioSrc: "/99/audio/21.m4a",
    page: "/99/21",
  },
  "22": {
    id: "22",
    name: "Al-Khafid",
    meaning: "The Abaser",
    advanced:
      "N/A",
    image: "/99/images/99-22.png",
    audioSrc: "/99/audio/22.m4a",
    page: "/99/22",
  },
  "23": {
    id: "23",
    name: "Ar-Rafi",
    meaning: "The Exalter",
    advanced:
      "N/A",
    image: "/99/images/99-23.png",
    audioSrc: "/99/audio/23.m4a",
    page: "/99/23",
  },
  "24": {
    id: "24",
    name: "Al-Mu'izz",
    meaning: "The Bestower of Honors",
    advanced:
      "N/A",
    image: "/99/images/99-24.png",
    audioSrc: "/99/audio/24.m4a",
    page: "/99/24",
  },
  "25": {
    id: "25",
    name: "Al-Mudhill",
    meaning: "The Humiliator",
    advanced:
      "N/A",
    image: "/99/images/99-25.png",
    audioSrc: "/99/audio/25.m4a",
    page: "/99/25",
  },
  "26": {
    id: "26",
    name: "As-Sami",
    meaning: "The Hearer of All",
    advanced:
      "N/A",
    image: "/99/images/99-26.png",
    audioSrc: "/99/audio/26.m4a",
    page: "/99/26",
  },
  "27": {
    id: "27",
    name: "Al-Basir",
    meaning: "The Seer of All",
    advanced:
      "N/A",
    image: "/99/images/99-27.png",
    audioSrc: "/99/audio/27.m4a",
    page: "/99/27",
  },
  "28": {
    id: "28",
    name: "Al-Hakam",
    meaning: "The Judge",
    advanced:
      "N/A",
    image: "/99/images/99-28.png",
    audioSrc: "/99/audio/28.m4a",
    page: "/99/28",
  },
  "29": {
    id: "29",
    name: "Al-'Adl",
    meaning: "The Just",
    advanced:
      "N/A",
    image: "/99/images/99-29.png",
    audioSrc: "/99/audio/29.m4a",
    page: "/99/29",
  },
  "30": {
    id: "30",
    name: "Al-Latif",
    meaning: "The Subtle One",
    advanced:
      "N/A",
    image: "/99/images/99-30.png",
    audioSrc: "/99/audio/30.m4a",
    page: "/99/30",
  },
  "31": {
    id: "31",
    name: "Al-Khabir",
    meaning: "The All-Aware",
    advanced:
      "N/A",
    image: "/99/images/99-31.png",
    audioSrc: "/99/audio/31.m4a",
    page: "/99/31",
  },
  "32": {
    id: "32",
    name: "Al-Halim",
    meaning: "The Forbearing",
    advanced:
      "N/A",
    image: "/99/images/99-32.png",
    audioSrc: "/99/audio/32.m4a",
    page: "/99/32",
  },
  "33": {
    id: "33",
    name: "Al-Azim",
    meaning: "The Magnificent",
    advanced:
      "N/A",
    image: "/99/images/99-33.png",
    audioSrc: "/99/audio/33.m4a",
    page: "/99/33",
  },
  "34": {
    id: "34",
    name: "Al-Ghafur",
    meaning: "The Forgiver and Hider of Faults",
    advanced:
      "N/A",
    image: "/99/images/99-34.png",
    audioSrc: "/99/audio/34.m4a",
    page: "/99/34",
  },
  "35": {
    id: "35",
    name: "Ash-Shakur",
    meaning: "The Rewarder of Thankfulness",
    advanced:
      "N/A",
    image: "/99/images/99-35.png",
    audioSrc: "/99/audio/35.m4a",
    page: "/99/35",
  },
  "36": {
    id: "36",
    name: "Al-Ali",
    meaning: "The Highest",
    advanced:
      "N/A",
    image: "/99/images/99-36.png",
    audioSrc: "/99/audio/36.m4a",
    page: "/99/36",
  },
  "37": {
    id: "37",
    name: "Al-Kabir",
    meaning: "The Greatest",
    advanced:
      "N/A",
    image: "/99/images/99-37.png",
    audioSrc: "/99/audio/37.m4a",
    page: "/99/37",
  },
  "38": {
    id: "38",
    name: "Al-Hafiz",
    meaning: "The Preserver",
    advanced:
      "N/A",
    image: "/99/images/99-38.png",
    audioSrc: "/99/audio/38.m4a",
    page: "/99/38",
  },
  "39": {
    id: "39",
    name: "Al-Muqit",
    meaning: "The Nourisher",
    advanced:
      "N/A",
    image: "/99/images/99-39.png",
    audioSrc: "/99/audio/39.m4a",
    page: "/99/39",
  },
  "40": {
    id: "40",
    name: "Al-Hasib",
    meaning: "The Accounter",
    advanced:
      "N/A",
    image: "/99/images/99-40.png",
    audioSrc: "/99/audio/40.m4a",
    page: "/99/40",
  },
  "41": {
    id: "41",
    name: "Al-Jalil",
    meaning: "The Mighty",
    advanced:
      "N/A",
    image: "/99/images/99-41.png",
    audioSrc: "/99/audio/41.m4a",
    page: "/99/41",
  },
  "42": {
    id: "42",
    name: "Al-Karim",
    meaning: "The Generous",
    advanced:
      "N/A",
    image: "/99/images/99-42.png",
    audioSrc: "/99/audio/42.m4a",
    page: "/99/42",
  },
  "43": {
    id: "43",
    name: "Ar-Raqib",
    meaning: "The Watchful One",
    advanced:
      "N/A",
    image: "/99/images/99-43.png",
    audioSrc: "/99/audio/43.m4a",
    page: "/99/43",
  },
  "44": {
    id: "44",
    name: "Al-Mujib",
    meaning: "The Responder to Prayer",
    advanced:
      "N/A",
    image: "/99/images/99-44.png",
    audioSrc: "/99/audio/44.m4a",
    page: "/99/44",
  },
  "45": {
    id: "45",
    name: "Al-Wasi",
    meaning: "The All-Comprehending",
    advanced:
      "N/A",
    image: "/99/images/99-45.png",
    audioSrc: "/99/audio/45.m4a",
    page: "/99/45",
  },
  "46": {
    id: "46",
    name: "Al-Hakim",
    meaning: "The Perfectly Wise",
    advanced:
      "N/A",
    image: "/99/images/99-46.png",
    audioSrc: "/99/audio/46.m4a",
    page: "/99/46",
  },
  "47": {
    id: "47",
    name: "Al-Wadud",
    meaning: "The Loving One",
    advanced:
      "N/A",
    image: "/99/images/99-47.png",
    audioSrc: "/99/audio/47.m4a",
    page: "/99/47",
  },
  "48": {
    id: "48",
    name: "Al-Majid",
    meaning: "The Majestic One",
    advanced:
      "N/A",
    image: "/99/images/99-48.png",
    audioSrc: "/99/audio/48.m4a",
    page: "/99/48",
  },
  "49": {
    id: "49",
    name: "Al-Ba'ith",
    meaning: "The Resurrector",
    advanced:
      "N/A",
    image: "/99/images/99-49.png",
    audioSrc: "/99/audio/49.m4a",
    page: "/99/49",
  },
  "50": {
    id: "50",
    name: "Ash-Shahid",
    meaning: "The Witness",
    advanced:
      "N/A",
    image: "/99/images/99-50.png",
    audioSrc: "/99/audio/50.m4a",
    page: "/99/50",
  },
  "51": {
    id: "51",
    name: "Al-Haqq",
    meaning: "The Truth",
    advanced:
      "N/A",
    image: "/99/images/99-51.png",
    audioSrc: "/99/audio/51.m4a",
    page: "/99/51",
  },
  "52": {
    id: "52",
    name: "Al-Wakil",
    meaning: "The Trustee",
    advanced:
      "N/A",
    image: "/99/images/99-52.png",
    audioSrc: "/99/audio/52.m4a",
    page: "/99/52",
  },
  "53": {
    id: "53",
    name: "Al-Qawiyy",
    meaning: "The All Strong",
    advanced:
      "N/A",
    image: "/99/images/99-53.png",
    audioSrc: "/99/audio/53.m4a",
    page: "/99/53",
  },
  "54": {
    id: "54",
    name: "Al-Matin",
    meaning: "The Forceful One",
    advanced:
      "N/A",
    image: "/99/images/99-54.png",
    audioSrc: "/99/audio/54.m4a",
    page: "/99/54",
  },
  "55": {
    id: "55",
    name: "Al-Wali",
    meaning: "The Governor",
    advanced:
      "N/A",
    image: "/99/images/99-55.png",
    audioSrc: "/99/audio/55.m4a",
    page: "/99/55",
  },
  "56": {
    id: "56",
    name: "Al-Hamid",
    meaning: "The Praised One",
    advanced:
      "N/A",
    image: "/99/images/99-56.png",
    audioSrc: "/99/audio/56.m4a",
    page: "/99/56",
  },
  "57": {
    id: "57",
    name: "Al-Muhsi",
    meaning: "The Appraiser",
    advanced:
      "N/A",
    image: "/99/images/99-57.png",
    audioSrc: "/99/audio/57.m4a",
    page: "/99/57",
  },
  "58": {
    id: "58",
    name: "Al-Mubdi",
    meaning: "The Originator",
    advanced:
      "N/A",
    image: "/99/images/99-58.png",
    audioSrc: "/99/audio/58.m4a",
    page: "/99/58",
  },
  "59": {
    id: "59",
    name: "Al-Mu'id",
    meaning: "The Restorer",
    advanced:
      "N/A",
    image: "/99/images/99-59.png",
    audioSrc: "/99/audio/59.m4a",
    page: "/99/59",
  },
  "60": {
    id: "60",
    name: "Al-Muhyi",
    meaning: "The Giver of Life",
    advanced:
      "N/A",
    image: "/99/images/99-60.png",
    audioSrc: "/99/audio/60.m4a",
    page: "/99/60",
  },
  "61": {
    id: "61",
    name: "Al-Mumit",
    meaning: "The Taker of Life",
    advanced:
      "N/A",
    image: "/99/images/99-61.png",
    audioSrc: "/99/audio/61.m4a",
    page: "/99/61",
  },
  "62": {
    id: "62",
    name: "Al-Hayy",
    meaning: "The Ever Living One",
    advanced:
      "N/A",
    image: "/99/images/99-62.png",
    audioSrc: "/99/audio/62.m4a",
    page: "/99/62",
  },
  "63": {
    id: "63",
    name: "Al-Qayyum",
    meaning: "The Self-Existing One",
    advanced:
      "N/A",
    image: "/99/images/99-63.png",
    audioSrc: "/99/audio/63.m4a",
    page: "/99/63",
  },
  "64": {
    id: "64",
    name: "Al-Wajid",
    meaning: "The Finder",
    advanced:
      "N/A",
    image: "/99/images/99-64.png",
    audioSrc: "/99/audio/64.m4a",
    page: "/99/64",
  },
  "65": {
    id: "65",
    name: "Al-Majid",
    meaning: "The Glorious",
    advanced:
      "N/A",
    image: "/99/images/99-65.png",
    audioSrc: "/99/audio/65.m4a",
    page: "/99/65",
  },
  "66": {
    id: "66",
    name: "Al-Wahid",
    meaning: "The Only One",
    advanced:
      "N/A",
    image: "/99/images/99-66.png",
    audioSrc: "/99/audio/66.m4a",
    page: "/99/66",
  },
  "67": {
    id: "67",
    name: "Al-Ahad",
    meaning: "The One",
    advanced:
      "N/A",
    image: "/99/images/99-67.png",
    audioSrc: "/99/audio/67.m4a",
    page: "/99/67",
  },
  "68": {
    id: "68",
    name: "As-Samad",
    meaning: "The Satisfier of All Needs",
    advanced:
      "N/A",
    image: "/99/images/99-68.png",
    audioSrc: "/99/audio/68.m4a",
    page: "/99/68",
  },
  "69": {
    id: "69",
    name: "Al-Qadir",
    meaning: "The All-Powerful",
    advanced:
      "N/A",
    image: "/99/images/99-69.png",
    audioSrc: "/99/audio/69.m4a",
    page: "/99/69",
  },
  "70": {
    id: "70",
    name: "Al-Muqtadir",
    meaning: "The Creator of All Power",
    advanced:
      "N/A",
    image: "/99/images/99-70.png",
    audioSrc: "/99/audio/70.m4a",
    page: "/99/70",
  },
  "71": {
    id: "71",
    name: "Al-Muqaddim",
    meaning: "The Expediter",
    advanced:
      "N/A",
    image: "/99/images/99-71.png",
    audioSrc: "/99/audio/71.m4a",
    page: "/99/71",
  },
  "72": {
    id: "72",
    name: "Al-Mu'akhkhir",
    meaning: "The Delayer",
    advanced:
      "N/A",
    image: "/99/images/99-72.png",
    audioSrc: "/99/audio/72.m4a",
    page: "/99/72",
  },
  "73": {
    id: "73",
    name: "Al-Awwal",
    meaning: "The First",
    advanced:
      "N/A",
    image: "/99/images/99-73.png",
    audioSrc: "/99/audio/73.m4a",
    page: "/99/73",
  },
  "74": {
    id: "74",
    name: "Al-Akhir",
    meaning: "The Last",
    advanced:
      "N/A",
    image: "/99/images/99-74.png",
    audioSrc: "/99/audio/74.m4a",
    page: "/99/74",
  },
  "75": {
    id: "75",
    name: "Az-Zahir",
    meaning: "The Manifest One",
    advanced:
      "N/A",
    image: "/99/images/99-75.png",
    audioSrc: "/99/audio/75.m4a",
    page: "/99/75",
  },
  "76": {
    id: "76",
    name: "Al-Batin",
    meaning: "The Hidden One",
    advanced:
      "N/A",
    image: "/99/images/99-76.png",
    audioSrc: "/99/audio/76.m4a",
    page: "/99/76",
  },
  "77": {
    id: "77",
    name: "Al-Wali",
    meaning: "The Protecting Friend",
    advanced:
      "N/A",
    image: "/99/images/99-77.png",
    audioSrc: "/99/audio/77.m4a",
    page: "/99/77",
  },
  "78": {
    id: "78",
    name: "Al-Muta'ali",
    meaning: "The Supreme One",
    advanced:
      "N/A",
    image: "/99/images/99-78.png",
    audioSrc: "/99/audio/78.m4a",
    page: "/99/78",
  },
  "79": {
    id: "79",
    name: "Al-Barr",
    meaning: "The Good",
    advanced:
      "N/A",
    image: "/99/images/99-79.png",
    audioSrc: "/99/audio/79.m4a",
    page: "/99/79",
  },
  "80": {
    id: "80",
    name: "At-Tawwab",
    meaning: "The Guide to Repentance",
    advanced:
      "N/A",
    image: "/99/images/99-80.png",
    audioSrc: "/99/audio/80.m4a",
    page: "/99/80",
  },
  "81": {
    id: "81",
    name: "Al-Muntaqim",
    meaning: "The Avenger",
    advanced:
      "N/A",
    image: "/99/images/99-81.png",
    audioSrc: "/99/audio/81.m4a",
    page: "/99/81",
  },
  "82": {
    id: "82",
    name: "Al-'Afuww",
    meaning: "The Forgiver",
    advanced:
      "N/A",
    image: "/99/images/99-82.png",
    audioSrc: "/99/audio/82.m4a",
    page: "/99/82",
  },
  "83": {
    id: "83",
    name: "Ar-Ra'uf",
    meaning: "The Clement",
    advanced:
      "Allah shows the softest and most tender mercy. He pities us in our weakness, eases our burdens gently, and never overwhelms us beyond what we can bear. His kindness is filled with care and compassion.",
    image: "/99/images/99-83.png",
    audioSrc: "/99/audio/83.m4a",
    page: "/99/83",
  },
  "84": {
    id: "84",
    name: "Malik-ul-Mul",
    meaning: "The Owner of All",
    advanced:
      "N/A",
    image: "/99/images/99-84.png",
    audioSrc: "/99/audio/84.m4a",
    page: "/99/84",
  },
  "85": {
    id: "85",
    name: "Dhu-al-Jalal wa al-Ikram",
    meaning: "The Lord of Majesty and Bounty",
    advanced:
      "N/A",
    image: "/99/images/99-85.png",
    audioSrc: "/99/audio/85.m4a",
    page: "/99/85",
  },
  "86": {
    id: "86",
    name: "Al-Muqsit",
    meaning: "The Equitable One",
    advanced:
      "N/A",
    image: "/99/images/99-86.png",
    audioSrc: "/99/audio/86.m4a",
    page: "/99/86",
  },
  "87": {
    id: "87",
    name: "Al-Jami'",
    meaning: "The Gatherer",
    advanced:
      "N/A",
    image: "/99/images/99-87.png",
    audioSrc: "/99/audio/87.m4a",
    page: "/99/87",
  },
  "88": {
    id: "88",
    name: "Al-Ghaniyy",
    meaning: "The Wealthy",
    advanced:
      "Allah is perfectly rich and needs nothing. All wealth belongs to Him, and He gives without limit. While creation depends on Him, He depends on no one — He is the Truly Wealthy.",
    image: "/99/images/99-88.png",
    audioSrc: "/99/audio/88.m4a",
    page: "/99/88",
  },
  "89": {
    id: "89",
    name: "Al-Mughni",
    meaning: "The Enricher",
    advanced:
      "Allah is the one who gives wealth, contentment, and self-sufficiency. He enriches hearts with faith, souls with peace, and people with provision. Al-Mughnī removes need and makes His servants truly independent through Him.",
    image: "/99/images/99-89.png",
    audioSrc: "/99/audio/89.m4a",
    page: "/99/89",
  },
  "90": {
    id: "90",
    name: "Al-Mani’",
    meaning: "The Preventer",
    advanced:
      "Allah prevents harm, blocks what is not good for us, and protects us from things we may not even realize. If He withholds something, it’s out of wisdom — for our benefit, timing, or protection. Al-Māniʿ guards and controls all outcomes.",
    image: "/99/images/99-90.png",
    audioSrc: "/99/audio/90.m4a",
    page: "/99/90",
  },
  "91": {
    id: "91",
    name: "Adh-Dharr",
    meaning: "The Afflicter",
    advanced:
      "Allah is the one who allows harm or hardship when it serves a greater wisdom. Nothing harmful happens except by His permission — as a test, a warning, or a means of growth. Even in hardship, His justice and mercy are at work.",
    image: "/99/images/99-91.png",
    audioSrc: "/99/audio/91.m4a",
    page: "/99/91",
  },
  "92": {
    id: "92",
    name: "An-Nafi’",
    meaning: "The Benefactor",
    advanced:
      "Allah is the one who brings all good and benefit. Every blessing, healing, success, and ease comes only by His will. An-Nāfiʿ grants what helps the body, heart, and soul — in this world and the next.",
    image: "/99/images/99-92.png",
    audioSrc: "/99/audio/92.m4a",
    page: "/99/92",
  },
  "93": {
    id: "93",
    name: "An-Nur",
    meaning: "The Light",
    advanced:
      "Allah is the source of all light — physical and spiritual. He lights up the heavens and the earth, guides hearts out of darkness, and shows the way to truth. Just as light reveals what is hidden, His light brings clarity, faith, and understanding.",
    image: "/99/images/99-93.png",
    audioSrc: "/99/audio/93.m4a",
    page: "/99/93",
  },
  "94": {
    id: "94",
    name: "Al-Hadi",
    meaning: "The Guide",
    advanced:
      "Allah is the one who opens hearts, shows the straight path, and leads His creation to truth. Whether it’s the instincts of animals or the faith of believers, Al-Hādī gently guides all to their purpose with wisdom and mercy.",
    image: "/99/images/99-94.png",
    audioSrc: "/99/audio/94.m4a",
    page: "/99/94",
  },
  "95": {
    id: "95",
    name: "Al-Badee'",
    meaning: "The Originator",
    advanced:
      "Allah creates in ways that have no example or blueprint. He brings things into existence from nothing — the skies, the earth, and every soul — with unmatched beauty and perfection. There is nothing like His creativity.",
    image: "/99/images/99-95.png",
    audioSrc: "/99/audio/95.m4a",
    page: "/99/95",
  },
  "96": {
    id: "96",
    name: "Al-Baqi",
    meaning: "The Everlasting",
    advanced:
      "Everything in creation will perish, but Allah alone remains forever. He has no end, no decline, and no death. While the world changes and fades, Al-Bāqi is constant, eternal, and unchanging.",
    image: "/99/images/99-96.png",
    audioSrc: "/99/audio/96.m4a",
    page: "/99/96",
  },
  "97": {
    id: "97",
    name: "Al-Warith",
    meaning: "The Inheritor of All",
    advanced:
      "When all creation comes to an end, only Allah remains. Everything we own eventually returns to Him. He is the true Owner who outlasts all and inherits all — after kings, nations, and even worlds fade away, He alone endures.",
    image: "/99/images/99-97.png",
    audioSrc: "/99/audio/97.m4a",
    page: "/99/97",
  },
  "98": {
    id: "98",
    name: "Ar-Rashid",
    meaning: "The Guide with Perfect Wisdom",
    advanced:
      "Allah guides all of creation with purpose. He shows the bees how to build hives, the birds where to migrate, and the trees when to bloom. Just as He guides nature with precision, He also gently directs human hearts toward truth and goodness — always with perfect wisdom and care.",
    image: "/99/images/99-98.png",
    audioSrc: "/99/audio/98.m4a",
    page: "/99/98",
  },
  "99": {
    id: "99",
    name: "As-Sabur",
    meaning: "The Patient",
    advanced:
      "Allah is never hasty. He delays punishment for wrongdoers and gives countless chances for repentance. His patience is perfect and limitless.",
    image: "/99/images/99-99.png",
    audioSrc: "/99/audio/99.m4a",
    page: "/99/99",
  },


};