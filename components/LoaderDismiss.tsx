"use client";

import { useEffect } from "react";

/**
 * Hides <PageLoader> as soon as React hydrates (the moment content can animate
 * in). A small minimum keeps the loader from flashing on fast loads. The inline
 * fallback script in PageLoader covers the case where this never runs.
 */
export function LoaderDismiss() {
  useEffect(() => {
    const hide = () => {
      const w = window as unknown as { __aaHideLoader?: () => void };
      if (typeof w.__aaHideLoader === "function") w.__aaHideLoader();
      else document.getElementById("aa-loader")?.classList.add("aa-hide");
    };
    const t = setTimeout(hide, 350);
    return () => clearTimeout(t);
  }, []);

  return null;
}
