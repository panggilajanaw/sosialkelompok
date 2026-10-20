import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import type { Creator, SocialLink } from "@/lib/content";

const iconFor = (platform: SocialLink["platform"]) => {
  if (platform === "Instagram") return faInstagram;
  if (platform === "TikTok") return faTiktok;
  return faYoutube;
};
export function SocialLinks({ creator, compact = false }: { creator: Creator; compact?: boolean }) {
  return <div className={`flex flex-wrap items-center gap-2 ${compact ? "" : "mt-5"}`} aria-label={`Media sosial ${creator.name}`}>
    {creator.socials.map((social) => <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`${creator.name} di ${social.platform} (${social.handle})`} title={`${social.platform} ${social.handle}`} className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-black/25 text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white hover:text-[#20231f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${compact ? "h-10 w-10" : "px-4 py-2.5 text-xs font-bold"}`}>
      <FontAwesomeIcon icon={iconFor(social.platform)} className="h-4 w-4" />
      {!compact && <span>{social.platform}</span>}
    </a>)}
  </div>;
}
