import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "AndyAI Radar — Signal Intelligence for the AI Stack",
  description: site.description,
  metadataBase: new URL("https://radar.andyai.ai"),
  openGraph: {
    title: "AndyAI Radar",
    description: "Track the AI stack. Filter the hype. Build with governance.",
    url: "https://radar.andyai.ai",
    siteName: "AndyAI Radar",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
