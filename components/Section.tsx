import type { ReactNode } from "react";
export function Section({ eyebrow, title, children }: { eyebrow?: string; title: string; children: ReactNode }) {
  return <section className="mx-auto max-w-7xl px-5 py-14">{eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-radar-blue">{eyebrow}</p> : null}<h2 className="mb-6 max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2><div className="text-slate-300">{children}</div></section>;
}
