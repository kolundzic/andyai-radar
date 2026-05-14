import Link from "next/link";
export function CTA() {
  return <div className="rounded-3xl border border-radar-blue/30 bg-radar-blue/10 p-8"><h3 className="text-2xl font-semibold text-white">Need help evaluating your AI stack?</h3><p className="mt-3 max-w-2xl text-slate-300">Request an AI Stack Review and turn tool confusion into a governed roadmap.</p><div className="mt-6 flex flex-wrap gap-3"><Link href="/services" className="rounded-full bg-radar-blue px-5 py-3 text-sm font-semibold text-radar-navy">View Services</Link><Link href="/governance" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white">Explore Governance</Link></div></div>;
}
