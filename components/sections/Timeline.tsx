"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SectionHeading } from "@/components/fx/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { timeline } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentMap = {
  iris: { dot: "bg-iris", ring: "shadow-[0_0_0_4px_rgba(99,102,241,0.15)]", text: "text-iris-light" },
  cyber: { dot: "bg-cyber", ring: "shadow-[0_0_0_4px_rgba(34,211,238,0.15)]", text: "text-cyber-light" },
  violet: { dot: "bg-violet", ring: "shadow-[0_0_0_4px_rgba(168,85,247,0.15)]", text: "text-violet-light" },
  signal: { dot: "bg-signal", ring: "shadow-[0_0_0_4px_rgba(52,211,153,0.15)]", text: "text-signal" },
} as const;

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 55%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="journey" className="section">
      <SectionHeading
        eyebrow="The Journey"
        title={
          <>
            From first principles to <span className="text-gradient">production scale</span>
          </>
        }
        description="A five-year arc from IIT Guwahati foundations to shipping ML that scores millions of tenants at Microsoft."
      />

      <div ref={containerRef} className="relative mx-auto mt-16 max-w-4xl">
        {/* Rail */}
        <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2">
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="h-full w-full bg-gradient-to-b from-iris via-violet to-cyber"
          />
        </div>

        <div className="space-y-12">
          {timeline.map((node, i) => {
            const accent = accentMap[node.accent];
            const left = i % 2 === 0;
            return (
              <div
                key={node.id}
                className={cn(
                  "relative flex items-start gap-6 md:gap-0",
                  left ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Node dot */}
                <div className="absolute left-4 top-2 z-10 -translate-x-1/2 md:left-1/2">
                  <span
                    className={cn(
                      "block h-3.5 w-3.5 rounded-full ring-2 ring-background",
                      accent.dot,
                      accent.ring
                    )}
                  />
                </div>

                {/* Spacer for the opposite column on desktop */}
                <div className="hidden md:block md:w-1/2" />

                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "ml-10 w-full md:ml-0 md:w-1/2",
                    left ? "md:pr-10 md:text-right" : "md:pl-10"
                  )}
                >
                  <div className="glass rounded-2xl p-5 transition-colors hover:border-white/20">
                    <span className={cn("font-mono text-xs", accent.text)}>
                      {node.period}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-semibold text-white">
                      {node.title}
                    </h3>
                    <p className="text-sm text-white/50">{node.org}</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">
                      {node.summary}
                    </p>
                    <ul
                      className={cn(
                        "mt-3 space-y-1.5",
                        left && "md:text-right"
                      )}
                    >
                      {node.points.map((p) => (
                        <li key={p} className="text-xs leading-relaxed text-white/50">
                          {p}
                        </li>
                      ))}
                    </ul>
                    <div
                      className={cn(
                        "mt-4 flex flex-wrap gap-1.5",
                        left && "md:justify-end"
                      )}
                    >
                      {node.tags.map((t) => (
                        <Badge key={t} variant={node.accent}>
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
