"use client";

import { useMemo, useState } from "react";
import { business, carte, eur, packs, telLink, vehicles, waLink } from "@/data/site";
import { useQuote } from "./QuoteContext";
import { IconCheck, IconMail, IconPhone, IconWhatsApp } from "./Icons";

export default function QuoteBuilder() {
  const { vehicle, setVehicle, selected, toggle, includedBy, lines, total, reset } = useQuote();
  const [car, setCar] = useState({ brand: "", model: "", year: "" });
  const [who, setWho] = useState({ name: "", phone: "", message: "" });
  const [tab, setTab] = useState<string>("packs");

  const vLabel = vehicles.find((v) => v.key === vehicle)?.label ?? "";

  const message = useMemo(() => {
    const carTxt = [car.brand, car.model, car.year].filter(Boolean).join(" ");
    const out = [
      "Bonjour Dunkan 👋",
      "Je souhaite un devis :",
      `• Véhicule : ${carTxt ? `${carTxt} — ` : ""}${vLabel}`,
    ];
    if (lines.length) {
      out.push("• Prestations :");
      lines.forEach((l) => out.push(`   – ${l.label} (dès ${eur(l.price)})`));
      out.push(`• Estimation du site : dès ${eur(total)}`);
    } else {
      out.push("• Prestations : à définir ensemble");
    }
    if (who.name) out.push(`• Nom : ${who.name}`);
    if (who.phone) out.push(`• Téléphone : ${who.phone}`);
    if (who.message) out.push(`• Message : ${who.message}`);
    out.push("Merci !");
    return out.join("\n");
  }, [car, who, lines, total, vLabel]);

  const mailHref = `mailto:${business.email}?subject=${encodeURIComponent(
    "Demande de devis — site internet"
  )}&body=${encodeURIComponent(message)}`;

  const tabs = [{ id: "packs", title: "Packs" }, ...carte.map((g) => ({ id: g.id, title: g.title }))];

  return (
    <div className="quote reveal" id="configurateur">
      <div className="quote__form">
        {/* Étape 1 */}
        <div>
          <p className="quote__step-title">
            <span>1</span> Votre véhicule
          </p>
          <div className="opt-grid" role="radiogroup" aria-label="Catégorie de véhicule">
            {vehicles.map((v) => (
              <button
                key={v.key}
                className="opt"
                role="radio"
                aria-checked={vehicle === v.key}
                onClick={() => setVehicle(v.key)}
              >
                <strong>{v.label}</strong>
                <span>{v.hint}</span>
              </button>
            ))}
          </div>
          <div className="field-row field-row--3" style={{ marginTop: 10 }}>
            <div className="field">
              <label htmlFor="q-brand">Marque</label>
              <input id="q-brand" placeholder="Audi" value={car.brand} onChange={(e) => setCar({ ...car, brand: e.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="q-model">Modèle</label>
              <input id="q-model" placeholder="Q5 Sportback" value={car.model} onChange={(e) => setCar({ ...car, model: e.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="q-year">Année</label>
              <input id="q-year" inputMode="numeric" placeholder="2023" value={car.year} onChange={(e) => setCar({ ...car, year: e.target.value })} />
            </div>
          </div>
        </div>

        {/* Étape 2 */}
        <div>
          <p className="quote__step-title">
            <span>2</span> Vos prestations
          </p>
          <div className="seg seg--tabs" role="tablist" aria-label="Familles de prestations" style={{ marginBottom: 14 }}>
            {tabs.map((t) => (
              <button key={t.id} role="tab" aria-selected={tab === t.id} aria-pressed={tab === t.id} onClick={() => setTab(t.id)}>
                {t.title.replace("Traitement ", "").replace("Film de protection ", "")}
              </button>
            ))}
          </div>

          <div className="opt-grid opt-grid--2">
            {tab === "packs"
              ? packs.map((p) => {
                  const id = `pack:${p.id}`;
                  return (
                    <button key={id} className="opt" aria-pressed={selected.includes(id)} onClick={() => toggle(id)}>
                      <strong>Pack {p.name}</strong>
                      <span>{p.meta.join(" · ")}</span>
                      <em>dès {eur(p.price[vehicle])}</em>
                    </button>
                  );
                })
              : carte
                  .find((g) => g.id === tab)
                  ?.items.map((it) => {
                    const inc = includedBy(it.id);
                    return (
                      <button
                        key={it.id}
                        className="opt"
                        aria-pressed={selected.includes(it.id) || !!inc}
                        disabled={!!inc}
                        style={inc ? { opacity: 0.6, cursor: "default" } : undefined}
                        onClick={() => toggle(it.id)}
                      >
                        <strong>{it.name}</strong>
                        <span>{inc ? `Inclus dans le pack ${inc}` : it.desc}</span>
                        <em>{inc ? "Inclus" : `dès ${eur(it.price[vehicle])}`}</em>
                      </button>
                    );
                  })}
          </div>
        </div>

        {lines.length > 0 && (
          <p className="quote__inline-total">
            <span>
              {lines.length} prestation{lines.length > 1 ? "s" : ""} · <b>dès {eur(total)}</b>
            </span>
            <a href="#recap">Voir le récap ↓</a>
          </p>
        )}

        {/* Étape 3 */}
        <div>
          <p className="quote__step-title">
            <span>3</span> Vos coordonnées
          </p>
          <div className="field-row">
            <div className="field">
              <label htmlFor="q-name">Nom, prénom</label>
              <input id="q-name" autoComplete="name" value={who.name} onChange={(e) => setWho({ ...who, name: e.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="q-phone">Téléphone</label>
              <input id="q-phone" type="tel" autoComplete="tel" placeholder="0690 …" value={who.phone} onChange={(e) => setWho({ ...who, phone: e.target.value })} />
            </div>
          </div>
          <div className="field" style={{ marginTop: 10 }}>
            <label htmlFor="q-msg">Votre besoin (optionnel)</label>
            <textarea
              id="q-msg"
              placeholder="Ex. véhicule neuf livré le mois prochain, rayures sur la portière…"
              value={who.message}
              onChange={(e) => setWho({ ...who, message: e.target.value })}
            />
          </div>
        </div>
      </div>

      <aside className="quote__summary" id="recap" aria-live="polite">
        <h3>Votre estimation</h3>
        <ul className="quote__lines">
          <li>
            <span>Véhicule</span>
            <span>{vLabel}</span>
          </li>
          {lines.length === 0 && <li className="quote__empty">Sélectionnez un pack ou des prestations.</li>}
          {lines.length === 0 && (
            <li style={{ border: 0, padding: 0, display: "block" }}>
              <ul className="quote__perks">
                <li>
                  <IconCheck /> Diagnostic gratuit à l&apos;atelier
                </li>
                <li>
                  <IconCheck /> Devis sans engagement
                </li>
                <li>
                  <IconCheck /> Réponse rapide sur WhatsApp
                </li>
                <li>
                  <IconCheck /> Garanties écrites jusqu&apos;à 10 ans
                </li>
              </ul>
            </li>
          )}
          {lines.map((l) => (
            <li key={l.id}>
              <span>{l.label}</span>
              <span>dès {eur(l.price)}</span>
            </li>
          ))}
        </ul>
        <div className="quote__total">
          <span>Total estimé</span>
          {total ? <strong>dès {eur(total)}</strong> : <em>À composer</em>}
        </div>
        <p className="quote__fine">
          Estimation indicative TTC. Prix final confirmé après diagnostic gratuit. Réponse rapide sur WhatsApp aux
          heures d&apos;ouverture.
        </p>
        <div className="quote__actions">
          <a className="btn btn--wa btn--block" href={waLink(message)} target="_blank" rel="noopener">
            <IconWhatsApp /> Envoyer ma demande sur WhatsApp
          </a>
          <a className="btn btn--ghost btn--block" href={mailHref}>
            <IconMail /> Envoyer par e-mail
          </a>
          <a className="btn btn--ghost btn--block" href={telLink}>
            <IconPhone /> {business.phone}
          </a>
          {lines.length > 0 && (
            <button className="btn btn--ghost btn--sm" style={{ justifySelf: "center", border: 0, background: "none" }} onClick={reset}>
              Réinitialiser
            </button>
          )}
        </div>
      </aside>
    </div>
  );
}
