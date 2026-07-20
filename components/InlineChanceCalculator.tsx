"use client";

import { useState } from "react";
import { calculateChance } from "@/lib/chance";
import type { University } from "@/types/calculator";

export function InlineChanceCalculator({ university }: { university: University }) {
  const [gpa, setGpa] = useState(university.avgGpa.toFixed(2));
  const [sat, setSat] = useState(String(university.avgSat));
  const [result, setResult] = useState<{ chance: number; tier: string } | null>(null);
  const valid = Number(gpa) >= 0 && Number(gpa) <= 4 && Number(sat) >= 400 && Number(sat) <= 1600;

  function run() {
    if (!valid) return;
    const score = calculateChance(Number(gpa), university.testBlind ? university.avgSat : Number(sat), university);
    setResult(score);
  }

  async function share() {
    if (!result) return;
    const text = `My estimated chance at ${university.name}: ${result.chance}% (${result.tier}). Try yours on Admitly.`;
    if (navigator.share) await navigator.share({ title: `${university.name} chance`, text, url: window.location.href }).catch(() => undefined);
    else await navigator.clipboard.writeText(`${text} ${window.location.href}`);
  }

  return <section id="calculator" className="rounded-[2rem] border border-lime-300/20 bg-[radial-gradient(circle_at_85%_10%,rgba(190,242,100,.15),transparent_35%),#111217] p-6 sm:p-8">
    <p className="text-[10px] font-black uppercase tracking-[.2em] text-lime-300">Preloaded chance calculator</p>
    <h2 className="mt-3 text-3xl font-black tracking-[-.04em]">Estimate your chances at {university.name}</h2>
    <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">Enter your academic profile for a quick planning estimate. This is not an admissions decision.</p>
    {university.testBlind && <p className="mt-4 rounded-xl border border-amber-300/20 bg-amber-300/[.07] p-3 text-xs leading-5 text-amber-200">UC campuses are test-free for admission. SAT is shown only as a planning reference and does not affect this estimate.</p>}
    <div className="mt-7 grid gap-3 sm:grid-cols-2"><label className="rounded-2xl border border-white/10 bg-black/20 p-4"><span className="text-[10px] font-black uppercase tracking-wider text-zinc-500">Your GPA</span><input value={gpa} onChange={e=>setGpa(e.target.value)} type="number" min="0" max="4" step=".01" className="mt-2 w-full bg-transparent text-3xl font-black outline-none" aria-label="Your GPA" /></label><label className={`rounded-2xl border border-white/10 bg-black/20 p-4 ${university.testBlind?"opacity-45":""}`}><span className="text-[10px] font-black uppercase tracking-wider text-zinc-500">Your SAT</span><input value={sat} onChange={e=>setSat(e.target.value)} disabled={university.testBlind} type="number" min="400" max="1600" step="10" className="mt-2 w-full bg-transparent text-3xl font-black outline-none" aria-label="Your SAT score" /></label></div>
    <button onClick={run} disabled={!valid} className="mt-4 w-full rounded-full bg-lime-300 px-6 py-4 text-sm font-black text-zinc-950 disabled:opacity-40">Calculate my {university.name} chances →</button>
    {result && <div className="animate-enter mt-5 rounded-2xl border border-white/10 bg-black/25 p-5 sm:flex sm:items-center"><div><p className="text-6xl font-black tracking-[-.07em] text-lime-300">{result.chance}%</p><p className="mt-1 text-xs font-black uppercase tracking-wider text-white">{result.tier} school for this profile</p></div><button onClick={share} className="mt-4 rounded-full border border-white/15 px-5 py-3 text-xs font-black sm:ml-auto sm:mt-0">Share result ↗</button></div>}
  </section>;
}
