"use client";

import { CalculatorProvider, useCalculator } from "@/context/CalculatorContext";
import { AcademicsStep } from "./AcademicsStep";
import { CollegeStep } from "./CollegeStep";
import { CalculatingStep } from "./CalculatingStep";
import { ResultStep } from "./ResultStep";

const steps = ["academics", "college", "calculating", "result"] as const;

function Shell() {
  const { state } = useCalculator();
  const index = steps.indexOf(state.step);
  return <main className="relative min-h-dvh overflow-hidden bg-[#08090d]"><div className="pointer-events-none absolute left-[-15rem] top-[-15rem] size-[36rem] rounded-full bg-lime-300/[.055] blur-3xl" /><div className="pointer-events-none absolute bottom-[-18rem] right-[-18rem] size-[38rem] rounded-full bg-violet-500/[.06] blur-3xl" />
    <div className="relative mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-5 py-6 sm:px-8 sm:py-8"><header className="flex items-center justify-between"><a href="#" className="text-lg font-black tracking-[-.06em] text-white">admit<span className="text-lime-300">ly</span>.</a><span className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-zinc-500">For fun, not fate</span></header>
      <div className="mt-8 flex items-center gap-2" aria-label={`Step ${index + 1} of 4`}>{steps.map((step, i) => <div key={step} className={`h-1 flex-1 rounded-full transition-all duration-500 ${i <= index ? "bg-lime-300" : "bg-white/10"}`} />)}</div>
      <div className="flex flex-1 items-center py-9"><div className="w-full">{state.step === "academics" && <AcademicsStep />}{state.step === "college" && <CollegeStep />}{state.step === "calculating" && <CalculatingStep />}{state.step === "result" && <ResultStep />}</div></div>
      <footer className="flex items-center justify-between border-t border-white/5 pt-5 text-[10px] font-bold uppercase tracking-widest text-zinc-700"><span>Built for ambitious humans</span><span>v0.1</span></footer></div></main>;
}

export function CalculatorApp() { return <CalculatorProvider><Shell /></CalculatorProvider>; }
