"use client";

import { useState } from "react";
import { universityDomains } from "@/data/university-domains";

export function UniversityLogo({ id, name, accent, size = "medium" }: { id: string; name: string; accent: string; size?: "small" | "medium" }) {
  const [failed, setFailed] = useState(false);
  const domain = universityDomains[id];
  const initials = name.split(" ").map(word => word[0]).slice(0, 2).join("");
  const sizeClass = size === "small" ? "size-11 rounded-xl p-1.5" : "size-16 rounded-2xl p-2";
  const pixels = size === "small" ? 38 : 56;

  return <span className={`grid shrink-0 place-items-center overflow-hidden border border-white/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,.25)] ${sizeClass}`}>
    {domain && !failed ? <img src={`https://logos.hunter.io/${domain}`} alt={`${name} logo`} width={pixels} height={pixels} loading="lazy" decoding="async" className="size-full object-contain" onError={() => setFailed(true)}/> : <span className="grid size-full place-items-center rounded-lg text-sm font-black text-zinc-950" style={{ backgroundColor: accent }}>{initials}</span>}
  </span>;
}
