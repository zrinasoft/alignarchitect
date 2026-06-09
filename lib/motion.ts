import type { Variants, Transition } from "motion/react";

/** Shared easing — matches the CSS --ease-out-expo token. */
export const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

/** Fade + rise, used for nearly all scroll reveals. */
export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

/** Smaller rise for tightly-packed items. */
export const fadeRiseSm: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

/** Container that staggers its children's reveal. */
export const stagger = (delayChildren = 0, staggerChildren = 0.08): Variants => ({
  hidden: {},
  show: {
    transition: { delayChildren, staggerChildren },
  },
});

/** Default viewport config for whileInView. */
export const inView = { once: true, margin: "0px 0px -12% 0px" } as const;
