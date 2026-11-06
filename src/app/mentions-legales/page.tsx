import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/data/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false },
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegales() {
  const a = business.address;
  return (
    <section className="phero phero--plain" style={{ borderBottom: 0 }}>
      <div className="container" style={{ maxWidth: 860 }}>
        <nav className="crumbs" aria-label="Fil d'Ariane">
          <Link href="/">Accueil</Link>
          <span aria-hidden>/</span>
          <span>Mentions légales</span>
        </nav>
        <h1 className="h2" style={{ marginBottom: 32 }}>
          Mentions légales
        </h1>
        <div className="prose">
          <p>
            <strong>Éditeur du site</strong>
            <br />
            DUNKAN SAS — {business.name}
            <br />
            SIRET : 814 800 173 00027
            <br />
            {a.street}, {a.zip} {a.city}, {a.region}
            <br />
            Tél. : {business.phone} — E-mail : {business.email}
          </p>
          <p>
            <strong>Hébergement</strong>
            <br />
            Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
          </p>
          <p>
            <strong>Tarifs</strong>
            <br />
            Les prix indiqués sur ce site sont des prix TTC « à partir de », donnés à titre indicatif. Seul le devis
            remis après diagnostic du véhicule fait foi.
          </p>
          <p>
            <strong>Données personnelles</strong>
            <br />
            Ce site ne dépose aucun cookie publicitaire et n&apos;enregistre aucune donnée : les demandes de devis sont
            transmises directement par WhatsApp ou e-mail, à l&apos;initiative du visiteur.
          </p>
          <p>
            <strong>Marques</strong>
            <br />
            TITAN Coatings, Hyperquartz®, Zeus, Vulcan TX155 et VELMAX sont des marques de leurs propriétaires
            respectifs. Les photos de véhicules ont été réalisées dans l&apos;atelier Dunkan.
          </p>
        </div>
      </div>
    </section>
  );
}
