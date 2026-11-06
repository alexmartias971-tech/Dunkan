"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { business, telLink, waLink } from "@/data/site";
import { IconPhone, IconWhatsApp } from "./Icons";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/#avis", label: "Avis" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className={`header ${scrolled || open ? "is-scrolled" : ""}`}>
        <div className="container header__inner">
          <Link href="/" className="header__logo" aria-label="Dunkan Sublimateur Automobile — accueil">
            <Image src="/images/logo-dunkan.png" alt="Dunkan Sublimateur Automobile" width={300} height={59} priority />
          </Link>

          <nav className="nav" aria-label="Navigation principale">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} aria-current={pathname === n.href ? "page" : undefined}>
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="header__actions">
            <a href={telLink} className="header__phone">
              <IconPhone /> {business.phone}
            </a>
            <Link href="/tarifs#devis" className="btn btn--primary btn--sm">
              Devis gratuit
            </Link>
            <button
              className="burger"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        {nav.map((n) => (
          <Link key={n.href} href={n.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            {n.label} <span>→</span>
          </Link>
        ))}
        <a
          href={waLink("Bonjour Dunkan, je souhaite un devis pour mon véhicule.")}
          className="btn btn--wa btn--block"
          target="_blank"
          rel="noopener"
          tabIndex={open ? 0 : -1}
        >
          <IconWhatsApp /> Écrire sur WhatsApp
        </a>
        <a href={telLink} className="btn btn--ghost btn--block" tabIndex={open ? 0 : -1}>
          <IconPhone /> {business.phone}
        </a>
      </div>
    </>
  );
}
