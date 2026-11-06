"use client";

import { useEffect, useState } from "react";
import { business } from "@/data/site";

const fmt = (h: number) => {
  const hh = Math.floor(h);
  const mm = Math.round((h - hh) * 60);
  return `${hh}h${mm ? String(mm).padStart(2, "0") : "00"}`;
};

/** Heure actuelle en Guadeloupe (UTC−4, pas d'heure d'été) */
function nowInGuadeloupe() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Guadeloupe",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(new Date());
  const wd = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const h = Number(parts.find((p) => p.type === "hour")?.value ?? 0) % 24;
  const m = Number(parts.find((p) => p.type === "minute")?.value ?? 0);
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(wd);
  return { day, time: h + m / 60 };
}

export default function Hours() {
  const [state, setState] = useState<{ day: number; open: boolean } | null>(null);

  useEffect(() => {
    const tick = () => {
      const { day, time } = nowInGuadeloupe();
      const today = business.hours.find((h) => h.day === day);
      const open = !!today && today.open !== null && today.close !== null && time >= today.open && time < today.close;
      setState({ day, open });
    };
    tick();
    const t = setInterval(tick, 60_000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="hours">
      <div className="hours__head">
        <span>Horaires d&apos;ouverture</span>
        {state && (
          <span className={`open-pill ${state.open ? "is-open" : ""}`}>
            {state.open ? "Ouvert maintenant" : "Fermé actuellement"}
          </span>
        )}
      </div>
      <table>
        <tbody>
          {business.hours.map((h) => (
            <tr key={h.day} className={state?.day === h.day ? "is-today" : undefined}>
              <td>{h.label}</td>
              <td>{h.open !== null && h.close !== null ? `${fmt(h.open)} – ${fmt(h.close)}` : "Fermé"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
