"use client";

import { useMemo, useState } from "react";
import { universities } from "@/data/universities";
import { useCalculator } from "@/context/CalculatorContext";
import { BackButton, PrimaryButton, StepHeader } from "./ui";

export function CollegeStep() {
  const { state, dispatch } = useCalculator();
  const [query, setQuery] = useState("");
  const results = useMemo(() => universities.filter((u) => `${u.name} ${u.location}`.toLowerCase().includes(query.toLowerCase())), [query]);
  return <section className="animate-enter">
    <BackButton onClick={() => dispatch({ type: "GO_TO", step: "academics" })} />
    <StepHeader eyebrow="02 · Dream school" title={<>Where are you <span className="text-lime-300">shooting your shot?</span></>} copy="Pick one school. We promise not to email their admissions office." />
    <label className="mb-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.06] px-4 py-3.5 focus-within:border-lime-300/70"><span className="text-zinc-500" aria-hidden>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search colleges..." className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-600" aria-label="Search colleges" /></label>
    <div className="mb-6 max-h-72 space-y-2 overflow-y-auto pr-1" role="listbox" aria-label="Universities">
      {results.map((u) => <button key={u.id} role="option" aria-selected={state.university?.id === u.id} onClick={() => dispatch({ type: "SELECT_UNIVERSITY", university: u })} className={`flex w-full items-center gap-4 rounded-2xl border p-3 text-left transition ${state.university?.id === u.id ? "border-lime-300/70 bg-lime-300/10" : "border-white/8 bg-white/[.035] hover:bg-white/[.07]"}`}><span className="grid size-11 shrink-0 place-items-center rounded-xl text-sm font-black text-zinc-950" style={{ backgroundColor: u.accent }}>{u.name.split(" ").map((x) => x[0]).slice(0, 2).join("")}</span><span className="min-w-0 flex-1"><span className="block truncate text-sm font-bold text-white">{u.name}</span><span className="text-xs text-zinc-500">{u.location}</span></span><span className={`grid size-6 place-items-center rounded-full border text-xs ${state.university?.id === u.id ? "border-lime-300 bg-lime-300 text-black" : "border-zinc-700 text-transparent"}`}>✓</span></button>)}
      {!results.length && <p className="py-8 text-center text-sm text-zinc-500">No colleges found. Try another name.</p>}
    </div>
    <PrimaryButton disabled={!state.university} onClick={() => dispatch({ type: "GO_TO", step: "calculating" })}>Calculate my chances <span aria-hidden>✦</span></PrimaryButton>
  </section>;
}
