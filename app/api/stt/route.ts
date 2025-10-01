// app/api/stt/route.ts
import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

export const runtime = "nodejs"; // needed for Buffer/File handling on Vercel/Node

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get("audio");
    if (!file || !(file instanceof Blob)) {
      return NextResponse.json({ error: "Missing audio" }, { status: 400 });
    }

    // Convert Blob to Buffer and into a File for the SDK
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const filename =
      (file as any).name ||
      `speech.${file.type?.includes("mp4") || file.type?.includes("aac") ? "m4a" : "webm"}`;

    // Use whichever model your account has access to:
    // - "gpt-4o-transcribe" (new)
    // - "whisper-1" (classic)
    const transcription = await openai.audio.transcriptions.create({
      file: new File([buffer], filename, { type: file.type || "application/octet-stream" }),
      model: "gpt-4o-transcribe",
      // language: "en", // or "ar" if you want to bias Arabic
      // temperature: 0,
    });

    return NextResponse.json({ text: transcription.text || "" });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Transcription failed" },
      { status: 500 }
    );
  }
}
