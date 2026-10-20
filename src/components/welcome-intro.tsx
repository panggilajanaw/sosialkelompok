"use client";
import { useEffect, useState } from "react";
const team = ["Muhammad Nawal F. R.", "Fajar Nur Aiman", "Muhammad Hadi Mahardika", "Ibrahim Arka A. M."];
export function WelcomeIntro() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    try {
      if (!sessionStorage.getItem("sosialkelompok-intro-seen")) setVisible(true);
    } catch { /* Intro tetap opsional jika storage dibatasi browser. */ }
  }, []);
  const close = () => {
    try { sessionStorage.setItem("sosialkelompok-intro-seen", "1"); } catch { /* Abaikan jika storage dibatasi. */ }
    setVisible(false);
  };
  if (!visible) return null;
  return <div className="welcome-overlay" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
    <div className="welcome-panel">
      <p className="eyebrow text-[#d7f59b]">Proyek kelompok · Edukasi sosial</p>
      <h2 id="welcome-title" className="welcome-title">Welcome to<br /><span>sosialkelompok.</span></h2>
      <p className="mt-4 max-w-lg text-sm leading-6 text-white/75 sm:text-base">Ruang untuk memahami isu sosial dan lingkungan lewat cerita, sudut pandang, dan aksi nyata.</p>
      <div className="mt-7 border-t border-white/15 pt-5">
        <p className="eyebrow text-white/55">Dibuat oleh</p>
        <ul className="mt-3 grid gap-2 text-sm font-semibold text-white/90 sm:grid-cols-2">{team.map((name, i) => <li key={name} className="intro-name"><span className="mr-2 text-[#d7f59b]">0{i + 1}</span>{name}{i === 0 ? <span className="ml-2 text-xs text-white/50">· Dev / Ketua</span> : null}</li>)}</ul>
      </div>
      <button onClick={close} className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#d7f59b] px-6 text-sm font-extrabold text-[#20291f] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Masuk ke website <span className="ml-2" aria-hidden="true">↗</span></button>
      <button onClick={close} className="ml-3 min-h-12 px-3 text-xs font-semibold text-white/60 transition hover:text-white">Lewati</button>
    </div>
  </div>;
}
