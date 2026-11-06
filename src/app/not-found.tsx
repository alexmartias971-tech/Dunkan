import Link from "next/link";

export default function NotFound() {
  return (
    <section className="phero phero--plain" style={{ minHeight: "70vh", borderBottom: 0 }}>
      <div className="container">
        <span className="eyebrow">Erreur 404</span>
        <h1 className="h1">
          Page <span className="chrome">introuvable.</span>
        </h1>
        <p className="lead">Cette page a peut-être été déplacée. Revenez à l&apos;accueil ou consultez nos tarifs.</p>
        <div className="hero__ctas" style={{ marginTop: 32 }}>
          <Link href="/" className="btn btn--primary">
            Accueil
          </Link>
          <Link href="/tarifs" className="btn btn--ghost">
            Nos tarifs
          </Link>
        </div>
      </div>
    </section>
  );
}
