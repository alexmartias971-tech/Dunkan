"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { telLink, waLink } from "@/data/site";
import { IconCalendar, IconPhone, IconWhatsApp } from "./Icons";

const WA_DEFAULT = "Bonjour Dunkan, je souhaite des informations pour mon véhicule.";

/** Barre d'actions mobile + bouton WhatsApp flottant + animations d'apparition */
export default function Chrome() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 380);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Apparition au scroll des éléments .reveal
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <>
      <a
        className="fab-wa"
        href={waLink(WA_DEFAULT)}
        target="_blank"
        rel="noopener"
        aria-label="Écrire à Dunkan sur WhatsApp"
      >
        <IconWhatsApp />
      </a>

      <nav className={`mbar ${visible ? "is-visible" : ""}`} aria-label="Actions rapides">
        <a href={telLink}>
          <IconPhone /> Appeler
        </a>
        <a className="mbar__wa" href={waLink(WA_DEFAULT)} target="_blank" rel="noopener">
          <IconWhatsApp /> WhatsApp
        </a>
        <Link className="mbar__main" href="/tarifs#devis">
          <IconCalendar /> Mon devis
        </Link>
      </nav>
    </>
  );
}
