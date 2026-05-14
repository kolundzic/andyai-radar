import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getServicePackage } from "@/lib/services";

export default function ServicePage() {
  const service = getServicePackage("ai-stack-radar-report");
  if (!service) return notFound();
  return <ServiceDetail service={service} />;
}
