import Link from "next/link";
import { servicePackages } from "@/lib/services";

export function ServicePackageGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {servicePackages.map((service) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-radar-blue/50 hover:bg-radar-blue/10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-radar-blue">
            Service Package
          </p>
          <h3 className="mt-3 text-xl font-semibold text-white group-hover:text-radar-blue">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{service.subtitle}</p>
          <p className="mt-5 text-sm font-semibold text-radar-blue">View package →</p>
        </Link>
      ))}
    </div>
  );
}
