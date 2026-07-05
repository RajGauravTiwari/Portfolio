"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { SectionHeading } from "@/components/fx/SectionHeading";
import { AnimatedCounter } from "@/components/fx/AnimatedCounter";
import { Icon } from "@/components/fx/Icon";
import { Badge } from "@/components/ui/badge";
import { microsoft } from "@/lib/data";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function MicrosoftShowcase() {
  return (
    <section
      id="microsoft"
      className="relative overflow-hidden border-y border-white/5 bg-gradient-to-b from-slate-950 via-[#080a16] to-slate-950 py-24 sm:py-32"
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-iris/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyber/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-iris/20 bg-iris/5 px-4 py-1.5"
          >
            <span className="flex h-4 w-4 items-center justify-center">
              <svg viewBox="0 0 23 23" className="h-4 w-4">
                <path fill="#f25022" d="M1 1h10v10H1z" />
                <path fill="#7fba00" d="M12 1h10v10H12z" />
                <path fill="#00a4ef" d="M1 12h10v10H1z" />
                <path fill="#ffb900" d="M12 12h10v10H12z" />
              </svg>
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/60">
              {microsoft.eyebrow}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            {microsoft.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-2xl text-balance text-lg text-white/60"
          >
            {microsoft.subtitle}
          </motion.p>
        </div>

        {/* Problem / Solution intro */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {[microsoft.problem, microsoft.solution].map((block, i) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="glass relative overflow-hidden rounded-2xl p-7"
            >
              <span
                className={cn(
                  "font-mono text-xs uppercase tracking-[0.2em]",
                  i === 0 ? "text-rose-300/80" : "text-signal"
                )}
              >
                {i === 0 ? "01 · Problem" : "02 · Solution"}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-white">
                {block.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {block.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Architecture visualization */}
        <div className="mt-8">
          <ArchitectureDiagram />
        </div>

        {/* Pipeline */}
        <div className="mt-20">
          <h3 className="text-center font-display text-sm font-medium uppercase tracking-[0.25em] text-white/40">
            End-to-end pipeline
          </h3>
          <div className="mt-8 grid gap-3 md:grid-cols-5">
            {microsoft.pipeline.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative"
              >
                <div className="glass h-full rounded-xl p-4 transition-colors hover:border-white/20">
                  <div className="flex items-center justify-between">
                    <Icon name={step.icon} className="size-5 text-iris-light" />
                    <span className="font-mono text-xs text-white/30">
                      {step.step}
                    </span>
                  </div>
                  <h4 className="mt-3 text-sm font-semibold text-white">
                    {step.name}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-white/45">
                    {step.desc}
                  </p>
                </div>
                {i < microsoft.pipeline.length - 1 && (
                  <ArrowRight className="absolute -right-2.5 top-1/2 hidden size-4 -translate-y-1/2 text-white/20 md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Metrics + SHAP */}
        <div className="mt-20 grid gap-8 lg:grid-cols-5">
          {/* metrics */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-medium uppercase tracking-[0.25em] text-white/40">
              Results
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {microsoft.metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="glass rounded-xl p-4"
                >
                  <div className="font-display text-2xl font-bold text-white">
                    <AnimatedCounter
                      value={m.value}
                      decimals={m.decimals}
                      suffix={m.suffix}
                    />
                  </div>
                  <div className="mt-1 text-xs font-medium text-white/70">
                    {m.label}
                  </div>
                  <div className="text-[11px] text-white/35">{m.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SHAP viz */}
          <div className="lg:col-span-3">
            <ShapChart />
          </div>
        </div>

        {/* stack */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
          {microsoft.stack.map((s) => (
            <Badge key={s} variant="outline" className="text-white/60">
              {s}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Architecture diagram --------------------------- */

function ArchitectureDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease }}
      className="glass relative mt-8 overflow-hidden rounded-2xl p-6 sm:p-10"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <h3 className="relative text-center font-display text-sm font-medium uppercase tracking-[0.25em] text-white/40">
        Dual-detector architecture
      </h3>

      <div className="relative mt-8 flex flex-col items-center gap-4">
        {/* Source */}
        <ArchNode
          label="Tenant Telemetry"
          sub="OneDrive · SharePoint · Kusto"
          tone="neutral"
        />
        <Connector />

        {/* Two detectors */}
        <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-2">
          {microsoft.solution.detectors.map((d) => (
            <div
              key={d.name}
              className="relative rounded-xl border border-white/10 bg-white/[0.03] p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-iris/20 to-cyber/20 ring-1 ring-white/10">
                  <Icon name={d.icon} className="size-5 text-white" />
                </span>
                <h4 className="font-display text-sm font-semibold text-white">
                  {d.name}
                </h4>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-white/55">
                {d.desc}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {d.points.map((p) => (
                  <span
                    key={p}
                    className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-white/60"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Connector />

        {/* Fusion */}
        <ArchNode
          label="Gated Fusion"
          sub="final = max(behavioural, identity)"
          tone="fusion"
        />
        <Connector />

        {/* Output */}
        <ArchNode
          label="Risk Score → 196K flagged"
          sub="ranked · SHAP-explained · reviewed"
          tone="output"
        />
      </div>
    </motion.div>
  );
}

function ArchNode({
  label,
  sub,
  tone,
}: {
  label: string;
  sub: string;
  tone: "neutral" | "fusion" | "output";
}) {
  const styles = {
    neutral: "border-white/10 bg-white/[0.04]",
    fusion:
      "border-iris/30 bg-gradient-to-r from-iris/15 to-violet/15 shadow-glow",
    output: "border-signal/30 bg-signal/10",
  }[tone];
  return (
    <div
      className={cn(
        "w-full max-w-md rounded-xl border px-5 py-3 text-center backdrop-blur-md",
        styles
      )}
    >
      <div className="font-display text-sm font-semibold text-white">{label}</div>
      <div className="font-mono text-[11px] text-white/50">{sub}</div>
    </div>
  );
}

function Connector() {
  return (
    <div className="relative h-8 w-px overflow-hidden bg-white/10">
      <motion.span
        animate={{ y: ["-100%", "200%"] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-transparent via-cyber to-transparent"
      />
    </div>
  );
}

/* -------------------------------- SHAP chart -------------------------------- */

function ShapChart() {
  const max = Math.max(...microsoft.shap.map((s) => s.impact));
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease }}
      className="glass h-full rounded-2xl p-6"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-display text-sm font-medium uppercase tracking-[0.2em] text-white/40">
          SHAP feature contributions
        </h3>
        <span className="font-mono text-[11px] text-white/35">mean |impact|</span>
      </div>
      <div className="mt-6 space-y-3">
        {microsoft.shap.map((s, i) => (
          <div key={s.feature} className="flex items-center gap-3">
            <span className="w-40 shrink-0 truncate text-right font-mono text-xs text-white/55">
              {s.feature}
            </span>
            <div className="relative h-6 flex-1 overflow-hidden rounded-md bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(s.impact / max) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.06, ease }}
                className={cn(
                  "flex h-full items-center justify-end rounded-md pr-2",
                  s.direction === "up"
                    ? "bg-gradient-to-r from-iris/40 to-violet"
                    : "bg-gradient-to-r from-cyber/40 to-cyber"
                )}
              >
                <span className="font-mono text-[10px] font-semibold text-white/90">
                  {s.impact.toFixed(3)}
                </span>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-4 text-[11px] text-white/40">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-violet" /> pushes toward fraud
          <ArrowDown className="size-3 rotate-180" />
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-cyber" /> pushes toward genuine
        </span>
      </div>
    </motion.div>
  );
}
