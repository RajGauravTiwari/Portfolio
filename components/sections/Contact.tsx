"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Github,
  Mail,
  Copy,
  Check,
  Swords,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { GradientText } from "@/components/fx/GradientText";
import { Magnetic } from "@/components/fx/Magnetic";
import { Button } from "@/components/ui/button";
import { site, socials } from "@/lib/data";

const channels = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "/in/rgt2006",
    href: socials.linkedin,
    color: "group-hover:text-[#0a66c2]",
  },
  {
    icon: Github,
    label: "GitHub",
    handle: `@${site.githubUsername}`,
    href: socials.github,
    color: "group-hover:text-white",
  },
  {
    icon: Swords,
    label: "Codeforces",
    handle: "uti_raj · Expert",
    href: socials.codeforces,
    color: "group-hover:text-cyber-light",
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-iris/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-4xl px-5 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-white/60"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
          Open to 2026 opportunities
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl"
        >
          Let&apos;s build something <GradientText>exceptional</GradientText>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-5 max-w-xl text-balance text-base text-white/55 sm:text-lg"
        >
          Whether it&apos;s intelligent systems, ML at scale, or an ambitious
          product — I&apos;d love to hear about it.
        </motion.p>

        {/* primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Magnetic>
            <Button asChild variant="primary" size="lg">
              <a href={socials.email}>
                <Mail className="size-4" /> {site.email}
              </a>
            </Button>
          </Magnetic>
          <Button variant="outline" size="lg" onClick={copyEmail}>
            {copied ? (
              <>
                <Check className="size-4 text-signal" /> Copied
              </>
            ) : (
              <>
                <Copy className="size-4" /> Copy email
              </>
            )}
          </Button>
        </motion.div>

        {/* channels */}
        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="glass group flex items-center justify-between rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <c.icon className={`size-5 text-white/70 transition-colors ${c.color}`} />
                </span>
                <div className="text-left">
                  <div className="text-sm font-medium text-white">{c.label}</div>
                  <div className="font-mono text-xs text-white/40">{c.handle}</div>
                </div>
              </div>
              <ArrowUpRight className="size-4 text-white/30 transition-all group-hover:translate-x-0.5 group-hover:text-white" />
            </motion.a>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-white/40">
          <MapPin className="size-4" />
          {site.location}
        </div>
      </div>
    </section>
  );
}
