"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { allItems, packs, type VehicleKey } from "@/data/site";

type Ctx = {
  vehicle: VehicleKey;
  setVehicle: (v: VehicleKey) => void;
  selected: string[];
  toggle: (id: string) => void;
  choosePack: (packId: string) => void;
  includedBy: (itemId: string) => string | null;
  lines: { id: string; label: string; price: number }[];
  total: number;
  reset: () => void;
};

const QuoteCtx = createContext<Ctx | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [vehicle, setVehicle] = useState<VehicleKey>("berline");
  const [selected, setSelected] = useState<string[]>([]);

  const selectedPacks = useMemo(
    () => packs.filter((p) => selected.includes(`pack:${p.id}`)),
    [selected]
  );

  const includedBy = useCallback(
    (itemId: string) => selectedPacks.find((p) => p.items.includes(itemId))?.name ?? null,
    [selectedPacks]
  );

  const toggle = useCallback((id: string) => {
    setSelected((cur) => {
      if (cur.includes(id)) return cur.filter((x) => x !== id);
      if (id.startsWith("pack:")) {
        const pack = packs.find((p) => `pack:${p.id}` === id);
        // Un pack remplace les prestations qu'il contient déjà
        return [...cur.filter((x) => !pack?.items.includes(x)), id];
      }
      return [...cur, id];
    });
  }, []);

  const choosePack = useCallback((packId: string) => {
    const id = `pack:${packId}`;
    setSelected((cur) => {
      if (cur.includes(id)) return cur;
      const pack = packs.find((p) => p.id === packId);
      return [...cur.filter((x) => !pack?.items.includes(x)), id];
    });
  }, []);

  const lines = useMemo(() => {
    const out: { id: string; label: string; price: number }[] = [];
    for (const id of selected) {
      if (id.startsWith("pack:")) {
        const p = packs.find((x) => `pack:${x.id}` === id);
        if (p) out.push({ id, label: `Pack ${p.name}`, price: p.price[vehicle] });
      } else {
        if (selectedPacks.some((p) => p.items.includes(id))) continue;
        const it = allItems.find((x) => x.id === id);
        if (it) out.push({ id, label: it.name, price: it.price[vehicle] });
      }
    }
    return out;
  }, [selected, selectedPacks, vehicle]);

  const total = lines.reduce((s, l) => s + l.price, 0);

  const value = useMemo<Ctx>(
    () => ({
      vehicle,
      setVehicle,
      selected,
      toggle,
      choosePack,
      includedBy,
      lines,
      total,
      reset: () => setSelected([]),
    }),
    [vehicle, selected, toggle, choosePack, includedBy, lines, total]
  );

  return <QuoteCtx.Provider value={value}>{children}</QuoteCtx.Provider>;
}

export function useQuote() {
  const ctx = useContext(QuoteCtx);
  if (!ctx) throw new Error("useQuote doit être utilisé dans <QuoteProvider>");
  return ctx;
}
