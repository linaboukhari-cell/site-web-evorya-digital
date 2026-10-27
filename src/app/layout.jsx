import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Space Grotesk est la police du logotype Evorya ; IBM Plex Sans porte le texte courant.
const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const description =
  "Evorya Digital conçoit des logiciels sur mesure, des automatisations et des solutions d’intelligence artificielle. Basée à Tunis.";

export const metadata = {
  title: {
    default: "Evorya Digital — Ingénierie logicielle, automatisation et IA",
    template: "%s — Evorya Digital",
  },
  description,
  openGraph: {
    title: "Evorya Digital",
    description,
    siteName: "Evorya Digital",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-box focus:bg-sky focus:px-4 focus:py-3 focus:font-display focus:font-semibold focus:text-ink"
        >
          Aller au contenu
        </a>
        <Navbar />
        <main id="contenu" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
