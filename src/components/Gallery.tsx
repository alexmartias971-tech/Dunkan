"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { gallery } from "@/data/site";
import { IconChevronL, IconChevronR, IconClose } from "./Icons";

export default function Gallery({ limit, preview = false }: { limit?: number; preview?: boolean }) {
  const items = limit ? gallery.slice(0, limit) : gallery;
  const [idx, setIdx] = useState<number | null>(null);

  const close = useCallback(() => setIdx(null), []);
  const move = useCallback(
    (d: number) => setIdx((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [idx, close, move]);

  return (
    <>
      <div className={preview ? "gallery gallery--preview" : "gallery"}>
        {items.map((g, i) => (
          <button key={g.src} onClick={() => setIdx(i)} aria-label={`Agrandir : ${g.alt}`}>
            <Image src={g.src} alt={g.alt} width={g.w} height={g.h} sizes="(max-width: 640px) 50vw, 25vw" />
          </button>
        ))}
      </div>

      {idx !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={items[idx].alt} onClick={close}>
          <Image
            src={items[idx].src}
            alt={items[idx].alt}
            width={items[idx].w}
            height={items[idx].h}
            sizes="100vw"
            onClick={(e) => e.stopPropagation()}
            priority
          />
          <button className="lightbox__btn lightbox__close" onClick={close} aria-label="Fermer">
            <IconClose />
          </button>
          <button
            className="lightbox__btn lightbox__prev"
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            aria-label="Photo précédente"
          >
            <IconChevronL />
          </button>
          <button
            className="lightbox__btn lightbox__next"
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            aria-label="Photo suivante"
          >
            <IconChevronR />
          </button>
          <span className="lightbox__count">
            {idx + 1} / {items.length}
          </span>
        </div>
      )}
    </>
  );
}
