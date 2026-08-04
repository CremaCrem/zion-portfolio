import type { Metadata } from "next";
import { JetBrains_Mono, Spectral, Playfair_Display, Silkscreen, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "../styles/themes.css";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"] });
const spectral = Spectral({ variable: "--font-spectral", weight: ["400", "700"], subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const silkscreen = Silkscreen({ variable: "--font-pixel", weight: "400", subsets: ["latin"] });
const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeremy Zion L. Jamer | Portfolio",
  description: "IT Instructor & Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${spectral.variable} ${playfair.variable} ${silkscreen.variable} ${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-mono selection:bg-accent/30 selection:text-base">
        <Navbar />
        <div className="flex-1 w-full max-w-5xl mx-auto px-6">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
