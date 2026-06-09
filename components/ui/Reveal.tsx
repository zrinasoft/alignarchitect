"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { fadeRise, fadeRiseSm, stagger, inView } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Smaller travel distance for dense items. */
  small?: boolean;
  /** Delay before this element animates in (seconds). */
  delay?: number;
  as?: "div" | "section" | "li" | "span" | "article" | "header";
};

/** Single element that fades + rises into view on scroll. */
export function Reveal({ children, className, small, delay = 0, as = "div" }: RevealProps) {
  const MotionTag = motion[as];
  const variant = small ? fadeRiseSm : fadeRise;
  return (
    <MotionTag
      className={className}
      variants={variant}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  as?: "div" | "section" | "ul" | "ol";
};

/** Parent that staggers the reveal of <RevealItem> children. */
export function RevealGroup({
  children,
  className,
  delayChildren = 0,
  staggerChildren = 0.08,
  as = "div",
}: RevealGroupProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={stagger(delayChildren, staggerChildren)}
      initial="hidden"
      whileInView="show"
      viewport={inView}
    >
      {children}
    </MotionTag>
  );
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  small?: boolean;
  as?: "div" | "li" | "article" | "span";
};

/** Child of <RevealGroup> — inherits stagger timing. */
export function RevealItem({ children, className, small, as = "div" }: RevealItemProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag className={className} variants={small ? fadeRiseSm : fadeRise}>
      {children}
    </MotionTag>
  );
}
