import Link from "next/link";

type WordmarkProps = {
  onDark?: boolean;
  className?: string;
};

/**
 * AlignArchitect wordmark. The mark is an aligner arch-form rendered as an
 * architect's measured curve — three nested arcs over a baseline tick,
 * reading as both a dental arch and a precision draughting symbol.
 */
export function Wordmark({ onDark = false, className = "" }: WordmarkProps) {
  const text = onDark ? "text-paper" : "text-ink";
  const sub = onDark ? "text-teal-300" : "text-teal-600";
  return (
    <Link
      href="/"
      aria-label="AlignArchitect home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden
        className="shrink-0 overflow-visible"
      >
        {/* baseline */}
        <line
          x1="3"
          y1="22"
          x2="25"
          y2="22"
          stroke="currentColor"
          strokeWidth="1.5"
          className={sub}
          strokeLinecap="round"
        />
        {/* nested arch curves */}
        <path
          d="M5 22 Q14 4 23 22"
          stroke="currentColor"
          strokeWidth="1.6"
          className={text}
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M8.5 22 Q14 10 19.5 22"
          stroke="currentColor"
          strokeWidth="1.4"
          className={sub}
          fill="none"
          strokeLinecap="round"
        />
        {/* apex tick */}
        <circle cx="14" cy="22" r="1.6" className={`fill-current ${sub}`} />
        <line
          x1="14"
          y1="22"
          x2="14"
          y2="6.5"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 2"
          className={`${sub} opacity-60`}
        />
      </svg>
      <span className={`font-display text-[1.05rem] font-semibold tracking-tight ${text}`}>
        Align<span className={sub}>Architect</span>
      </span>
    </Link>
  );
}
