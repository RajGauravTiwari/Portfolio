"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/fx/SectionHeading";
import { Icon } from "@/components/fx/Icon";
import { AnimatedCounter } from "@/components/fx/AnimatedCounter";
import { leadership } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentText = {
  iris: "text-iris-light",
  cyber: "text-cyber-light",
  violet: "text-violet-light",
  signal: "text-signal",
} as const;

// parse metric strings like "50+", "100%", "15", "All" into a counter config
function parseMetric(value: string) {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return { numeric: null as number | null, suffix: value, prefix: "" };
  return { numeric: parseFloat(match[1]), suffix: match[2], prefix: "" };
}

export function Leadership() {
  return (
    <section id="leadership" className="section">
      <SectionHeading
        eyebrow="Leadership"
        title={
          <>
            Leading teams & <span className="text-gradient">shipping together</span>
          </>
        }
        description="Owning operations across the Technical Board and heading UAV projects — leadership measured in impact, not titles."
      />

      <div className="mt-16 grid gap-4 md:grid-cols-2">
        {leadership.map((role, i) => (
          <motion.div
            key={role.role}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass relative overflow-hidden rounded-2xl p-7"
          >
            <div
              className={cn(
                "pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full blur-3xl",
                role.accent === "iris" ? "bg-iris/15" : "bg-violet/15"
              )}
            />
            <div className="relative flex items-center gap-3">
              <span
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10",
                  accentText[role.accent]
                )}
              >
                <Icon name={role.icon} className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {role.role}
                </h3>
                <p className="text-xs text-white/50">{role.org}</p>
              </div>
            </div>

            <p className="relative mt-2 font-mono text-xs text-white/40">
              {role.period}
            </p>
            <p className="relative mt-3 text-sm leading-relaxed text-white/60">
              {role.summary}
            </p>

            <div className="relative mt-6 grid grid-cols-3 gap-3">
              {role.metrics.map((m) => {
                const { numeric, suffix } = parseMetric(m.value);
                return (
                  <div
                    key={m.label}
                    className="rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center"
                  >
                    <div className="font-display text-xl font-bold text-white">
                      {numeric !== null ? (
                        <AnimatedCounter value={numeric} suffix={suffix} />
                      ) : (
                        m.value
                      )}
                    </div>
                    <div className="mt-0.5 text-[10px] leading-tight text-white/40">
                      {m.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
