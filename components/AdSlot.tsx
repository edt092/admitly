export function AdSlot({ label = "Advertisement" }: { label?: string }) {
  return <aside className="my-8 grid min-h-28 place-items-center rounded-2xl border border-dashed border-white/10 bg-white/[.018] px-4 text-center" aria-label={label} data-ad-slot="adsterra-native"><div><p className="text-[9px] font-black uppercase tracking-[.2em] text-zinc-700">{label}</p><p className="mt-1 text-[10px] text-zinc-800">Native ad placement reserved</p></div></aside>;
}
