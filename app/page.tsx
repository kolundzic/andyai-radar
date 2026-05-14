import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { FeatureCards } from "@/components/FeatureCards";
import { EvaluationMatrix } from "@/components/EvaluationMatrix";
import { StackLadder } from "@/components/StackLadder";
import { ServiceCards } from "@/components/ServiceCards";
import { CTA } from "@/components/CTA";

export default function HomePage() {
  return <>
    <Hero />
    <Section eyebrow="What Radar Does" title="AI moves too fast for ordinary tool lists."><FeatureCards /></Section>
    <Section eyebrow="First Radar Report" title="Top AI Repos 2026 — from hype list to governed stack map."><p className="max-w-3xl leading-8">The first public report maps major AI repo signals into a governed AI stack: RAGFlow, LangGraph, n8n, Ollama, Open WebUI, Dify, Gemini CLI, DeepSeek-V3 and action-agent risks.</p><div className="mt-6"><Link href="/reports/top-ai-repos-2026" className="rounded-full bg-radar-blue px-5 py-3 text-sm font-semibold text-radar-navy">Read Full Report</Link></div></Section>
    <Section eyebrow="Matrix Preview" title="Evaluate by stack role, business value, risk and decision."><EvaluationMatrix /></Section>
    <Section eyebrow="Stack Preview" title="The AI stack is a layered system."><StackLadder /></Section>
    <Section eyebrow="Services" title="From signal intelligence to client-ready offers."><ServiceCards /></Section>
    <Section eyebrow="Next Step" title="Turn AI tool confusion into a governed roadmap."><CTA /></Section>
  </>;
}
