import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danielhons.cz"),
  title: "Fotograf nemovitostí Vysočina a Brno | Daniel Hons | Dron v ceně, dodání 48h",
  description:
    "Profesionální fotografie a video nemovitostí. Dron v ceně, dodání do 48 h. Pokrytí Vysočiny a Brna.",
  openGraph: {
    title: "Fotograf nemovitostí Vysočina a Brno | Daniel Hons | Dron v ceně, dodání 48h",
    description: "Fotografie, video, dron i AI vizualizace pro nemovitosti ve Vysočině a Brně.",
    url: "https://danielhons.cz",
    siteName: "Daniel Hons",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${inter.variable} ${playfair.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-text font-inter">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
