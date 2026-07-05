"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// R3F is heavy + browser-only; load it lazily and never on the server.
const ParticleField = dynamic(() => import("./ParticleField"), {
  ssr: false,
  loading: () => null,
});

/**
 * Client wrapper for the hero particle field. Skips rendering on very small
 * screens and when the user prefers reduced motion (CSS gradients carry the
 * visual weight in those cases).
 */
export function HeroCanvas() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 640px)").matches;
    setEnabled(!reduced && wide);
  }, []);

  if (!enabled) return null;
  return (
    <div className="absolute inset-0 -z-10 opacity-70">
      <ParticleField />
    </div>
  );
}
