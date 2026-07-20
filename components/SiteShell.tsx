import type { ReactNode } from "react";

const links = [
  ["Colleges", "/colleges"], ["Compare", "/compare"], ["Guides", "/guides"], ["Tools", "/tools"],
];

export function SiteHeader() {
  return <header className="sticky top-0 z-50 border-b border-white/8 bg-[#08090d]/85 backdrop-blur-xl">
    <div className="mx-auto flex h-16 max-w-7xl items-center gap-7 px-5 sm:px-8">
      <a href="/" className="text-xl font-black tracking-[-.07em] text-white">admit<span className="text-lime-300">ly</span>.</a>
      <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">{links.map(([label, href]) => <a key={href} href={href} className="text-sm font-bold text-zinc-400 transition hover:text-white">{label}</a>)}</nav>
      <a href="/calculator" className="ml-auto rounded-full bg-lime-300 px-4 py-2 text-xs font-black text-zinc-950 transition hover:bg-lime-200">Check my chances</a>
    </div>
  </header>;
}

export function SiteFooter() {
  return <footer className="border-t border-white/8 py-10"><div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-zinc-500 sm:px-8 md:flex-row md:items-center"><a href="/" className="text-lg font-black text-white">admit<span className="text-lime-300">ly</span>.</a><p>College planning without the panic.</p><p className="md:ml-auto">Estimates are for exploration, not admissions decisions.</p></div></footer>;
}

export function SiteShell({ children }: { children: ReactNode }) { return <div className="min-h-dvh bg-[#08090d] text-white"><SiteHeader />{children}<SiteFooter /></div>; }

export function PageIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[.22em] text-lime-300">{eyebrow}</p><h1 className="mt-4 text-4xl font-black leading-[.95] tracking-[-.055em] sm:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">{copy}</p></div>;
}
