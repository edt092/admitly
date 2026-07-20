"use client";
import { useState } from "react";
import { universities } from "@/data/universities";

export function CollegeCompare(){
  const [left,setLeft]=useState("ucla"),[right,setRight]=useState("umich");
  const a=universities.find(u=>u.id===left)!,b=universities.find(u=>u.id===right)!;
  const rows:[string,(u:typeof a)=>string][]=[
    ["Acceptance rate",u=>`${u.acceptanceRate}%`],["Average GPA",u=>String(u.avgGpa)],["Average SAT",u=>String(u.avgSat)],["Annual tuition*",u=>`$${u.tuition.toLocaleString()}`],["Undergraduates",u=>u.enrollment],["School type",u=>u.type]
  ];
  return <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[.03]"><div className="grid grid-cols-2 gap-px bg-white/10"><Picker value={left} onChange={setLeft}/><Picker value={right} onChange={setRight}/></div><div className="grid grid-cols-[1fr_1fr_1fr] items-stretch">{rows.map(([label,format])=><div className="contents" key={label}><div className="border-b border-white/8 p-4 text-sm font-black sm:p-6">{format(a)}</div><div className="order-first col-span-3 border-b border-white/8 bg-black/20 px-4 py-2 text-center text-[10px] font-black uppercase tracking-wider text-zinc-600 sm:order-none sm:col-span-1 sm:p-6">{label}</div><div className="border-b border-white/8 p-4 text-right text-sm font-black sm:p-6">{format(b)}</div></div>)}</div><div className="grid gap-3 p-5 sm:grid-cols-2"><a href={`/calculator?college=${a.id}`} className="rounded-full bg-lime-300 px-5 py-3 text-center text-xs font-black text-zinc-950">Check chances at {a.name}</a><a href={`/calculator?college=${b.id}`} className="rounded-full border border-white/15 px-5 py-3 text-center text-xs font-black">Check chances at {b.name}</a></div><p className="px-6 pb-5 text-[10px] text-zinc-600">*Listed tuition is a simplified reference figure and excludes living costs, aid and residency adjustments.</p></div>;
}
function Picker({value,onChange}:{value:string;onChange:(v:string)=>void}){const u=universities.find(x=>x.id===value)!;return <label className="bg-[#111217] p-5 sm:p-7"><span className="mb-3 block text-[10px] font-black uppercase tracking-wider text-lime-300">Choose a college</span><select value={value} onChange={e=>onChange(e.target.value)} className="w-full bg-transparent text-base font-black outline-none sm:text-xl" aria-label="Choose college">{universities.map(x=><option className="bg-zinc-900" value={x.id} key={x.id}>{x.name}</option>)}</select><span className="mt-2 block text-xs text-zinc-500">{u.location}</span></label>}
