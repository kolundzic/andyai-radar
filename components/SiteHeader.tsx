import Link from "next/link";

const links = [
  ["Reports", "/reports/top-ai-repos-2026"],
  ["Stack Map", "/stack-map"],
  ["Matrix", "/matrix"],
  ["Governance", "/governance"],
  ["Services", "/services"],
  ["Registry", "/registry"],
  ["About", "/about"]
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-radar-navy/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          <span className="text-radar-blue">🅰️</span> AndyAI Radar
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-white">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
