import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "aistudios.pro — AI Agent Content Hub",
  description: "Build smarter AI agents. Learn, build, and ship with AI.",
  metadataBase: new URL("https://aistudios.pro"),
  openGraph: {
    title: "aistudios.pro — AI Agent Content Hub",
    description: "Build smarter AI agents. Learn, build, and ship with AI.",
    url: "https://aistudios.pro",
    siteName: "aistudios.pro",
    images: [{ url: "/api/og?title=Build+smarter+AI+agents&tag=aistudios.pro", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@vanwidaAI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased selection:bg-primary/30 min-h-screen bg-background text-foreground flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
