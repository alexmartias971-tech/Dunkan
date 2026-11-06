import Image from "next/image";
import Link from "next/link";
import {
  business,
  carte,
  eur,
  faq as faqData,
  minPrice,
  reviews,
  services,
  telLink,
  waLink,
} from "@/data/site";
import Hours from "./Hours";
import {
  IconArrow,
  IconAward,
  IconCar,
  IconDrop,
  IconFacebook,
  IconGoogle,
  IconHeart,
  IconInstagram,
  IconMail,
  IconPhone,
  IconPin,
  IconShield,
  IconStar,
  IconStone,
  IconSun,
  IconWave,
  IconWhatsApp,
} from "./Icons";

const years = new Date().getFullYear() - business.since;

/* ---------- Concept : pourquoi protéger en Guadeloupe ---------- */

export function Concept() {
  const threats = [
    { icon: <IconSun />, t: "Soleil tropical", p: "Un indice UV souvent extrême qui oxyde le vernis et décolore les plastiques." },
    { icon: <IconWave />, t: "Air salin", p: "Le sel marin se dépose partout et ronge la carrosserie, même loin de la plage." },
    { icon: <IconDrop />, t: "Pluies & brumes de sable", p: "Averses tropicales, sable du Sahara, fientes : autant de taches qui marquent." },
    { icon: <IconStone />, t: "Gravillons", p: "Routes et chantiers projettent des éclats qui piquent capot et pare-brise." },
  ];
  return (
    <section className="section" id="concept">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Le concept Dunkan</span>
          <h2 className="h2">
            Ici, votre voiture vieillit <span className="red">deux fois plus vite.</span>
          </h2>
          <p className="lead">
            Le climat des Antilles est le pire ennemi d&apos;une peinture. « Dunkaniser » votre véhicule, c&apos;est le
            rendre plus beau qu&apos;au premier jour — puis le protéger pour qu&apos;il le reste pendant des années.
          </p>
        </div>

        <div className="threats">
          {threats.map((t, i) => (
            <div key={t.t} className="threat reveal" style={{ ["--d" as string]: `${i * 70}ms` }}>
              <div className="threat__icon">{t.icon}</div>
              <h3>{t.t}</h3>
              <p>{t.p}</p>
            </div>
          ))}
        </div>

        <div className="steps reveal">
          <div className="step">
            <div className="step__num">01</div>
            <h3>
              <em>Laver</em> en profondeur
            </h3>
            <p>Décontamination complète : goudron, fer, sel et résidus disparaissent sans agresser le vernis.</p>
          </div>
          <div className="step">
            <div className="step__num">02</div>
            <h3>
              <em>Corriger</em> le vernis
            </h3>
            <p>Polissage machine pour effacer micro-rayures et voile terne. La couleur retrouve sa profondeur.</p>
          </div>
          <div className="step">
            <div className="step__num">03</div>
            <h3>
              <em>Protéger</em> durablement
            </h3>
            <p>Céramique Hyperquartz® jusqu&apos;à 9 ans ou film PPF garanti 10 ans : la beauté est verrouillée.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */

export function ServicesGrid() {
  return (
    <section className="section section--alt" id="services">
      <div className="container">
        <div className="section-head section-head--split reveal">
          <div>
            <span className="eyebrow">Nos expertises</span>
            <h2 className="h2">
              Quatre savoir-faire, <span className="chrome">une obsession.</span>
            </h2>
          </div>
          <Link href="/tarifs" className="link-arrow">
            Voir tous les tarifs <IconArrow />
          </Link>
        </div>

        <div className="services">
          {services.map((s, i) => {
            // Prix d'appel = prestation principale (1re de la famille)
            const main = carte.find((g) => g.id === s.groups[0])?.items[0];
            const from = main ? minPrice(main.price) : 0;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="service reveal"
                style={{ ["--d" as string]: `${(i % 2) * 90}ms` }}
              >
                <div className="service__img">
                  <Image src={s.card} alt="" fill sizes="(max-width: 960px) 100vw, 55vw" />
                </div>
                <div className="service__tag">
                  {s.chips.slice(0, 2).map((c, j) => (
                    <span key={c} className={`chip ${j === 0 ? "chip--red" : ""}`}>
                      {c}
                    </span>
                  ))}
                </div>
                <h3>{s.short}</h3>
                <p>{s.summary}</p>
                <div className="service__foot">
                  <span className="price-from">
                    À partir de
                    <strong>{eur(from)}</strong>
                  </span>
                  <span className="link-arrow">
                    Découvrir <IconArrow />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- Pourquoi Dunkan ---------- */

export function Why() {
  const f = [
    { icon: <IconAward />, t: "Représentant accrédité TITAN", p: "Dunkan est le représentant accrédité TITAN Coatings en Guadeloupe." },
    { icon: <IconShield />, t: "Garanties écrites", p: "5 ans (Zeus), 9 ans (Vulcan TX155), 10 ans (PPF), avec certificat." },
    { icon: <IconCar />, t: "Atelier fermé & éclairé", p: "Un studio dédié à Jarry, à l'abri de la poussière, du soleil et de la pluie." },
    { icon: <IconHeart />, t: "Un service à la carte", p: "Conseil honnête, suivi après prestation… et une petite attention à la livraison." },
  ];
  return (
    <section className="section">
      <div className="container why">
        <div className="why__media reveal">
          <Image src="/images/atelier-precision.jpg" alt="Finition à la main dans l'atelier Dunkan" fill sizes="(max-width: 900px) 100vw, 50vw" />
          <div className="why__float">
            <b>{years} ans</b>
            <span>
              d&apos;expertise en esthétique automobile
              <br />
              en Guadeloupe, depuis {business.since}.
            </span>
          </div>
        </div>
        <div className="reveal" style={{ ["--d" as string]: "120ms" }}>
          <span className="eyebrow">Pourquoi Dunkan</span>
          <h2 className="h2">
            Des mains d&apos;experts, <span className="chrome">amoureux des belles mécaniques.</span>
          </h2>
          <p className="lead">
            Le detailing est un art qui demande de la maîtrise, du matériel de haute technicité et des produits de
            grande qualité. Nous confier votre véhicule, c&apos;est le laisser entre des mains méticuleuses.
          </p>
          <div className="features">
            {f.map((x) => (
              <div key={x.t} className="feature">
                {x.icon}
                <h3>{x.t}</h3>
                <p>{x.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */

export function Process() {
  const steps = [
    { t: "Diagnostic gratuit", p: "On inspecte votre véhicule ensemble et on écoute vos attentes." },
    { t: "Devis clair", p: "Un prix ferme, un planning précis. Aucune surprise." },
    { t: "Préparation", p: "Lavage, décontamination, masquage des zones sensibles." },
    { t: "Sublimation", p: "Correction, céramique ou pose du film, en atelier fermé." },
    { t: "Livraison & suivi", p: "Contrôle final avec vous, certificat de garantie, conseils d'entretien." },
  ];
  return (
    <section className="section section--tight section--alt">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Comment ça se passe</span>
          <h2 className="h2">Simple, du premier message à la livraison.</h2>
        </div>
        <div className="process">
          {steps.map((s, i) => (
            <div key={s.t} className="proc reveal" style={{ ["--d" as string]: `${i * 80}ms` }}>
              <div className="proc__dot">{i + 1}</div>
              <h3>{s.t}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Avis ---------- */

const Stars = ({ n }: { n: number }) => (
  <span className="stars" aria-label={`${n} étoiles sur 5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <IconStar key={i} style={{ opacity: i < n ? 1 : 0.25 }} />
    ))}
  </span>
);

export function Reviews() {
  const mapsReviews = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.mapsQuery)}`;
  return (
    <section className="section" id="avis">
      <div className="container">
        <div className="section-head section-head--split reveal">
          <div>
            <span className="eyebrow">Ils nous ont confié leur voiture</span>
            <h2 className="h2">
              « Plus belle que <span className="chrome">le jour de l&apos;achat. »</span>
            </h2>
          </div>
          <a href={mapsReviews} target="_blank" rel="noopener" className="g-badge">
            <IconGoogle />
            <div>
              <strong>Avis Google</strong>
              <span>Lire tous les avis →</span>
            </div>
          </a>
        </div>
        <div className="reviews">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className={`review reveal ${i === 0 ? "review--big" : ""}`}
              style={{ ["--d" as string]: `${(i % 3) * 70}ms`, margin: 0 }}
            >
              <Stars n={r.stars} />
              <blockquote>{r.text}</blockquote>
              <footer>
                <span className="avatar">{r.name.charAt(0)}</span>
                <div>
                  <strong>{r.name}</strong>
                  <span>Avis Google</span>
                </div>
              </footer>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

export function Faq({ items = faqData, title = "Vos questions, nos réponses." }: { items?: { q: string; a: string }[]; title?: string }) {
  return (
    <section className="section section--alt" id="faq">
      <div className="container faq">
        <div className="reveal">
          <span className="eyebrow">FAQ</span>
          <h2 className="h2">{title}</h2>
          <p className="lead">Une autre question ? Écrivez-nous, on répond vite.</p>
          <div style={{ marginTop: 28 }}>
            <a className="btn btn--wa" href={waLink("Bonjour Dunkan, j'ai une question :")} target="_blank" rel="noopener">
              <IconWhatsApp /> Poser ma question
            </a>
          </div>
        </div>
        <div className="faq__list reveal" style={{ ["--d" as string]: "100ms" }}>
          {items.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqJsonLd({ items = faqData }: { items?: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

/* ---------- Bandeau CTA ---------- */

export function CtaBand() {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="cta-band reveal">
          <div className="cta-band__img">
            <Image src="/images/cayenne-coupe.jpg" alt="" fill sizes="100vw" />
          </div>
          <span className="eyebrow">Diagnostic offert</span>
          <h2 className="h2">
            Prêt à faire <span className="chrome">dunkaniser</span> votre voiture ?
          </h2>
          <p className="lead" style={{ color: "#d3d5db" }}>
            Envoyez-nous une photo de votre véhicule sur WhatsApp : on vous conseille la bonne prestation et on vous
            donne un prix, sans engagement.
          </p>
          <div className="hero__ctas">
            <a
              className="btn btn--wa"
              href={waLink("Bonjour Dunkan ! Je vous envoie une photo de mon véhicule pour un devis.")}
              target="_blank"
              rel="noopener"
            >
              <IconWhatsApp /> Envoyer une photo
            </a>
            <Link className="btn btn--ghost" href="/tarifs#devis">
              Estimer mon tarif
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

export function Contact() {
  const a = business.address;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(business.mapsQuery)}&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.mapsQuery)}`;
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Nous trouver</span>
          <h2 className="h2">
            L&apos;atelier, <span className="chrome">au cœur de Jarry.</span>
          </h2>
        </div>
        <div className="contact">
          <div className="contact__card reveal">
            <h3 className="h3">Parlons de votre véhicule</h3>
            <ul className="contact__list">
              <li>
                <a href={telLink}>
                  <span className="contact__ico">
                    <IconPhone />
                  </span>
                  <div>
                    <small>Téléphone</small>
                    <strong>{business.phone}</strong>
                  </div>
                </a>
              </li>
              <li>
                <a href={waLink("Bonjour Dunkan !")} target="_blank" rel="noopener">
                  <span className="contact__ico" style={{ color: "#4ade80", background: "rgba(74,222,128,.1)" }}>
                    <IconWhatsApp />
                  </span>
                  <div>
                    <small>WhatsApp</small>
                    <strong>Réponse rapide</strong>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${business.email}`}>
                  <span className="contact__ico">
                    <IconMail />
                  </span>
                  <div>
                    <small>E-mail</small>
                    <strong>{business.email}</strong>
                  </div>
                </a>
              </li>
              <li>
                <a href={mapsLink} target="_blank" rel="noopener">
                  <span className="contact__ico">
                    <IconPin />
                  </span>
                  <div>
                    <small>Adresse</small>
                    <strong>
                      {a.street}, {a.zip} {a.city}
                    </strong>
                  </div>
                </a>
              </li>
            </ul>
            <Hours />
          </div>
          <div className="map reveal" style={{ ["--d" as string]: "100ms" }}>
            <iframe
              src={mapSrc}
              title="Plan d'accès Dunkan Sublimateur Automobile, Jarry"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map__pin">
              <div>
                <strong>Dunkan Sublimateur Automobile</strong>
                <span>
                  {a.street} · {a.zip} {a.city}
                </span>
              </div>
              <a className="btn btn--primary btn--sm" href={mapsLink} target="_blank" rel="noopener">
                Itinéraire
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

export function Footer() {
  const a = business.address;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Image src="/images/logo-dunkan.png" alt="Dunkan Sublimateur Automobile" width={300} height={59} />
            <p>
              Centre d&apos;esthétique automobile expert en detailing, traitement céramique Hyperquartz® et film de
              protection, en Guadeloupe depuis {business.since}.
            </p>
            <div className="socials">
              <a href={business.instagram} target="_blank" rel="noopener" aria-label="Instagram">
                <IconInstagram />
              </a>
              <a href={business.facebook} target="_blank" rel="noopener" aria-label="Facebook">
                <IconFacebook />
              </a>
              <a href={waLink()} target="_blank" rel="noopener" aria-label="WhatsApp">
                <IconWhatsApp />
              </a>
            </div>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.short}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Dunkan</h4>
            <ul>
              <li>
                <Link href="/tarifs">Tarifs & packs</Link>
              </li>
              <li>
                <Link href="/tarifs#devis">Devis en ligne</Link>
              </li>
              <li>
                <Link href="/realisations">Réalisations</Link>
              </li>
              <li>
                <Link href="/#avis">Avis clients</Link>
              </li>
              <li>
                <Link href="/#faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={telLink}>{business.phone}</a>
              </li>
              <li>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </li>
              <li>
                <span className="muted">
                  {a.street}
                  <br />
                  {a.zip} {a.city}
                </span>
              </li>
              <li>
                <span className="muted">Lun–Jeu 8h30–16h · Ven 8h30–12h</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © {business.since}–{new Date().getFullYear()} {business.name}
          </span>
          <Link href="/mentions-legales">Mentions légales</Link>
        </div>
      </div>
    </footer>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-label="Quelques véhicules sublimés chez Dunkan">
      <div className="marquee__track">
        {row.map((m, i) => (
          <span key={i} aria-hidden={i >= items.length}>
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

