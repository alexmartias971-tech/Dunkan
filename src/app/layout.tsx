import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Chrome from "@/components/Chrome";
import { Footer } from "@/components/Sections";
import { QuoteProvider } from "@/components/QuoteContext";
import { business } from "@/data/site";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: "Dunkan Sublimateur Automobile — Detailing, céramique & PPF en Guadeloupe",
    template: "%s | Dunkan Sublimateur Automobile",
  },
  description:
    "Centre d'esthétique automobile à Jarry (Baie-Mahault) depuis 2015 : detailing, traitement céramique Hyperquartz® TITAN garanti jusqu'à 9 ans, film de protection PPF garanti 10 ans, film pare-brise VELMAX. Tarifs en ligne et devis WhatsApp.",
  keywords: [
    "detailing Guadeloupe",
    "esthétique automobile Guadeloupe",
    "traitement céramique Guadeloupe",
    "film PPF Guadeloupe",
    "lavage voiture Jarry",
    "polissage voiture Baie-Mahault",
    "TITAN Coatings Guadeloupe",
    "film pare-brise VELMAX",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: business.name,
    title: "Dunkan — Faites dunkaniser votre voiture",
    description:
      "Detailing, céramique Hyperquartz® et film PPF à Jarry, Guadeloupe. Tarifs transparents, diagnostic gratuit.",
    images: [{ url: "/images/hero-cayenne.jpg", width: 1800, height: 1350, alt: "Porsche Cayenne sublimé chez Dunkan" }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "@id": `${business.url}/#business`,
  name: business.name,
  image: `${business.url}/images/hero-cayenne.jpg`,
  logo: `${business.url}/images/logo-dunkan.png`,
  url: business.url,
  telephone: business.phoneIntl,
  email: business.email,
  foundingDate: String(business.since),
  priceRange: "€€-€€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    postalCode: business.address.zip,
    addressLocality: business.address.city,
    addressRegion: business.address.region,
    addressCountry: "GP",
  },
  areaServed: "Guadeloupe",
  sameAs: [business.instagram, business.facebook],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "08:30", closes: "16:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "08:30", closes: "12:00" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${archivo.variable} ${inter.variable}`}>
      <body>
        <a href="#main" className="skip">
          Aller au contenu
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <QuoteProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <Chrome />
        </QuoteProvider>
      </body>
    </html>
  );
}
