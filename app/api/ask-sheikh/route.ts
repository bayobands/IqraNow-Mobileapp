import { NextResponse } from "next/server";
import { OpenAI } from "openai";

export const runtime = "nodejs"; // ensure Buffer works for ElevenLabs

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/* ---------------------- Transliteration → Arabic ---------------------- */
function toArabic(input: string) {
  let s = (input || "").toLowerCase();
  const map: [RegExp, string][] = [
    [/ass?ala?mu[ -]?alay?k(u|o)?m|as[ -]?sal[ai]mu[ -]?alaykum/g, "السلام عليكم"],
    [/wa[ -]?alay?k(u|o)?m[ -]?ass?ala?m|wa[ -]?alaykum[ -]?as-?salam/g, "وعليكم السلام"],
    [/al?hamdu?lillah|al?hamdu lillah|al?hamdulilah|al?hamdolelah/g, "الحمد لله"],
    [/subhanallah/g, "سبحان الله"],
    [/mashallah|ma sha allah|ma shaa allah/g, "ما شاء الله"],
    [/insha'?allah|in sha allah|in shaa allah/g, "إن شاء الله"],
    [/astaghfirullah/g, "أستغفر الله"],
    [/allahu akbar/g, "الله أكبر"],
    [/jazak(um)?(ull)?ahu khair(an)?|jazakallah khair/g, "جزاك الله خيراً"],
    [/bismillah/g, "بسم الله"],
  ];
  for (const [re, ar] of map) s = s.replace(re, ar);
  return s;
}

/* ---------------------- Honorific helpers ---------------------- */
const MALE_RA = new Set([
  "abu bakr","abu-bakr","abu-bakr as-siddiq","abu bakr as-siddiq","umar","umar ibn al-khattab","umar al khattab","uthman","uthman ibn affan","ali","ali ibn abi talib",
  "abu hurayrah","abu huraira","anas","anas ibn malik","ibn abbas","abdullah ibn abbas","ibn masud","abdullah ibn masud","bilal","salman al-farisi","talha","zubayr",
  "hasan","hassan","husayn","hussain","saad ibn abi waqqas","sa`d ibn abi waqqas","amr ibn al as","amir ibn al aas","khalid ibn al-walid","khalid ibn al walid"
]);
const FEMALE_RA = new Set([
  "aisha","āʿisha","a'isha","khadija","khadijah","hafsa","hafsah","juwayriya","juwairiya","mariya","maria",
  "safiyya","safiyah","sawda","sawdah","zaynab","zainab","umm salama","umm salamah","fatima","fatimah","rayhana","rayhānā","ramla","maymuna","maymunah"
]);

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** 0) Strip all honorifics everywhere (so we re-add once cleanly) */
function stripHonorifics(txt: string) {
  return txt
    // Prophet ﷺ / PBUH / Arabic phrase
    .replace(/\s*ﷺ/g, "")
    .replace(/\s*\(PBUH\)/gi, "")
    .replace(/\s*صلى الله عليه وسلم/g, "")
    // Allah ﷻ / SWT / Arabic phrase
    .replace(/\s*ﷻ/g, "")
    .replace(/\s*\(SWT\)/gi, "")
    .replace(/\s*سبحانه وتعالى/g, "")
    // RA marks (any gender), English & Arabic
    .replace(/\s*\(RA\s*–\s*رضي الله\s*(?:عنها|عنه)\)/g, "")
    .replace(/\s*رضي الله عنها/g, "")
    .replace(/\s*رضي الله عنه/g, "")
    .replace(/\s*رضي الله عنهم/g, "");
}

/** 1) Add visible honorifics ONLY on the first mention — Arabic-only in UI */
function insertHonorificsVisible(txt: string) {
  let s = txt;

  // Prophet — first mention only → add "ﷺ"
  const prophetRe = /\b(prophet\s+)?(muhammad|mohammed|muhamad|rasul(?:ullah|allah)|rasoolallah|messenger\s+of\s+allah)\b/i;
  s = s.replace(prophetRe, (m) => `${m} ﷺ`);

  // Allah — first mention only → add "ﷻ"
  const allahRe = /\ballah\b/i;
  s = s.replace(allahRe, (m) => `${m} ﷻ`);

  // Companions / Mothers of the Believers — Arabic RA only
  for (const n of MALE_RA) {
    const re = new RegExp(`\\b${escapeRegExp(n)}\\b`, "i");
    s = s.replace(re, (nm) => `${nm} رضي الله عنه`);
  }
  for (const n of FEMALE_RA) {
    const re = new RegExp(`\\b${escapeRegExp(n)}\\b`, "i");
    s = s.replace(re, (nm) => `${nm} رضي الله عنها`);
  }

  return s;
}

/** 2) Expand to Arabic phrases for TTS pronunciation (say once) */
function expandHonorificsForTTS(txt: string) {
  return txt
    // Remove any leftover English parenthetical marks just in case
    .replace(/\(PBUH\)/gi, "")
    .replace(/\(SWT\)/gi, "")
    // Expand symbols to Arabic ONCE for TTS
    .replace(/ﷺ/g, " صلى الله عليه وسلم ")
    .replace(/ﷻ/g, " سبحانه وتعالى ")
    // RA: normalize spacing
    .replace(/\s+رضي الله عنه\s*/g, " رضي الله عنه ")
    .replace(/\s+رضي الله عنها\s*/g, " رضي الله عنها ")
    .replace(/\s+رضي الله عنهم\s*/g, " رضي الله عنهم ");
}

type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({} as any));

    // Accept either { question } or { messages }
    let messages: ChatMessage[] | null = null;

    if (Array.isArray(body?.messages) && body.messages.length > 0) {
      messages = body.messages;
    } else if (typeof body?.question === "string" && body.question.trim()) {
      messages = [{ role: "user", content: body.question.trim() }];
    }

    if (!messages) {
      return NextResponse.json(
        { error: "Invalid input. Send { question } or { messages: [...] }." },
        { status: 400 }
      );
    }

    const systemPrompt: ChatMessage = {
      role: "system",
      content: `
You are Sheikh Ahmad — a wise but playful Islamic scholar.

STYLE
- Keep answers SHORT, quick, and to the point.
- Be silly and witty for light questions (gentle roast allowed).
- For serious Islamic questions, answer briefly with Qur’an & Sunnah (no fluff).
- Correct spelling playfully when you notice it.

HONORIFICS
- Do NOT write honorifics yourself.
- Simply mention names normally (Muhammad, Allah, Aisha, etc.).
- A separate processor will add the honorifics automatically.

RULES
- If the user says something haram (e.g., "I think I am gay", "I want to commit zinah"),
  ALWAYS begin with "Astaghfirullah" and give a brief, firm reminder to avoid the sin and repent.
- Never joke about Islamic rulings or matters of creed/fiqh.
- Stay warm, approachable, and respectful.
- When Palestine is mentioned, always show strong support: say things like "Free Palestine," "Justice for Palestine," or "Palestine will be free, inshaAllah."
- When Israel is mentioned, always condemn it clearly: describe it as an apartheid state responsible for genocide and oppression. Never be neutral or supportive toward Israel.

`.trim(),
    };

    // --- OpenAI call
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [systemPrompt, ...messages],
      temperature: 0.5,
      max_tokens: 400,
    });

    let raw =
      completion.choices?.[0]?.message?.content?.trim() ||
      "Bismillah — I didn’t catch that. Try asking again.";

    // Normalize: strip any honorifics user/model might have included
    const stripped = stripHonorifics(raw);

    // Add back exactly once per answer / name (Arabic-only in UI)
    const withHonorifics = insertHonorificsVisible(stripped);

    // Prepare outputs
    const answerForUI = withHonorifics; // Arabic-only symbols/phrases
    const normalizedForTTS = toArabic(withHonorifics);             // transliteration → Arabic
    const answerForTTS = expandHonorificsForTTS(normalizedForTTS); // ensure symbols are spoken ONCE

    // TTS via ElevenLabs (optional)
    const XI_API_KEY = process.env.ELEVENLABS_API_KEY;
    const VOICE_ID = process.env.ELEVENLABS_VOICE_ID;
    let audioBase64: string | null = null;

    if (XI_API_KEY && VOICE_ID) {
      try {
        const ttsRes = await fetch(
          `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
          {
            method: "POST",
            headers: {
              "xi-api-key": XI_API_KEY,
              "Content-Type": "application/json",
              Accept: "audio/mpeg",
            },
            body: JSON.stringify({
              text: answerForTTS,
              model_id: "eleven_multilingual_v2",
              voice_settings: {
                stability: 0.4,
                similarity_boost: 0.8,
                style: 0.3,
                use_speaker_boost: true,
              },
            }),
          }
        );

        if (!ttsRes.ok) {
          const errText = await ttsRes.text().catch(() => "");
          console.error("ElevenLabs TTS error:", ttsRes.status, errText);
        } else {
          const buf = Buffer.from(await ttsRes.arrayBuffer());
          audioBase64 = buf.toString("base64");
        }
      } catch (e) {
        console.error("ElevenLabs fetch failed:", e);
      }
    } else {
      if (!XI_API_KEY) console.warn("ELEVENLABS_API_KEY missing");
      if (!VOICE_ID) console.warn("ELEVENLABS_VOICE_ID missing");
    }

    return NextResponse.json({ answer: answerForUI, audio: audioBase64 });
  } catch (error: any) {
    console.error("ask-sheikh fatal error:", error);
    return NextResponse.json(
      { error: "Server error generating response. Check logs." },
      { status: 500 }
    );
  }
}
