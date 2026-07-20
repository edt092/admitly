"use client";

import { useState } from "react";
import { useCalculator } from "@/context/CalculatorContext";
import { PrimaryButton, StepHeader } from "./ui";

export function AcademicsStep() {
  const { state, dispatch } = useCalculator();
  const [gpa, setGpa] = useState(state.gpa);
  const [sat, setSat] = useState(state.sat);
  const gpaNumber = Number(gpa); const satNumber = Number(sat);
  const valid = gpa !== "" && sat !== "" && gpaNumber >= 0 && gpaNumber <= 4 && satNumber >= 400 && satNumber <= 1600;

  return <section className="animate-enter">
    <StepHeader eyebrow="01 · The stats" title={<>Let&apos;s see what <span className="text-lime-300">you&apos;re working with.</span></>} copy="No judgment. Just two numbers to start your totally scientific prediction." />
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="group rounded-3xl border border-white/10 bg-white/[.045] p-5 transition focus-within:border-lime-300/70 focus-within:bg-white/[.07]"><span className="block text-xs font-bold uppercase tracking-widest text-zinc-500">GPA</span><div className="mt-3 flex items-end"><input value={gpa} onChange={(e) => setGpa(e.target.value)} type="number" min="0" max="4" step="0.01" inputMode="decimal" placeholder="3.85" className="w-full bg-transparent text-4xl font-black tracking-tight text-white outline-none placeholder:text-zinc-700" aria-label="GPA from 0 to 4"/><span className="pb-1 text-sm font-bold text-zinc-600">/ 4.0</span></div></label>
      <label className="group rounded-3xl border border-white/10 bg-white/[.045] p-5 transition focus-within:border-lime-300/70 focus-within:bg-white/[.07]"><span className="block text-xs font-bold uppercase tracking-widest text-zinc-500">SAT score</span><div className="mt-3 flex items-end"><input value={sat} onChange={(e) => setSat(e.target.value)} type="number" min="400" max="1600" step="10" inputMode="numeric" placeholder="1480" className="w-full bg-transparent text-4xl font-black tracking-tight text-white outline-none placeholder:text-zinc-700" aria-label="SAT score from 400 to 1600"/><span className="pb-1 text-sm font-bold text-zinc-600">/ 1600</span></div></label>
    </div>
    <p className="mt-3 min-h-5 text-xs text-rose-300">{(gpa && (gpaNumber < 0 || gpaNumber > 4)) ? "GPA must be between 0.0 and 4.0." : (sat && (satNumber < 400 || satNumber > 1600)) ? "SAT must be between 400 and 1600." : ""}</p>
    <PrimaryButton disabled={!valid} onClick={() => { dispatch({ type: "SET_ACADEMICS", gpa, sat }); dispatch({ type: "GO_TO", step: "college" }); }}>Choose a college <span aria-hidden>→</span></PrimaryButton>
  </section>;
}
