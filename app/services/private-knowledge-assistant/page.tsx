import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getServicePackage } from "@/lib/services";

export default function ServicePage() {
  const service = getServicePackage("private-knowledge-assistant");
  if (!service) return notFound();
  return <ServiceDetail service={service} />;
}
