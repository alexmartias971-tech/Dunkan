import type { Metadata } from "next";
import Link from "next/link";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import { CtaBand } from "@/components/Sections";
import { business, gallery } from "@/data/site";
import { IconArrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Nos réalisations — Porsche, Audi, Jaguar, BMW sublimés",
  description:
    "Galerie des véhicules sublimés dans l'atelier Dunkan à Jarry : detailing, céramique Hyperquartz®, films PPF transparents et mats satinés.",
  alternates: { canonical: "/realisations" },
};

export default function RealisationsPage() {
  return (
    <>
      <section className="phero phero--plain">
        <div className="container">
          <nav className="crumbs" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden>/</span>
            <span>Réalisations</span>
          </nav>
          <span className="eyebrow">{gallery.length} sublimations</span>
          <h1 className="h1">
            Nos <span className="chrome">sublimations.</span>
          </h1>
          <p className="lead">
            Notre objectif : vous transmettre la passion automobile à chaque sublimation. Toutes les photos ont été
            prises dans notre atelier de Jarry.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Gallery />
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <a href={business.instagram} target="_blank" rel="noopener" className="link-arrow">
              Plus de réalisations sur Instagram <IconArrow />
            </a>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <BeforeAfter />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
