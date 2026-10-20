import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { creators, getCreator, getCreatorStories } from "@/lib/content";
import { StoryCard } from "@/components/story-card";
import { FallbackImage } from "@/components/fallback-image";
import { SocialLinks } from "@/components/social-links";
export function generateStaticParams() { return creators.map((creator) => ({ slug: creator.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; return { title: getCreator(slug)?.name ?? "Kreator tidak ditemukan" }; }
export default async function CreatorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const creator = getCreator(slug); if (!creator) notFound(); const items = getCreatorStories(slug);
  return <section className="site-wrap py-8 md:py-14"><Link href="/creators" className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-[var(--muted)]"><ArrowLeft size={15}/> Semua kreator</Link>
    <div className="soft-card overflow-hidden"><div className="creator-banner relative flex min-h-[300px] items-end overflow-hidden bg-[#dce4d1] p-6 sm:p-8 md:min-h-[390px] md:p-10"><FallbackImage src={creator.banner} alt={`Profil ${creator.name}`} className="absolute inset-0 h-full w-full object-cover" fallbackClassName="absolute inset-0"/><div className="absolute inset-0 bg-gradient-to-t from-[#17281d]/95 via-[#203628]/35 to-transparent"/><div className="relative z-10 w-full text-white"><p className="eyebrow">Profil kreator</p><h1 className="mt-3 max-w-4xl break-words text-4xl font-black tracking-[-.07em] sm:text-5xl md:text-7xl">{creator.name}</h1><p className="mt-3 text-sm font-semibold text-white/80">{creator.handle}</p><SocialLinks creator={creator}/></div></div>
      <div className="grid gap-5 p-5 sm:p-7 md:grid-cols-[1fr_auto] md:p-9"><p className="max-w-3xl text-sm leading-7 text-[var(--muted)] sm:text-base">{creator.bio}</p>{items[0] && <a href={items[0].sourceUrl} target="_blank" rel="noreferrer" className="inline-flex h-fit items-center gap-2 rounded-full bg-[#222720] px-4 py-3 text-xs font-bold text-white">Lihat konten sumber <ArrowUpRight size={14}/></a>}</div>
    </div><div className="mb-7 mt-12 md:mt-14"><p className="eyebrow text-[#71834e]">Arsip kreator</p><h2 className="mt-3 text-3xl font-black tracking-[-.05em] md:text-4xl">Cerita dari {creator.name}.</h2></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{items.map((story, index) => <StoryCard key={story.slug} story={story} index={index}/>)}</div>
  </section>;
}
