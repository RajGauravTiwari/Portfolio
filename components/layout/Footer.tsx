import { Github, Linkedin, Mail, Swords } from "lucide-react";
import { site, socials } from "@/lib/data";

const links = [
  { icon: Github, href: socials.github, label: "GitHub" },
  { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
  { icon: Swords, href: socials.codeforces, label: "Codeforces" },
  { icon: Mail, href: socials.email, label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <span className="font-display text-lg font-semibold text-white">
            {site.name}
          </span>
          <span className="text-sm text-white/45">{site.tagline}</span>
        </div>

        <div className="flex items-center gap-3">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/5 py-5">
        <p className="text-center text-xs text-white/35">
          © {new Date().getFullYear()} {site.name}. Designed & built with Next.js,
          Three.js & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
