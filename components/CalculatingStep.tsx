"use client";

import { useEffect, useState } from "react";
import { useCalculator } from "@/context/CalculatorContext";
import { calculateChance } from "@/lib/chance";

const messages = ["Reading your academic aura…", "Bribing the admissions robot…", "Consulting the campus squirrels…", "Doing extremely serious math…"];

export function CalculatingStep() {
  const { state, dispatch } = useCalculator();
  const [message, setMessage] = useState(0);
  useEffect(() => {
    const ticker = window.setInterval(() => setMessage((m) => (m + 1) % messages.length), 520);
    const minimumDelay = new Promise((resolve) => window.setTimeout(resolve, 2000));
    const request = fetch("/api/calculate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ gpa: Number(state.gpa), sat: Number(state.sat), university: state.university }) }).then((r) => { if (!r.ok) throw new Error(); return r.json() as Promise<{ chance: number }>; });
    Promise.all([minimumDelay, request]).then(([, result]) => dispatch({ type: "SET_RESULT", chance: result.chance })).catch(() => {
      if (state.university) dispatch({ type: "SET_RESULT", chance: calculateChance(Number(state.gpa), Number(state.sat), state.university).chance });
    });
    return () => window.clearInterval(ticker);
  }, [dispatch, state.gpa, state.sat, state.university]);

  return <section className="animate-enter flex min-h-[430px] flex-col items-center justify-center text-center" aria-live="polite"><div className="animate-float relative grid size-24 place-items-center rounded-[2rem] border border-lime-300/30 bg-lime-300/10 text-4xl shadow-[0_0_70px_rgba(190,242,100,.17)]">🎓<span className="absolute -right-2 -top-2 size-4 rounded-full bg-lime-300 shadow-[0_0_20px_#bef264]" /></div><h1 className="mt-8 text-3xl font-black tracking-[-.04em]">Crunching the numbers</h1><p className="mt-3 min-h-6 text-sm text-zinc-400">{messages[message]}</p><div className="relative mt-8 h-1.5 w-56 overflow-hidden rounded-full bg-white/10 shimmer"><div className="h-full w-full rounded-full bg-lime-300" /></div><p className="mt-4 text-[10px] font-bold uppercase tracking-[.2em] text-zinc-600">Definitely not legally binding</p></section>;
}
