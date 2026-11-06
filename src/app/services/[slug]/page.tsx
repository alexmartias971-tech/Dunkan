import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ServicePrices } from "@/components/Pricing";
import { CtaBand, Faq, FaqJsonLd } from "@/components/Sections";
import { IconArrow, IconAward, IconCheck, IconEye, IconShield, IconSparkle, IconWhatsApp } from "@/components/Icons";
import { getService, services, waLink } from "@/data/site";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.seoTitle,
    description: s.seoDesc,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.seoTitle, description: s.seoDesc, images: [{ url: s.hero }] },
  };
}

const benefitIcons = [<IconShield key="a" />, <IconSparkle key="b" />, <IconEye key="c" />, <IconAward key="d" />];

function Compare({ slug }: { slug: string }) {
  if (slug === "traitement-ceramique-hyperquartz") {
    const rows = [
      ["Garantie", "5 ans", "9 ans"],
      ["Technologie", "Hyperquartz® hybride", "Membrane élastomère Extreme Performance"],
      ["Préparation incluse", "Décontamination + lustrage", "Décontamination + correction 2 étapes"],
      ["Idéal pour", "Véhicule récent, usage quotidien", "Haut de gamme, véhicule gardé longtemps"],
      ["Immobilisation", "≈ 2 jours", "≈ 3 jours"],
    ];
    return (
      <div className="table-scroll reveal">
        <table className="compare">
          <thead>
            <tr>
              <th />
              <th>TITAN Zeus</th>
              <th>TITAN Vulcan TX155</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]}>
                <th scope="row">{r[0]}</th>
                <td>{r[1]}</td>
                <td className="is-hl">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (slug === "film-protection-ppf") {
    const zones = ["Pare-chocs avant", "Rétroviseurs & phares", "Seuils & cuvettes de poignées", "Capot & ailes complets", "Portières, toit, arrière"];
    const cov = [
      [true, true, true, false, false],
      [true, true, true, true, false],
      [true, true, true, true, true],
    ];
    return (
      <div className="table-scroll reveal">
        <table className="compare">
          <thead>
            <tr>
              <th>Zone protégée</th>
              <th>Zones exposées</th>
              <th>Face avant</th>
              <th>Full body</th>
            </tr>
          </thead>
          <tbody>
            {zones.map((z, i) => (
              <tr key={z}>
                <th scope="row">{z}</th>
                {cov.map((c, j) => (
                  <td key={j} className={j === 2 ? "is-hl" : undefined}>
                    {c[i] ? <IconCheck style={{ width: 18, height: 18, color: "var(--red-hot)" }} aria-label="Inclus" /> : <span className="muted">—</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return null;
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const others = services.filter((o) => o.slug !== s.slug);
  const compare = Compare({ slug: s.slug });

  return (
    <>
      <FaqJsonLd items={s.faq} />
      <section className="phero">
        <div className="phero__img">
          <Image src={s.hero} alt="" fill priority sizes="100vw" />
        </div>
        <div className="container">
          <nav className="crumbs" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden>/</span>
            <Link href="/#services">Services</Link>
            <span aria-hidden>/</span>
            <span>{s.short}</span>
          </nav>
          <span className="eyebrow">{s.kicker}</span>
          <h1 className="h1">{s.title}</h1>
          <div className="phero__chips">
            {s.chips.map((c, i) => (
              <span key={c} className={`chip ${i === 0 ? "chip--red" : ""}`}>
                {c}
              </span>
            ))}
          </div>
          <div className="hero__ctas">
            <Link href="/tarifs#devis" className="btn btn--primary">
              Estimer mon tarif <IconArrow />
            </Link>
            <a
              className="btn btn--ghost"
              href={waLink(`Bonjour Dunkan, je souhaite un devis pour : ${s.title}.`)}
              target="_blank"
              rel="noopener"
            >
              <IconWhatsApp /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail">
          <div>
            <div className="prose reveal">
              {s.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="benefits">
              {s.benefits.map((b, i) => (
                <div key={b.title} className="benefit reveal" style={{ ["--d" as string]: `${i * 70}ms` }}>
                  {benefitIcons[i % benefitIcons.length]}
                  <strong>{b.title}</strong>
                  <span>{b.text}</span>
                </div>
              ))}
            </div>
            {compare && <div style={{ marginTop: 40 }}>{compare}</div>}
          </div>
          <ServicePrices groups={s.groups} title="Tarifs" />
        </div>
      </section>

      <section className="section section--tight section--alt">
        <div className="container">
          <div className="section-head section-head--split reveal">
            <div>
              <span className="eyebrow">En atelier</span>
              <h2 className="h2">Quelques réalisations.</h2>
            </div>
            <Link href="/realisations" className="link-arrow">
              Toute la galerie <IconArrow />
            </Link>
          </div>
          <div className="detail-gallery">
            {s.gallery.map((g, i) => (
              <div key={g} className="reveal" style={{ ["--d" as string]: `${i * 60}ms` }}>
                <Image src={g} alt={`${s.title} — réalisation Dunkan`} fill sizes="(max-width: 560px) 50vw, 33vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq items={s.faq} title={`${s.short} : vos questions.`} />

      <section className="section section--tight">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Nos autres expertises</span>
          </div>
          <div className="carte" style={{ marginTop: 0, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="carte__group reveal" style={{ padding: 24 }}>
                <span className="eyebrow" style={{ marginBottom: 10 }}>
                  {o.kicker}
                </span>
                <h3 className="h3">{o.short}</h3>
                <p className="muted" style={{ fontSize: 14, margin: "10px 0 16px" }}>
                  {o.summary}
                </p>
                <span className="link-arrow">
                  Découvrir <IconArrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
