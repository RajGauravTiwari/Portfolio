"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { AnimatedCounter } from "@/components/fx/AnimatedCounter";
import { GradientText } from "@/components/fx/GradientText";
import { Magnetic } from "@/components/fx/Magnetic";
import { Button } from "@/components/ui/button";
import { heroStats, site } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-24"
    >
      {/* Layered background */}
      <HeroCanvas />
      <div className="absolute inset-0 -z-20 grid-bg mask-radial" />
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-iris/20 blur-[120px]" />
        <div className="absolute bottom-[-15%] left-[10%] h-[420px] w-[420px] rounded-full bg-cyber/15 blur-[120px]" />
        <div className="absolute right-[8%] top-[20%] h-[380px] w-[380px] rounded-full bg-violet/15 blur-[120px]" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="mx-auto w-full max-w-5xl px-5 text-center">
        <motion.a
          href="#microsoft"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="group mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-md transition-colors hover:border-white/20 hover:text-white"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          Microsoft SWE Intern &apos;26 · Fraud Detection @ 13.4M scale
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease }}
          className="mx-auto mt-7 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Building <GradientText>Intelligent Systems</GradientText>
          <br className="hidden sm:block" /> at Scale.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base text-white/60 sm:text-lg"
        >
          {site.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Magnetic>
            <Button asChild variant="primary" size="lg">
              <a href="#projects">
                View Projects <ArrowRight className="size-4" />
              </a>
            </Button>
          </Magnetic>
          <Magnetic strength={0.25}>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">
                <Sparkles className="size-4" /> Contact Me
              </a>
            </Button>
          </Magnetic>
        </motion.div>

        {/* Living counters */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl md:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 bg-white/[0.01] px-4 py-6 transition-colors hover:bg-white/[0.04]"
            >
              <span className="font-display text-2xl font-bold text-white sm:text-3xl">
                <AnimatedCounter
                  value={stat.value}
                  decimals={stat.decimals ?? 0}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </span>
              <span className="text-center text-xs text-white/45">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-white/40"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
            Scroll
          </span>
          <ChevronDown className="size-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
