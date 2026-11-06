"use client";

import Image from "next/image";
import { useState } from "react";
import { beforeAfter } from "@/data/site";

export default function BeforeAfter() {
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50);
  const item = beforeAfter[active];

  return (
    <div className="ba-wrap">
      <div
        className="ba reveal"
        style={{
          ["--pos" as string]: `${pos}%`,
          aspectRatio: `${item.w} / ${item.h}`,
          width: "100%",
          maxWidth: item.h > item.w ? 480 : undefined,
          marginInline: "auto",
        }}
      >
        <Image src={item.before} alt={`${item.title} — avant`} fill sizes="(max-width: 960px) 100vw, 60vw" />
        <Image className="ba__after" src={item.after} alt={`${item.title} — après`} fill sizes="(max-width: 960px) 100vw, 60vw" />
        <span className="ba__label ba__label--before">Avant</span>
        <span className="ba__label ba__label--after">Après</span>
        <div className="ba__handle" aria-hidden />
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Glisser pour comparer avant et après"
        />
      </div>

      <div className="reveal" style={{ ["--d" as string]: "120ms" }}>
        <span className="eyebrow">Avant / Après</span>
        <h2 className="h2">
          La preuve <span className="chrome">par l&apos;image.</span>
        </h2>
        <p className="lead">
          Faites glisser le curseur. Ce sont nos clients, nos véhicules, notre atelier de Jarry : aucune retouche.
        </p>
        <div className="ba-tabs" role="group" aria-label="Choisir une réalisation">
          {beforeAfter.map((b, i) => (
            <button
              key={b.id}
              className="ba-tab"
              aria-pressed={i === active}
              onClick={() => {
                setActive(i);
                setPos(50);
              }}
            >
              <Image src={b.after} alt="" width={64} height={48} />
              <div>
                <strong>{b.title}</strong>
                <span>{b.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
