"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/fx/SectionHeading";
import { TiltCard } from "@/components/fx/TiltCard";
import { Icon } from "@/components/fx/Icon";
import { Badge } from "@/components/ui/badge";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentGlow = {
  iris: "from-iris/25",
  cyber: "from-cyber/25",
  violet: "from-violet/25",
  signal: "from-signal/25",
} as const;

const accentText = {
  iris: "text-iris-light",
  cyber: "text-cyber-light",
  violet: "text-violet-light",
  signal: "text-signal",
} as const;

export function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Selected Work"
        title={
          <>
            Products, research & <span className="text-gradient">systems</span> I&apos;ve shipped
          </>
        }
        description="From large-scale ML platforms to fault-tolerant control and medical AI — each project taken from idea to a working system."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const isExternal = project.href.startsWith("http");
  return (
    <TiltCard className="h-full">
      <div className="relative h-full overflow-hidden rounded-2xl p-6 sm:p-7">
        {/* corner glow */}
        <div
          className={cn(
            "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br to-transparent blur-2xl",
            accentGlow[project.accent]
          )}
        />

        <div className="relative flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10",
                accentText[project.accent]
              )}
            >
              <Icon name={project.icon} className="size-5" />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-white">
                {project.name}
              </h3>
              <p className={cn("text-xs", accentText[project.accent])}>
                {project.tagline}
              </p>
            </div>
          </div>
          <a
            href={project.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={`Open ${project.name}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all hover:border-white/25 hover:text-white"
          >
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="relative mt-4 flex items-center gap-2 text-xs text-white/40">
          <span>{project.context}</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span className="font-mono">{project.period}</span>
        </div>

        <p className="relative mt-4 text-sm leading-relaxed text-white/60">
          {project.description}
        </p>

        <ul className="relative mt-4 space-y-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-xs leading-relaxed text-white/55">
              <span
                className={cn(
                  "mt-1.5 h-1 w-1 shrink-0 rounded-full",
                  project.accent === "iris" && "bg-iris",
                  project.accent === "cyber" && "bg-cyber",
                  project.accent === "violet" && "bg-violet",
                  project.accent === "signal" && "bg-signal"
                )}
              />
              {h}
            </li>
          ))}
        </ul>

        {/* metrics strip */}
        <div className="relative mt-5 grid grid-cols-3 gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-3">
          {project.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="font-display text-base font-bold text-white">
                {m.value}
              </div>
              <div className="text-[10px] uppercase tracking-wide text-white/35">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Badge key={s} variant="outline" className="text-white/55">
              {s}
            </Badge>
          ))}
        </div>
      </div>
    </TiltCard>
  );
}
