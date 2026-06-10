"use client";

import { useRef } from "react";
import { motion, useScroll, useInView, useReducedMotion } from "motion/react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { WORKFLOW } from "@/lib/content";

export function WorkflowTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 60%"],
  });

  return (
    <div ref={ref} className="relative">
      {/* base rail */}
      <span
        aria-hidden
        className="absolute left-[27px] top-4 bottom-4 w-px bg-line sm:left-[31px]"
      />
      {/* teal progress rail — fills as you scroll the steps */}
      <motion.span
        aria-hidden
        style={{ scaleY: reduce ? 1 : scrollYProgress }}
        className="absolute left-[27px] top-4 bottom-4 w-px origin-top bg-teal sm:left-[31px]"
      />

      <RevealGroup className="space-y-12 sm:space-y-16" staggerChildren={0.12}>
        {WORKFLOW.map((step) => (
          <RevealItem key={step.step}>
            <div className="relative grid gap-6 pl-20 sm:grid-cols-[1fr_auto] sm:gap-12 sm:pl-24">
              <TimelineNode label={step.step} />

              <div className="max-w-xl">
                <h2 className="font-display text-h3 font-medium tracking-tight text-ink">
                  {step.title}
                </h2>
                <p className="mt-3 text-graphite-600 leading-relaxed">{step.description}</p>
              </div>

              <div className="sm:w-56 sm:shrink-0">
                <Eyebrow>Outputs</Eyebrow>
                <ul className="mt-4 space-y-2">
                  {step.outputs.map((o) => (
                    <li key={o} className="flex items-center gap-2.5 text-sm text-graphite-700">
                      <span className="size-1.5 rounded-full bg-teal" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}

/** Step node that lights up teal as it reaches the centre of the viewport. */
function TimelineNode({ label }: { label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const active = useInView(ref, { margin: "-55% 0px -42% 0px" });
  return (
    <span
      ref={ref}
      className={`absolute left-0 top-0 flex size-14 items-center justify-center rounded-full border font-display text-lg font-medium shadow-soft transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:size-16 ${
        active
          ? "scale-105 border-teal bg-teal text-white shadow-glow"
          : "border-line bg-paper-raised text-teal-600"
      }`}
    >
      {label}
    </span>
  );
}
