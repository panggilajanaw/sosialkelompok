import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Leaf, Sprout, Users, Compass, BookOpen, MoveUpRight } from "lucide-react";
import { stories, creators } from "@/lib/content";
import { StoryCard } from "@/components/story-card";
import { CreatorCard } from "@/components/creator-card";

const team = [
  { name: "Muhammad Nawal F. R.", role: "Developer / Ketua", initials: "MN" },
  { name: "Fajar Nur Aiman", role: "Anggota kelompok", initials: "FA" },
  { name: "Muhammad Hadi Mahardika", role: "Anggota kelompok", initials: "HM" },
  { name: "Ibrahim Arka A. M.", role: "Anggota kelompok", initials: "IA" },
];

export default function HomePage() {
  return <>
    <section className="site-wrap hero-grid relative mt-5 overflow-hidden rounded-[32px] border border-[var(--line)] px-5 py-10 sm:px-8 sm:py-14 md:mt-7 md:px-14 md:py-20">
      <div className="pointer-events-none intro-orb absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#b7cba9]/70 sm:right-8 sm:top-5 sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute right-10 top-16 hidden h-48 w-48 rounded-full border border-[#b7cba9]/60 sm:block" />
      <div className="relative z-10 max-w-[760px] reveal">
        <div className="pill mb-7 border border-[var(--line)] bg-white/80"><span className="h-2 w-2 rounded-full bg-[#77964c]"/> Proyek editorial kreatif · 2026</div>
        <p className="eyebrow mb-4 text-[#71834e]">Cerita. Kesadaran. Aksi.</p>
        <h1 className="display max-w-[780px] text-[clamp(3.5rem,10vw,7.7rem)]">Biar isu<br/>nggak cuma <span className="relative inline-block">lewat<span className="absolute -bottom-1 left-0 -z-10 h-[.16em] w-full rounded-full bg-[var(--green)]"/>.</span></h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">Satu ruang untuk mengenal isu sosial dan lingkungan lewat cerita para kreator. Bukan sekadar membaca ringkasan—kami mengajak kamu melihat konteks, menemukan perspektif, dan membuka sumber aslinya.</p>
        <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row"><Link href="/issues" className="button-dark">Jelajahi cerita <ArrowUpRight size={16}/></Link><Link href="/about" className="button-light">Kenalan dengan proyek <ArrowDownRight size={16}/></Link></div>
      </div>
      <div className="relative z-10 mt-12 grid gap-3 sm:grid-cols-3 md:mt-16">
        <div className="rounded-2xl border border-white/70 bg-white/75 p-4 backdrop-blur"><BookOpen size={19}/><p className="mt-4 text-2xl font-black">{String(stories.length).padStart(2,"0")}</p><p className="mt-1 text-xs text-[var(--muted)]">Cerita pilihan</p></div>
        <div className="rounded-2xl border border-white/70 bg-white/75 p-4 backdrop-blur"><Users size={19}/><p className="mt-4 text-2xl font-black">{String(creators.length).padStart(2,"0")}</p><p className="mt-1 text-xs text-[var(--muted)]">Kreator yang dikenalkan</p></div>
        <div className="rounded-2xl border border-white/70 bg-white/75 p-4 backdrop-blur"><Compass size={19}/><p className="mt-4 text-2xl font-black">01</p><p className="mt-1 text-xs text-[var(--muted)]">Langkah awal untuk peduli</p></div>
      </div>
      <div className="pointer-events-none absolute bottom-24 right-10 hidden h-20 w-20 items-center justify-center rounded-[24px] bg-[var(--green)] text-[var(--forest)] shadow-lg md:flex"><Sprout size={34}/></div>
    </section>

    <section className="site-wrap section-space">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="eyebrow text-[#71834e]">Mulai dari sini</p><h2 className="display mt-3 text-4xl sm:text-5xl md:text-6xl">Cerita yang layak<br className="hidden sm:block"/> diberi perhatian.</h2></div><Link href="/issues" className="inline-flex items-center gap-2 text-sm font-bold">Lihat semua cerita <ArrowUpRight size={16}/></Link></div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{stories.slice(0,3).map((story,i)=><StoryCard key={story.slug} story={story} index={i}/>)}</div>
    </section>

    <section className="border-y border-[var(--line)] bg-[#e9ede3]">
      <div className="site-wrap grid gap-8 py-10 md:grid-cols-[.7fr_1.3fr] md:items-center md:py-14"><div><p className="eyebrow text-[#71834e]">Cara kami bercerita</p><h2 className="display mt-3 text-4xl sm:text-5xl">Ringkas untuk mulai. Sumber untuk memahami.</h2></div><div className="grid gap-3 sm:grid-cols-3"><div className="rounded-2xl bg-white/80 p-5"><span className="text-xs font-black text-[#71834e]">01 / KENALI</span><p className="mt-3 font-extrabold">Temukan isu</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Mulai dari ringkasan yang jelas dan mudah dipahami.</p></div><div className="rounded-2xl bg-white/80 p-5"><span className="text-xs font-black text-[#71834e]">02 / PAHAMI</span><p className="mt-3 font-extrabold">Buka detail</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Lihat konteks dan alasan topik tersebut penting.</p></div><div className="rounded-2xl bg-white/80 p-5"><span className="text-xs font-black text-[#71834e]">03 / TELUSURI</span><p className="mt-3 font-extrabold">Cek sumber asli</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Lanjutkan ke konten kreator untuk melihat konteks langsung.</p></div></div></div>
    </section>

    <section className="site-wrap section-space"><div className="mb-8 flex items-end justify-between gap-4"><div><p className="eyebrow text-[#71834e]">Orang di balik cerita</p><h2 className="display mt-3 text-4xl sm:text-5xl md:text-6xl">Kenali kreatornya.</h2></div><Users size={27}/></div><div className="grid gap-5 md:grid-cols-2">{creators.map(c=><CreatorCard key={c.slug} creator={c}/>)}</div></section>

    <section className="site-wrap pb-8"><div className="overflow-hidden rounded-[30px] bg-[var(--forest)] p-6 text-white sm:p-9 md:p-12"><div className="grid gap-8 md:grid-cols-[.9fr_1.1fr] md:items-center"><div><p className="eyebrow text-[var(--green)]">Dibuat bersama</p><h2 className="display mt-3 text-4xl sm:text-5xl">Empat orang,<br/>satu ruang peduli.</h2><p className="mt-4 max-w-md text-sm leading-6 text-white/70">sosialkelompok adalah proyek kelompok untuk menyajikan isu dengan cara yang lebih dekat, rapi, dan mudah ditelusuri.</p><Link href="/about" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--green)] px-5 py-3 text-xs font-black text-[var(--ink)]">Kenali tim kami <MoveUpRight size={15}/></Link></div><div className="grid gap-3 sm:grid-cols-2">{team.map((person)=><div key={person.name} className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[.06] p-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--green)] text-xs font-black text-[var(--ink)]">{person.initials}</span><div className="min-w-0"><p className="text-sm font-extrabold">{person.name}</p><p className="mt-1 text-xs text-white/60">{person.role}</p></div></div>)}</div></div></div></section>
  </>;
}
