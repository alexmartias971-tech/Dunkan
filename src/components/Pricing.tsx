"use client";

import Link from "next/link";
import { carte, eur, packs, vehicles } from "@/data/site";
import { useQuote } from "./QuoteContext";
import { IconCheck, IconInfo } from "./Icons";

export function VehicleSwitch() {
  const { vehicle, setVehicle } = useQuote();
  return (
    <div className="seg" role="group" aria-label="Catégorie de véhicule">
      {vehicles.map((v) => (
        <button key={v.key} aria-pressed={vehicle === v.key} onClick={() => setVehicle(v.key)} title={v.hint}>
          {v.label}
        </button>
      ))}
    </div>
  );
}

export function Packs({ ctaHref = "#devis" }: { ctaHref?: string }) {
  const { vehicle, choosePack } = useQuote();
  return (
    <div className="packs">
      {packs.map((p, i) => (
        <article
          key={p.id}
          className={`pack reveal ${p.featured ? "pack--featured" : ""}`}
          style={{ ["--d" as string]: `${i * 80}ms` }}
        >
          {p.badge && <span className="pack__badge">{p.badge}</span>}
          <h3 className="pack__name">{p.name}</h3>
          <p className="pack__tagline">{p.tagline}</p>
          <div className="pack__price">
            <small>dès</small>
            <strong>{eur(p.price[vehicle])}</strong>
          </div>
          <div className="pack__meta">
            {p.meta.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
          <ul className="pack__list">
            {p.includes.map((inc) => (
              <li key={inc}>
                <IconCheck /> {inc}
              </li>
            ))}
          </ul>
          <Link
            href={ctaHref}
            className={`btn btn--block ${p.featured ? "btn--primary" : "btn--ghost"}`}
            onClick={() => choosePack(p.id)}
          >
            Choisir {p.name}
          </Link>
        </article>
      ))}
    </div>
  );
}

export function Carte({ groups }: { groups?: string[] }) {
  const { vehicle } = useQuote();
  const list = groups ? carte.filter((g) => groups.includes(g.id)) : carte;
  return (
    <div className="carte" style={list.length === 1 ? { gridTemplateColumns: "1fr" } : undefined}>
      {list.map((g) => (
        <div key={g.id} className="carte__group reveal">
          <h3>{g.title}</h3>
          {g.items.map((it) => (
            <div key={it.id} className="carte__row">
              <div>
                <strong>{it.name}</strong>
                <p>
                  {it.desc}
                  {it.duration ? ` · ${it.duration}` : ""}
                </p>
              </div>
              <b>
                <small>dès</small>
                {eur(it.price[vehicle])}
              </b>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function PriceNote() {
  return (
    <p className="price-note">
      <IconInfo />
      Prix TTC « à partir de », pour un véhicule en état d&apos;usage normal. Le tarif définitif est fixé après un
      diagnostic gratuit et sans engagement à l&apos;atelier.
    </p>
  );
}

export function ServicePrices({ groups, title }: { groups: string[]; title: string }) {
  const { vehicle } = useQuote();
  const list = carte.filter((g) => groups.includes(g.id));
  return (
    <div className="sticky-card reveal">
      <h3>{title}</h3>
      <p className="muted" style={{ margin: "0 0 14px", fontSize: 14 }}>
        Prix TTC « à partir de » selon votre véhicule.
      </p>
      <VehicleSwitch />
      <div style={{ marginTop: 10 }}>
        {list.flatMap((g) =>
          g.items.map((it) => (
            <div key={it.id} className="carte__row">
              <div>
                <strong>{it.name}</strong>
                <p>{it.duration ?? it.desc}</p>
              </div>
              <b>
                <small>dès</small>
                {eur(it.price[vehicle])}
              </b>
            </div>
          ))
        )}
      </div>
      <Link href="/tarifs#devis" className="btn btn--primary btn--block">
        Configurer mon devis
      </Link>
    </div>
  );
}
