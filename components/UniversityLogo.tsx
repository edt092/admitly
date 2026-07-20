"use client";

import { useState } from "react";
import { universityDomains } from "@/data/university-domains";

export function UniversityLogo({ id, name, accent }: { id: string; name: string; accent: string }) {
  const [failed, setFailed] = useState(false);
  const domain = universityDomains[id];
  const initials = name.split(" ").map(word => word[0]).slice(0, 2).join("");

  return <span className="grid size-16 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white p-2 shadow-[0_10px_30px_rgba(0,0,0,.25)]">
    {domain && !failed ? <img src={`https://logos.hunter.io/${domain}`} alt={`${name} logo`} width={56} height={56} loading="lazy" decoding="async" className="size-full object-contain" onError={() => setFailed(true)}/> : <span className="grid size-full place-items-center rounded-xl text-sm font-black text-zinc-950" style={{ backgroundColor: accent }}>{initials}</span>}
  </span>;
}
