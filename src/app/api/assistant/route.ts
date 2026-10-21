import { NextResponse } from "next/server";
import { getStory, getCreator } from "@/lib/content";
import { GROQ_API_KEY } from "@/lib/groq-config";
export async function POST(request: Request) {
  try {
    const body = await request.json() as { slug?: string; question?: string; history?: { role: "user" | "assistant"; content: string }[] };
    const question = String(body.question ?? "").trim().slice(0, 1500);
    if (!question) return NextResponse.json({ error: "Tulis pertanyaan dulu, ya." }, { status: 400 });
    if (!GROQ_API_KEY) return NextResponse.json({ error: "Asisten belum diaktifkan. Periksa GROQ_API_KEY di src/lib/groq-config.ts." }, { status: 503 });
    const story = body.slug ? getStory(body.slug) : undefined;
    const creator = story ? getCreator(story.creatorSlug) : undefined;
    const context = story ? `Judul: ${story.title}\nKategori: ${story.category}\nKreator: ${creator?.name ?? "Tidak diketahui"}\nRingkasan: ${story.summary}\nSumber: ${story.sourceUrl}` : "Pengunjung sedang berada di halaman asisten umum untuk memahami isu sosial dan lingkungan.";
    const history = Array.isArray(body.history) ? body.history.slice(-8).map(m => ({ role: m.role, content: String(m.content).slice(0, 1200) })) : [];
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST", headers: { Authorization: `Bearer ${GROQ_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model: "llama-3.3-70b-versatile", temperature: 0.55, max_tokens: 700, messages: [
        { role: "system", content: "Nama kamu Asisten Muhammad Nawal. Jawab dengan bahasa Indonesia yang natural, hangat, jelas, dan tidak kaku. Jadilah teman diskusi yang membantu memahami konteks, bukan berpura-pura sebagai manusia. Jawaban harus berlandaskan konteks yang diberikan. Jangan mengarang fakta, angka, atau kutipan. Jika informasi tidak tersedia, katakan dengan jujur dan sarankan memeriksa sumber asli. Bedakan dugaan, opini, dan fakta. Jangan mengklaim sudah menonton video; kamu hanya menerima ringkasan dan metadata berikut. Konteks halaman: " + context },
        ...history,
        { role: "user", content: question }
      ] })
    });
    const data = await response.json();
    if (!response.ok) return NextResponse.json({ error: "Layanan AI lagi bermasalah. Coba beberapa saat lagi." }, { status: 502 });
    return NextResponse.json({ answer: data.choices?.[0]?.message?.content ?? "Maaf, aku belum bisa menyusun jawaban. Coba tanyakan dengan cara lain." });
  } catch {
    return NextResponse.json({ error: "Pesan belum bisa diproses. Coba lagi, ya." }, { status: 500 });
  }
}
