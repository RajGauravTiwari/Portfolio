"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/fx/SectionHeading";
import { Icon } from "@/components/fx/Icon";
import { skillGroups } from "@/lib/data";
import { cn } from "@/lib/utils";

const SEGMENTS = 10;

const accentBar = {
  iris: "from-iris to-iris-light shadow-[0_0_8px_rgba(99,102,241,0.6)]",
  cyber: "from-cyber-dark to-cyber shadow-[0_0_8px_rgba(34,211,238,0.5)]",
  violet: "from-violet to-violet-light shadow-[0_0_8px_rgba(168,85,247,0.5)]",
  signal: "from-emerald-500 to-signal shadow-[0_0_8px_rgba(52,211,153,0.5)]",
} as const;

const accentText = {
  iris: "text-iris-light",
  cyber: "text-cyber-light",
  violet: "text-violet-light",
  signal: "text-signal",
} as const;

function SegmentMeter({
  level,
  accent,
}: {
  level: number;
  accent: keyof typeof accentBar;
}) {
  const lit = Math.round((level / 100) * SEGMENTS);
  return (
    <div className="flex items-end gap-[3px]">
      {Array.from({ length: SEGMENTS }).map((_, i) => {
        const on = i < lit;
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, scaleY: 0.3 }}
            whileInView={{ opacity: on ? 1 : 0.18, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.035 }}
            style={{ height: `${8 + i * 1.4}px`, transformOrigin: "bottom" }}
            className={cn(
              "w-[6px] rounded-sm",
              on
                ? cn("bg-gradient-to-t", accentBar[accent])
                : "bg-white/10"
            )}
          />
        );
      })}
    </div>
  );
}

export function EngineeringDashboard() {
  return (
    <section id="stack" className="section">
      <SectionHeading
        eyebrow="Engineering Dashboard"
        title={
          <>
            The <span className="text-gradient">stack</span> I build with
          </>
        }
        description="A live readout of the languages, frameworks and systems powering everything on this page."
      />

      {/* summary tiles */}
      <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { k: "Languages", v: "5+" },
          { k: "ML & Data", v: "10+" },
          { k: "Frameworks", v: "8+" },
          { k: "Prod ML @ scale", v: "13.4M" },
        ].map((t, i) => (
          <motion.div
            key={t.k}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass rounded-xl px-4 py-5 text-center"
          >
            <div className="font-display text-2xl font-bold text-white">{t.v}</div>
            <div className="mt-1 text-xs text-white/45">{t.k}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: gi * 0.05 }}
            className="glass group rounded-2xl p-5 transition-colors hover:border-white/20"
          >
            <div className="flex items-center gap-2.5">
              <span
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10",
                  accentText[group.accent]
                )}
              >
                <Icon name={group.icon} className="size-5" />
              </span>
              <h3 className="font-display text-sm font-semibold text-white">
                {group.category}
              </h3>
            </div>

            <div className="mt-5 space-y-3.5">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between gap-3"
                >
                  <span className="text-xs text-white/65">{skill.name}</span>
                  <SegmentMeter level={skill.level} accent={group.accent} />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
