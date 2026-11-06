import Image from "next/image";
import Link from "next/link";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import { Packs, PriceNote, VehicleSwitch } from "@/components/Pricing";
import {
  Concept,
  Contact,
  CtaBand,
  Faq,
  FaqJsonLd,
  Marquee,
  Process,
  Reviews,
  ServicesGrid,
  Why,
} from "@/components/Sections";
import { IconArrow, IconWhatsApp } from "@/components/Icons";
import { business, marqueeModels, waLink } from "@/data/site";

export default function Home() {
  const years = new Date().getFullYear() - business.since;
  return (
    <>
      <FaqJsonLd />

      {/* HERO */}
      <section className="hero">
        <div className="hero__media">
          <Image
            src="/images/hero-cayenne.jpg"
            alt="Porsche Cayenne noir sublimé dans l'atelier Dunkan à Jarry"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="container">
          <div className="hero__content">
            <div className="hero__badge">
              <i>TITAN</i>
              <span>
                <b>Représentant accrédité</b> TITAN Coatings en Guadeloupe
              </span>
            </div>
            <h1 className="h1">
              <span className="line">Faites</span>
              <span className="line shine">dunkaniser</span>
              <span className="line">votre voiture.</span>
            </h1>
            <p className="hero__lead">
              Detailing, traitement céramique Hyperquartz® et film de protection PPF à Jarry. Votre véhicule ressort
              plus beau qu&apos;au premier jour — et le reste face au soleil, au sel et aux routes de Guadeloupe.
            </p>
            <div className="hero__ctas">
              <Link href="/tarifs#devis" className="btn btn--primary">
                Estimer mon tarif <IconArrow />
              </Link>
              <a
                href={waLink("Bonjour Dunkan, je souhaite un devis pour mon véhicule.")}
                className="btn btn--ghost"
                target="_blank"
                rel="noopener"
              >
                <IconWhatsApp /> Devis WhatsApp
              </a>
            </div>
          </div>

          <div className="hero__trust">
            <div>
              <strong>{years} ans</strong>
              <span>d&apos;expertise, depuis {business.since}</span>
            </div>
            <div>
              <strong>9 ans</strong>
              <span>garantie céramique Vulcan</span>
            </div>
            <div>
              <strong>10 ans</strong>
              <span>garantie film PPF</span>
            </div>
            <div>
              <strong>Gratuit</strong>
              <span>diagnostic & devis</span>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={marqueeModels} />

      <Concept />
      <ServicesGrid />

      {/* AVANT / APRÈS */}
      <section className="section">
        <div className="container">
          <BeforeAfter />
        </div>
      </section>

      {/* TARIFS */}
      <section className="section section--alt" id="tarifs">
        <div className="container">
          <div className="section-head section-head--split reveal">
            <div>
              <span className="eyebrow">Tarifs transparents</span>
              <h2 className="h2">
                Nos packs, <span className="chrome">prix affichés.</span>
              </h2>
              <p className="lead">Choisissez la taille de votre véhicule : les prix s&apos;adaptent.</p>
            </div>
            <VehicleSwitch />
          </div>
          <Packs ctaHref="/tarifs#devis" />
          <PriceNote />
          <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/tarifs" className="link-arrow">
              Tous les tarifs à la carte <IconArrow />
            </Link>
            <Link href="/tarifs#devis" className="link-arrow">
              Configurer mon devis <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      <Why />
      <Process />

      {/* RÉALISATIONS */}
      <section className="section" id="realisations">
        <div className="container">
          <div className="section-head section-head--split reveal">
            <div>
              <span className="eyebrow">Réalisations</span>
              <h2 className="h2">
                Sortis de <span className="chrome">notre atelier.</span>
              </h2>
            </div>
            <Link href="/realisations" className="link-arrow">
              Toute la galerie <IconArrow />
            </Link>
          </div>
          <Gallery limit={16} preview />
          <div style={{ textAlign: "center", marginTop: 8 }}>
            <a href={business.instagram} target="_blank" rel="noopener" className="link-arrow">
              Suivre nos sublimations sur Instagram <IconArrow />
            </a>
          </div>
        </div>
      </section>

      <Reviews />
      <Faq />
      <CtaBand />
      <Contact />
    </>
  );
}
