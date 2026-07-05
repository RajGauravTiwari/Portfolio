"use client";

import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";
import { Swords, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/fx/SectionHeading";
import { competitive, socials } from "@/lib/data";

function ChartTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-white/10 bg-slate-950/90 px-3 py-2 text-xs backdrop-blur-xl">
      <div className="font-mono text-white/50">{payload[0].payload.contest}</div>
      <div className="font-semibold text-white">
        Rating {payload[0].value}
      </div>
    </div>
  );
}

export function CompetitiveProgramming() {
  return (
    <section id="arena" className="section">
      <SectionHeading
        eyebrow="Competitive Programming"
        title={
          <>
            Algorithmic thinking, <span className="text-gradient">battle-tested</span>
          </>
        }
        description="Codeforces Expert — a peak rating of 1685 built on graphs, DP and relentless problem-solving under contest pressure."
      />

      {/* stat tiles */}
      <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
        {competitive.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass rounded-xl px-4 py-5 text-center"
          >
            <div className="font-display text-2xl font-bold text-white">{s.value}</div>
            <div className="mt-1 text-xs text-white/45">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-5">
        {/* Rating graph */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 lg:col-span-3"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Swords className="size-4 text-iris-light" />
              <h3 className="font-display text-sm font-semibold text-white">
                Rating progression
              </h3>
            </div>
            <a
              href={socials.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-mono text-xs text-white/45 transition-colors hover:text-white"
            >
              @{competitive.handle} <ExternalLink className="size-3" />
            </a>
          </div>

          <div className="mt-6 h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={[...competitive.ratingSeries]}
                margin={{ top: 6, right: 6, left: -18, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="cfGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="contest"
                  tick={{ fontSize: 10 }}
                  tickLine={false}
                  axisLine={false}
                  interval={2}
                  tickFormatter={(v: string) => v.replace("Round ", "#")}
                />
                <YAxis
                  domain={[700, 1800]}
                  tick={{ fontSize: 10 }}
                  tickLine={false}
                  axisLine={false}
                  width={44}
                />
                <ReferenceLine
                  y={1600}
                  stroke="rgba(168,85,247,0.5)"
                  strokeDasharray="4 4"
                  label={{
                    value: "Expert 1600",
                    fill: "rgba(196,181,253,0.8)",
                    fontSize: 10,
                    position: "insideTopRight",
                  }}
                />
                <Tooltip content={<ChartTooltip />} cursor={{ stroke: "rgba(255,255,255,0.1)" }} />
                <Area
                  type="monotone"
                  dataKey="rating"
                  stroke="#818cf8"
                  strokeWidth={2.5}
                  fill="url(#cfGrad)"
                  dot={{ r: 2, fill: "#818cf8" }}
                  activeDot={{ r: 5 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Category radar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="glass rounded-2xl p-6 lg:col-span-2"
        >
          <h3 className="font-display text-sm font-semibold text-white">
            Problem-solving profile
          </h3>
          <div className="mt-2 h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={[...competitive.categories]} outerRadius="72%">
                <PolarGrid stroke="rgba(255,255,255,0.08)" />
                <PolarAngleAxis
                  dataKey="name"
                  tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 9 }}
                />
                <Radar
                  dataKey="value"
                  stroke="#22d3ee"
                  strokeWidth={2}
                  fill="#22d3ee"
                  fillOpacity={0.22}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-1 flex flex-wrap justify-center gap-1.5">
            {competitive.categories.map((c) => (
              <span
                key={c.name}
                className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-white/55"
              >
                {c.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
