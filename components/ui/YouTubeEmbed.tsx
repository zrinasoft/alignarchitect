"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

type YouTubeEmbedProps = {
  /** YouTube video ID, e.g. "eh6nQJT2Cmo". */
  id: string;
  /** Accessible title for the player and play button. */
  title: string;
  className?: string;
  sizes?: string;
};

/**
 * Click-to-load YouTube player. Renders only a thumbnail + play button until
 * the visitor clicks, then swaps in the privacy-enhanced (youtube-nocookie)
 * iframe. Keeps the page light and avoids YouTube cookies until playback.
 */
export function YouTubeEmbed({
  id,
  title,
  className = "",
  sizes = "(min-width: 640px) 50vw, 100vw",
}: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-xl border border-line bg-ink shadow-soft ${className}`}
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 size-full cursor-pointer"
        >
          <Image
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt=""
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-ink/25 transition-colors duration-300 group-hover:bg-ink/10"
          />
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-teal text-white shadow-glow transition-transform duration-300 group-hover:scale-110"
          >
            <Play className="size-6 translate-x-0.5 fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}
