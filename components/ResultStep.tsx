"use client";

import { useRef, useState } from "react";
import { useCalculator } from "@/context/CalculatorContext";
import { PrimaryButton } from "./ui";

function mood(chance: number) { return chance < 20 ? { emoji: "💀", label: "A legendary reach", note: "Shoot your shot, but keep the safety schools close." } : chance < 60 ? { emoji: "👀", label: "You’re in the game", note: "Strong potential. Your story and application can move the needle." } : { emoji: "✅", label: "Looking very good", note: "The numbers are on your side. Keep that application sharp." }; }

export function ResultStep() {
  const { state, dispatch } = useCalculator(); const [shared, setShared] = useState(false); const cardRef = useRef<HTMLDivElement>(null);
  const chance = state.chance ?? 0; const university = state.university!; const tone = mood(chance);
  const shareText = `My estimated chance at ${university.name} is ${chance}% ${tone.emoji} — calculated with Admitly.`;

  function downloadCard() {
    const canvas = document.createElement("canvas"); canvas.width = 1080; canvas.height = 1080; const ctx = canvas.getContext("2d"); if (!ctx) return;
    const gradient = ctx.createLinearGradient(0, 0, 1080, 1080); gradient.addColorStop(0, "#11151a"); gradient.addColorStop(.58, "#12120f"); gradient.addColorStop(1, "#3c4a1d"); ctx.fillStyle = gradient; ctx.fillRect(0, 0, 1080, 1080);
    ctx.fillStyle = "#bef264"; ctx.font = "700 30px Arial"; ctx.fillText("ADMITLY / CHANCE CHECK", 76, 90);
    ctx.fillStyle = "#fff"; ctx.font = "900 74px Arial"; ctx.fillText("MY CHANCES AT", 76, 228); ctx.font = "900 70px Arial"; ctx.fillText(university.name.toUpperCase().slice(0, 25), 76, 310);
    ctx.fillStyle = "#bef264"; ctx.font = "900 330px Arial"; ctx.fillText(`${chance}%`, 62, 690);
    ctx.font = "900 76px Arial"; ctx.fillStyle = "#fff"; ctx.fillText(`${tone.label.toUpperCase()} ${tone.emoji}`, 76, 825);
    ctx.fillStyle = "#a1a1aa"; ctx.font = "32px Arial"; ctx.fillText(`GPA ${state.gpa}  •  SAT ${state.sat}  •  For fun, not fate.`, 76, 930);
    ctx.fillStyle = "#fff"; ctx.font = "700 26px Arial"; ctx.fillText("admitly.app", 76, 1008);
    const link = document.createElement("a"); link.download = `admitly-${university.id}.png`; link.href = canvas.toDataURL("image/png"); link.click();
  }
  async function share() { try { if (navigator.share) await navigator.share({ title: "My college chance", text: shareText }); else await navigator.clipboard.writeText(shareText); setShared(true); window.setTimeout(() => setShared(false), 1800); } catch { /* user cancelled */ } }

  return <section className="animate-enter"><div ref={cardRef} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_85%_10%,rgba(190,242,100,.28),transparent_34%),linear-gradient(145deg,#18191e,#0e0f12_65%)] p-6 shadow-2xl sm:p-9"><div className="absolute -bottom-20 -right-16 size-64 rounded-full border-[36px] border-lime-300/10" /><div className="relative"><div className="flex items-center justify-between"><span className="text-[10px] font-black uppercase tracking-[.22em] text-lime-300">Admitly / chance check</span><span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold text-zinc-400">2026</span></div><p className="mt-12 text-xs font-bold uppercase tracking-widest text-zinc-500">Your chances at</p><h1 className="mt-2 max-w-md text-3xl font-black leading-none tracking-[-.05em] text-white sm:text-5xl">{university.name}</h1><div className="my-8 flex items-end gap-3"><span className="text-[6.5rem] font-black leading-[.75] tracking-[-.09em] text-lime-300 sm:text-[9rem]">{chance}%</span><span className="pb-2 text-4xl sm:text-5xl" aria-label={tone.label}>{tone.emoji}</span></div><p className="text-xl font-black tracking-tight text-white">{tone.label}</p><p className="mt-2 max-w-sm text-sm leading-6 text-zinc-400">{tone.note}</p><div className="mt-8 flex gap-2 border-t border-white/10 pt-5 text-[10px] font-bold uppercase tracking-wider text-zinc-500"><span>GPA {state.gpa}</span><span>•</span><span>SAT {state.sat}</span><span className="ml-auto text-white">admitly.app</span></div></div></div>
    <p className="mx-auto mt-4 max-w-sm text-center text-[11px] leading-5 text-zinc-600">This is a playful estimate, not an admissions decision. Essays, activities, context and pure chaos still matter.</p>
    <div className="mt-5 grid gap-3 sm:grid-cols-2"><PrimaryButton onClick={downloadCard}>↓ Download card</PrimaryButton><PrimaryButton onClick={share} className="border border-white/15 bg-white/[.07] text-white hover:bg-white/[.12]">{shared ? "Copied! ✓" : "Share ↗"}</PrimaryButton></div>
    <button onClick={() => dispatch({ type: "RESET" })} className="mt-5 w-full py-2 text-xs font-bold text-zinc-500 transition hover:text-white">Start over</button>
  </section>;
}
