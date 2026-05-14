import { notFound } from "next/navigation";
import { ClientServiceDetail } from "@/components/ClientServiceDetail";
import { clientOffers } from "@/lib/clientOffer";

export default function ClientServicePage() {
  const offer = clientOffers.find((item) => item.slug === "ai-pregled-za-firmu");
  if (!offer) return notFound();
  return <ClientServiceDetail offer={offer} />;
}
