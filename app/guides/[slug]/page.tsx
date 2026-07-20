import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdsterraAd } from "@/components/AdsterraAd";
import { SiteShell } from "@/components/SiteShell";
import { getGuide, guides } from "@/data/guides";

export function generateStaticParams() { return guides.map(guide => ({ slug: guide.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  if (!guide) return {};
  return { title: `${guide.title} | Admitly`, description: guide.description, alternates: { canonical: `/guides/${guide.slug}` } };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();
  const related = guides.filter(item => item.slug !== guide.slug).slice(0, 3);
  return <SiteShell><main>
    <header className="border-b border-white/8 bg-[radial-gradient(circle_at_70%_0%,rgba(190,242,100,.08),transparent_38%)]"><div className="mx-auto max-w-4xl px-5 py-14 sm:px-8 sm:py-20"><nav className="text-xs font-bold text-zinc-600"><a href="/guides" className="hover:text-white">Guides</a><span className="px-2">/</span>{guide.tag}</nav><p className="mt-10 text-xs font-black uppercase tracking-[.22em] text-lime-300">{guide.tag} · {guide.read}</p><h1 className="mt-4 text-4xl font-black leading-[.98] tracking-[-.055em] sm:text-6xl">{guide.title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">{guide.description}</p></div></header>
    <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8"><article className="text-[1.03rem] leading-8 text-zinc-300"><p className="text-xl leading-9 text-zinc-200">{guide.intro}</p>
      {guide.sections.map((section,index)=><section key={section.heading} className="mt-12"><h2 className="text-3xl font-black leading-tight tracking-[-.035em] text-white">{section.heading}</h2>{section.body.map(paragraph=><p key={paragraph.slice(0,40)} className="mt-5">{paragraph}</p>)}{index===1&&<AdsterraAd format="native" className="my-10"/>}{index===4&&<AdsterraAd format="rectangle" className="my-10"/>}</section>)}
      <div className="mt-14 rounded-3xl border border-lime-300/20 bg-lime-300/[.07] p-7"><p className="text-xs font-black uppercase tracking-[.2em] text-lime-300">Put it into practice</p><h2 className="mt-3 text-2xl font-black text-white">Turn research into a stronger college plan.</h2><p className="mt-3 text-sm leading-6 text-zinc-400">Explore college profiles, compare options, and use your academic information as a starting point—not a verdict.</p><a href="/calculator" className="mt-6 inline-block rounded-full bg-lime-300 px-6 py-3 text-xs font-black text-zinc-950">Try the free calculator →</a></div>
    </article><aside className="mt-16 border-t border-white/10 pt-10"><p className="text-xs font-black uppercase tracking-[.2em] text-zinc-600">Continue reading</p><div className="mt-5 grid gap-3 md:grid-cols-3">{related.map(item=><a key={item.slug} href={`/guides/${item.slug}`} className="rounded-2xl border border-white/10 bg-white/[.03] p-5 hover:border-lime-300/30"><span className="text-[10px] font-black text-lime-300">{item.tag}</span><h3 className="mt-3 font-black leading-tight">{item.title}</h3></a>)}</div></aside></div>
  </main></SiteShell>;
}
