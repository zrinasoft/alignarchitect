"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { HERO, HERO_FACTS } from "@/lib/content";
import { EASE } from "@/lib/motion";

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

/**
 * Dark, full-bleed hero: a processed panoramic radiograph as the backdrop, a slow
 * teal "scan line" sweeping across it, and the verified fact strip anchored at
 * the bottom. Reduced motion: no zoom, no sweep.
 */
export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-black pt-16 text-paper">
      {/* radiograph backdrop */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10"
        initial={reduce ? false : { scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: EASE }}
      >
        <Image
          src="/images/xray-panoramic-dark.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_45%] opacity-80"
        />
      </motion.div>

      {/* legibility washes: left-to-right and bottom fade */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/80 to-black/20"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent"
      />
      <div
        aria-hidden
        className="absolute -left-40 top-1/3 -z-10 size-[520px] rounded-full bg-teal/15 blur-[140px]"
      />

      {/* scan line */}
      {!reduce && (
        <div aria-hidden className="pointer-events-none absolute inset-y-16 right-0 -z-10 w-full lg:w-3/5">
          <div className="animate-scan absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-300 to-transparent shadow-[0_0_24px_4px_rgba(15,181,186,0.45)]" />
        </div>
      )}

      <Container className="relative">
        <motion.div
          className="flex min-h-[calc(88svh-4rem)] max-w-2xl flex-col justify-center py-20 sm:py-28"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={item}>
            <Eyebrow onDark>{HERO.eyebrow}</Eyebrow>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-display font-medium tracking-tight text-balance"
          >
            {HERO.titleLead}
            <br />
            <span className="text-graphite-300">{HERO.titlePlain} </span>
            <span className="text-teal-300">{HERO.titleAccent}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-xl text-lede text-graphite-300">
            {HERO.lede}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="secondary" withArrow>
              Request a consult
            </Button>
            <Button
              href="/services"
              variant="ghost"
              className="border-white/30 !text-paper hover:!border-paper"
            >
              Explore services
            </Button>
          </motion.div>
        </motion.div>

        {/* fact strip */}
        <motion.dl
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
          className="grid grid-cols-2 border-t border-white/15 sm:grid-cols-4"
        >
          {HERO_FACTS.map((f, i) => (
            <div
              key={f.label}
              className={`flex flex-col gap-1.5 py-7 sm:px-6 ${
                i % 2 === 1 ? "pl-5 border-l border-white/15" : ""
              } ${i > 0 ? "sm:border-l sm:border-white/15" : "sm:pl-0"} ${
                i > 1 ? "border-t border-white/15 sm:border-t-0" : ""
              }`}
            >
              <dt className="order-2 text-xs uppercase tracking-[0.16em] text-graphite-400">
                {f.label}
              </dt>
              <dd className="order-1 font-display text-h3 font-medium tracking-tight text-paper">
                {f.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
