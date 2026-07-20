import type { ButtonHTMLAttributes, ReactNode } from "react";

export function PrimaryButton({ children, className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return <button className={`min-h-13 w-full rounded-full bg-lime-300 px-6 py-3.5 text-sm font-black tracking-tight text-zinc-950 transition hover:bg-lime-200 active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-40 ${className}`} {...props}>{children}</button>;
}

export function BackButton({ onClick }: { onClick: () => void }) {
  return <button onClick={onClick} className="mb-6 flex items-center gap-2 text-sm font-bold text-zinc-400 transition hover:text-white" aria-label="Go back"><span aria-hidden>←</span> Back</button>;
}

export function StepHeader({ eyebrow, title, copy }: { eyebrow: string; title: ReactNode; copy: string }) {
  return <div className="mb-8"><p className="mb-3 text-xs font-black uppercase tracking-[.22em] text-lime-300">{eyebrow}</p><h1 className="max-w-xl text-4xl font-black leading-[.95] tracking-[-.055em] text-white sm:text-5xl">{title}</h1><p className="mt-4 max-w-md text-sm leading-6 text-zinc-400">{copy}</p></div>;
}
