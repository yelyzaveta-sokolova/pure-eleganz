import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "PURE ELEGANZ – Sugaring, Maniküre & Pediküre in Gronau",
  description:
    "Professionelles Beauty Studio in Gronau (NRW) für Sugaring, Maniküre und Pediküre. Sanfte Haarentfernung, gepflegte Nägel und entspannende Behandlungen in stilvoller Atmosphäre. Termine nur nach Vereinbarung.",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
  },
  keywords: [
    "Sugaring Gronau",
    "Maniküre Gronau",
    "Pediküre Gronau",
    "Nagelstudio Gronau",
    "Haarentfernung Gronau",
    "Sugaring NRW",
    "Brazilian Sugaring",
    "Beauty Studio Gronau",
    "Gelnägel Gronau",
    "Kosmetikstudio Gronau",
  ],
  authors: [{ name: "PURE ELEGANZ" }],
  openGraph: {
    title:
      "PURE ELEGANZ – Sugaring, Maniküre & Pediküre in Gronau",
    description:
      "Sanfte Haarentfernung, professionelle Maniküre und Pediküre in Gronau (NRW). Jetzt Termin vereinbaren.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}