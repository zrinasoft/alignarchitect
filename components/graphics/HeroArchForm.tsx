"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE } from "@/lib/motion";

/**
 * Signature hero graphic: a dental / architectural arch-form drawn over a
 * precision grid, with staged tooth segments, attachment nodes, measurement
 * annotations and a scanning sweep. Lines self-draw on mount.
 */
export function HeroArchForm({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  const drawProps = (delay: number, duration = 1.6) =>
    reduce
      ? { initial: { pathLength: 1, opacity: 1 } }
      : {
          initial: { pathLength: 0, opacity: 0.2 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { pathLength: { duration, ease: EASE, delay }, opacity: { duration: 0.3, delay } },
        };

  const popProps = (delay: number) =>
    reduce
      ? { initial: { scale: 1, opacity: 1 } }
      : {
          initial: { scale: 0, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: { duration: 0.5, ease: EASE, delay },
        };

  // Tooth-segment ticks distributed along the arch.
  const segments = Array.from({ length: 13 });

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 480 480"
        fill="none"
        role="img"
        aria-label="Animated diagram of a dental arch with staged treatment planning annotations"
        className="h-full w-full overflow-visible"
      >
        <defs>
          <linearGradient id="archGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" style={{ stopColor: "var(--color-teal)" }} />
            <stop offset="100%" style={{ stopColor: "var(--color-teal-700)" }} />
          </linearGradient>
          <linearGradient id="sweepGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" style={{ stopColor: "var(--color-teal)", stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: "var(--color-teal)", stopOpacity: 0.55 }} />
            <stop offset="100%" style={{ stopColor: "var(--color-teal)", stopOpacity: 0 }} />
          </linearGradient>
          <clipPath id="frameClip">
            <rect x="20" y="20" width="440" height="440" rx="18" />
          </clipPath>
        </defs>

        {/* frame */}
        <rect
          x="20"
          y="20"
          width="440"
          height="440"
          rx="18"
          className="fill-paper-raised stroke-line"
          strokeWidth="1"
        />

        <g clipPath="url(#frameClip)">
          {/* precision grid */}
          <g className="stroke-graphite-200" strokeWidth="1">
            {Array.from({ length: 11 }).map((_, i) => (
              <line key={`v${i}`} x1={20 + i * 44} y1="20" x2={20 + i * 44} y2="460" />
            ))}
            {Array.from({ length: 11 }).map((_, i) => (
              <line key={`h${i}`} x1="20" y1={20 + i * 44} x2="460" y2={20 + i * 44} />
            ))}
          </g>

          {/* corner registration crosshairs */}
          {[
            [60, 60],
            [420, 60],
            [60, 420],
            [420, 420],
          ].map(([x, y], i) => (
            <g key={i} className="stroke-graphite-400" strokeWidth="1.2">
              <line x1={x - 7} y1={y} x2={x + 7} y2={y} />
              <line x1={x} y1={y - 7} x2={x} y2={y + 7} />
            </g>
          ))}

          {/* ghost (target) arch — drawn first, behind */}
          <motion.path
            d="M96 372 C 96 150, 384 150, 384 372"
            className="stroke-graphite-300"
            strokeWidth="1.4"
            strokeDasharray="4 5"
            fill="none"
            {...drawProps(0.1, 1.4)}
          />

          {/* primary arch band */}
          <motion.path
            d="M120 372 C 120 188, 360 188, 360 372"
            stroke="url(#archGrad)"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
            {...drawProps(0.45)}
          />
          <motion.path
            d="M150 372 C 150 232, 330 232, 330 372"
            className="stroke-teal-300"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
            {...drawProps(0.7, 1.4)}
          />

          {/* tooth-segment ticks across the band */}
          {segments.map((_, i) => {
            const t = i / (segments.length - 1);
            // approximate point + normal on the primary cubic
            const x = 120 + t * 240;
            const y = 372 - Math.sin(Math.PI * t) * 150;
            return (
              <motion.line
                key={i}
                x1={x}
                y1={y - 9}
                x2={x}
                y2={y + 9}
                className="stroke-graphite-500"
                strokeWidth="1.2"
                strokeLinecap="round"
                initial={reduce ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 + i * 0.04, duration: 0.3 }}
              />
            );
          })}

          {/* attachment nodes */}
          {[
            [180, 250],
            [240, 224],
            [300, 250],
          ].map(([x, y], i) => (
            <motion.g key={i} {...popProps(1.5 + i * 0.18)}>
              <circle cx={x} cy={y} r="9" className="fill-teal/15" />
              <circle cx={x} cy={y} r="4" className="fill-teal" />
            </motion.g>
          ))}

          {/* measurement annotation */}
          <motion.g
            initial={reduce ? { opacity: 1 } : { opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <line x1="360" y1="372" x2="404" y2="372" className="stroke-graphite-400" strokeWidth="1" />
            <line x1="404" y1="300" x2="404" y2="372" className="stroke-graphite-400" strokeWidth="1" strokeDasharray="3 3" />
            <text x="408" y="320" className="fill-graphite-500 font-mono" fontSize="11" letterSpacing="1">
              +2.1mm
            </text>
          </motion.g>
          <motion.text
            x="240"
            y="404"
            textAnchor="middle"
            className="fill-graphite-500 font-mono"
            fontSize="11"
            letterSpacing="2"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.5 }}
          >
            STAGE 14 / 22
          </motion.text>

          {/* scanning sweep */}
          {!reduce && (
            <motion.rect
              x="20"
              width="440"
              height="46"
              fill="url(#sweepGrad)"
              initial={{ y: 20 }}
              animate={{ y: [20, 414, 20] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.5, delay: 2.4 }}
            />
          )}
        </g>

        {/* spec label tab */}
        <g>
          <rect x="20" y="-2" width="148" height="26" rx="4" className="fill-ink" />
          <text x="32" y="15" className="fill-paper font-mono" fontSize="10" letterSpacing="2">
            ARCH-FORM / OCCLUSAL
          </text>
        </g>
      </svg>
    </div>
  );
}
