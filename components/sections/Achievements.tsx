"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/fx/SectionHeading";
import { SpotlightCard } from "@/components/fx/SpotlightCard";
import { Icon } from "@/components/fx/Icon";
import { achievements } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentColor = {
  iris: "99, 102, 241",
  cyber: "34, 211, 238",
  violet: "168, 85, 247",
  signal: "52, 211, 153",
} as const;

const accentText = {
  iris: "text-iris-light",
  cyber: "text-cyber-light",
  violet: "text-violet-light",
  signal: "text-signal",
} as const;

// bento layout: first card spans 2 columns on large screens
const span = ["lg:col-span-2", "", "", "", "lg:col-span-2"];

export function Achievements() {
  return (
    <section id="achievements" className="section">
      <SectionHeading
        eyebrow="Achievements"
        title={
          <>
            Milestones worth <span className="text-gradient">measuring</span>
          </>
        }
        description="National ranks, Inter-IIT podiums and a competitive-programming climb — earned against hundreds of thousands."
      />

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className={span[i] ?? ""}
          >
            <SpotlightCard color={accentColor[a.accent]} className="h-full">
              <div className="flex h-full items-start gap-4 p-6">
                <span
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110",
                    accentText[a.accent]
                  )}
                >
                  <Icon name={a.icon} className="size-6" />
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-base font-semibold text-white">
                      {a.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                    {a.detail}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className={cn("font-mono text-xs", accentText[a.accent])}>
                      {a.meta}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-white/20" />
                    <span className="font-mono text-xs text-white/35">{a.year}</span>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
