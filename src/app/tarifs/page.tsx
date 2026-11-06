import type { Metadata } from "next";
import Link from "next/link";
import QuoteBuilder from "@/components/QuoteBuilder";
import { Carte, Packs, PriceNote, VehicleSwitch } from "@/components/Pricing";
import { Faq, FaqJsonLd } from "@/components/Sections";
import { faq } from "@/data/site";

export const metadata: Metadata = {
  title: "Tarifs detailing, céramique & PPF en Guadeloupe",
  description:
    "Tous nos prix affichés : lavage premium dès 59 €, soin complet dès 149 €, céramique TITAN Zeus dès 790 €, PPF face avant dès 1 490 €. Configurez votre devis et envoyez-le sur WhatsApp.",
  alternates: { canonical: "/tarifs" },
};

export default function TarifsPage() {
  const priceFaq = faq.filter((f) => /tarif|temps|garantie/i.test(f.q));
  return (
    <>
      <FaqJsonLd items={priceFaq} />
      <section className="phero phero--plain">
        <div className="container">
          <nav className="crumbs" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden>/</span>
            <span>Tarifs</span>
          </nav>
          <span className="eyebrow">Tarifs 2026</span>
          <h1 className="h1">
            Des prix clairs, <span className="chrome">avant même de venir.</span>
          </h1>
          <p className="lead">
            Sélectionnez la taille de votre véhicule : tous les prix de la page s&apos;adaptent. Puis composez votre
            devis et envoyez-le-nous en un clic sur WhatsApp.
          </p>
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <VehicleSwitch />
            <a href="#devis" className="btn btn--primary btn--sm">
              Configurer mon devis
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Packs</span>
            <h2 className="h2">Nos formules les plus demandées.</h2>
          </div>
          <Packs />

          <div className="section-head section-head--split reveal" style={{ marginTop: "clamp(64px,8vw,110px)", marginBottom: 0 }}>
            <div>
              <span className="eyebrow">À la carte</span>
              <h2 className="h2">Toutes nos prestations.</h2>
            </div>
            <VehicleSwitch />
          </div>
          <Carte />
          <PriceNote />
        </div>
      </section>

      <section className="section section--alt" id="devis">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Devis en 1 minute</span>
            <h2 className="h2">
              Composez votre <span className="chrome">sublimation.</span>
            </h2>
            <p className="lead">
              Trois étapes, une estimation immédiate, et votre demande arrive directement sur notre WhatsApp. On vous
              rappelle pour fixer le diagnostic gratuit.
            </p>
          </div>
          <QuoteBuilder />
        </div>
      </section>

      <Faq items={priceFaq} title="Tarifs & délais : vos questions." />
    </>
  );
}
