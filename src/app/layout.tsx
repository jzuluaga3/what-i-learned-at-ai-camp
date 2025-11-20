import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const yextSans = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-yext",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Camp 2025 Showcase | Yext Services",
  description:
    "Executive summary of AI Camp 2025 learnings, workflows, and production tooling for Yext Professional Services.",
  metadataBase: new URL("https://what-i-learned-at-ai-camp.vercel.app"),
  openGraph: {
    title: "AI Camp 2025: From Theory to Production Tools",
    description:
      "Key takeaways on agentic coding, MCP, agentic workflows, transparency, and production tooling built for Yext Services.",
    url: "https://what-i-learned-at-ai-camp.vercel.app",
    siteName: "AI Camp 2025 Showcase",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Camp 2025 Showcase | Yext Services",
    description:
      "From agentic coding to MCP integrations - see how AI Camp learnings are informing Yext Services delivery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${yextSans.variable} antialiased bg-snow text-midnight`}>
        {children}
      </body>
    </html>
  );
}
