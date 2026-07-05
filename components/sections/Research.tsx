"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/fx/SectionHeading";
import { knowledgeNodes, knowledgeEdges } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentDot = {
  iris: "from-iris to-iris-light",
  cyber: "from-cyber-dark to-cyber",
  violet: "from-violet to-violet-light",
  signal: "from-emerald-500 to-signal",
} as const;

const accentStroke = {
  iris: "#6366f1",
  cyber: "#22d3ee",
  violet: "#a855f7",
  signal: "#34d399",
} as const;

export function Research() {
  const [active, setActive] = useState<string | null>(null);

  const nodeById = Object.fromEntries(knowledgeNodes.map((n) => [n.id, n]));
  const connected = (id: string) =>
    knowledgeEdges.some(
      ([a, b]) => (a === active && b === id) || (b === active && a === id)
    );

  return (
    <section id="research" className="section">
      <SectionHeading
        eyebrow="Research & Learning"
        title={
          <>
            A connected map of <span className="text-gradient">what I explore</span>
          </>
        }
        description="The domains I think about most — an interconnected graph from foundational ML to autonomous systems."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="glass relative mx-auto mt-14 aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-2xl sm:aspect-[16/9]"
      >
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

        {/* edges */}
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          {knowledgeEdges.map(([a, b], i) => {
            const na = nodeById[a];
            const nb = nodeById[b];
            if (!na || !nb) return null;
            const isActive = active === a || active === b;
            return (
              <motion.line
                key={`${a}-${b}`}
                x1={`${na.x}%`}
                y1={`${na.y}%`}
                x2={`${nb.x}%`}
                y2={`${nb.y}%`}
                stroke={isActive ? accentStroke[na.accent] : "rgba(255,255,255,0.12)"}
                strokeWidth={isActive ? 1.6 : 1}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + i * 0.05 }}
              />
            );
          })}
        </svg>

        {/* nodes */}
        {knowledgeNodes.map((node, i) => {
          const dim = active && active !== node.id && !connected(node.id);
          return (
            <motion.button
              key={node.id}
              onMouseEnter={() => setActive(node.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(node.id)}
              onBlur={() => setActive(null)}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.06,
                type: "spring",
                stiffness: 160,
                damping: 14,
              }}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              className={cn(
                "absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 transition-opacity duration-300",
                dim ? "opacity-30" : "opacity-100"
              )}
            >
              <span className="relative flex items-center justify-center">
                <span
                  className={cn(
                    "absolute rounded-full bg-gradient-to-br opacity-40 blur-md",
                    accentDot[node.accent]
                  )}
                  style={{
                    width: `${node.size * 2.4}rem`,
                    height: `${node.size * 2.4}rem`,
                  }}
                />
                <motion.span
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{
                    duration: 3 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={cn(
                    "relative rounded-full bg-gradient-to-br ring-1 ring-white/20",
                    accentDot[node.accent]
                  )}
                  style={{
                    width: `${node.size * 1.05}rem`,
                    height: `${node.size * 1.05}rem`,
                  }}
                />
              </span>
              <span className="whitespace-nowrap rounded-md bg-slate-950/60 px-2 py-0.5 text-[11px] font-medium text-white/80 backdrop-blur-sm sm:text-xs">
                {node.label}
              </span>
            </motion.button>
          );
        })}
      </motion.div>
    </section>
  );
}
