"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { HeroArchForm } from "@/components/graphics/HeroArchForm";
import { SITE } from "@/lib/content";
import { EASE } from "@/lib/motion";

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid mask-radial animate-grid-drift opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 size-[520px] rounded-full bg-teal/10 blur-[130px]"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* copy */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={item}>
              <Eyebrow>Aligner Treatment Planning</Eyebrow>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-display font-medium tracking-tight text-balance"
            >
              Engineered smiles,
              <br />
              <span className="text-graphite-400">planned with </span>
              <span className="relative whitespace-nowrap text-teal">
                precision
                <svg
                  aria-hidden
                  viewBox="0 0 300 12"
                  className="absolute -bottom-2 left-0 w-full"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2 8 Q 150 2 298 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, ease: EASE, delay: 0.9 }}
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-xl text-lede text-graphite-600"
            >
              The remote treatment-planning partner for dentists, dental labs, and aligner brands.
              Clinically-defensible setups, white-label manufacturing, plan QC, and remote restorative
              CAD/CAM — backed by {SITE.yearsExperience} years in digital dentistry.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="secondary" withArrow>
                Request a consult
              </Button>
              <Button href="/services" variant="ghost">
                Explore services
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-12 flex items-center gap-5 border-t border-line pt-6"
            >
              <span className="label-mono text-graphite-400">Collaborated with</span>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
                {SITE.partners.map((p) => (
                  <span key={p} className="font-display text-sm font-medium text-graphite-700">
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[480px]"
          >
            <HeroArchForm className="aspect-square" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
