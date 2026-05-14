import { permissionRows } from "@/lib/data";
export function PermissionMatrix() {
  return <div className="grid gap-3">{permissionRows.map(([permission,risk,rule])=><article key={permission} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><h3 className="text-lg font-semibold text-white">{permission}</h3><p className="mt-2 text-sm text-slate-300"><strong>Risk:</strong> {risk}</p><p className="mt-2 text-sm text-radar-blue">{rule}</p></article>)}</div>;
}
