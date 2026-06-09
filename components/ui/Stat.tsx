"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

type StatProps = {
  value: string;
  suffix?: string;
  label: string;
};

/**
 * Animated stat. If `value` is numeric it counts up on first view; if it's a
 * {{placeholder}} token (or any non-numeric string) it renders verbatim.
 */
export function Stat({ value, suffix, label }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();

  const numeric = Number(value);
  const isNumeric = value.trim() !== "" && !Number.isNaN(numeric);

  const [display, setDisplay] = useState(isNumeric && !reduce ? 0 : numeric);

  useEffect(() => {
    if (!isNumeric || !inView || reduce) return;
    const duration = 1200;
    let raf = 0;
    let start: number | null = null;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      // ease-out-expo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setDisplay(Math.round(eased * numeric));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, isNumeric, numeric, reduce]);

  return (
    <div ref={ref}>
      <div className="font-display text-h2 font-medium leading-none tracking-tight tabular-nums">
        {isNumeric ? display : value}
        {suffix && <span className="text-teal">{suffix}</span>}
      </div>
      <p className="mt-3 text-sm leading-snug text-graphite-500 max-w-[22ch]">{label}</p>
    </div>
  );
}
