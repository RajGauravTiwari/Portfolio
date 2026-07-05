"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, Users, ExternalLink, FolderGit2 } from "lucide-react";
import { SectionHeading } from "@/components/fx/SectionHeading";
import { AnimatedCounter } from "@/components/fx/AnimatedCounter";
import { site, socials, githubFallback } from "@/lib/data";
import { cn } from "@/lib/utils";

interface Repo {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

interface GitHubData {
  repos: number;
  stars: number;
  followers: number;
  contributions: number;
  topRepos: Repo[];
  live: boolean;
}

// Deterministic PRNG so the fallback heatmap is stable per render.
function seeded(seedStr: string) {
  let h = 1779033703 ^ seedStr.length;
  for (let i = 0; i < seedStr.length; i++) {
    h = Math.imul(h ^ seedStr.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

const WEEKS = 52;
const DAYS = 7;

function useHeatmap(username: string) {
  const [levels, setLevels] = useState<number[]>(() => {
    const rand = seeded(username);
    return Array.from({ length: WEEKS * DAYS }, (_, i) => {
      const day = i % DAYS;
      const weekend = day === 0 || day === 6 ? 0.5 : 1;
      const r = rand();
      const v = r * weekend;
      if (v < 0.35) return 0;
      if (v < 0.6) return 1;
      if (v < 0.8) return 2;
      if (v < 0.92) return 3;
      return 4;
    });
  });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );
        if (!res.ok) return;
        const data = await res.json();
        const days: { count: number; level: number }[] = data.contributions ?? [];
        if (!days.length) return;
        const tail = days.slice(-WEEKS * DAYS);
        if (!cancelled) setLevels(tail.map((d) => d.level));
      } catch {
        /* keep deterministic fallback */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [username]);

  return levels;
}

function useGitHub(username: string): GitHubData | null {
  const [data, setData] = useState<GitHubData | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const fallback: GitHubData = {
        ...githubFallback,
        topRepos: [],
        live: false,
      };
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed`
          ),
        ]);
        if (!userRes.ok || !reposRes.ok) {
          if (!cancelled) setData(fallback);
          return;
        }
        const user = await userRes.json();
        const repos: Repo[] = await reposRes.json();
        const stars = repos.reduce((a, r) => a + (r.stargazers_count || 0), 0);
        const topRepos = [...repos]
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 4);
        if (!cancelled)
          setData({
            repos: user.public_repos ?? repos.length,
            stars: stars || githubFallback.stars,
            followers: user.followers ?? githubFallback.followers,
            contributions: githubFallback.contributions,
            topRepos,
            live: true,
          });
      } catch {
        if (!cancelled) setData(fallback);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [username]);

  return data;
}

const levelColor = [
  "bg-white/[0.04]",
  "bg-iris/25",
  "bg-iris/50",
  "bg-iris/75",
  "bg-iris shadow-[0_0_6px_rgba(99,102,241,0.7)]",
];

export function GitHubDashboard() {
  const username = site.githubUsername;
  const data = useGitHub(username);
  const levels = useHeatmap(username);

  const stats = useMemo(
    () => [
      { icon: FolderGit2, label: "Repositories", value: data?.repos ?? githubFallback.repos },
      { icon: Star, label: "Total Stars", value: data?.stars ?? githubFallback.stars },
      { icon: Users, label: "Followers", value: data?.followers ?? githubFallback.followers },
      {
        icon: GitFork,
        label: "Contributions",
        value: data?.contributions ?? githubFallback.contributions,
      },
    ],
    [data]
  );

  return (
    <section id="github" className="section">
      <SectionHeading
        eyebrow="GitHub Intelligence"
        title={
          <>
            Building in <span className="text-gradient">public</span>
          </>
        }
        description="A live snapshot pulled from the GitHub API — repositories, stars and a year of contribution activity."
      />

      <div className="mt-14 grid gap-4 lg:grid-cols-3">
        {/* stat cards */}
        <div className="grid grid-cols-2 gap-3 lg:col-span-1">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass flex flex-col justify-between rounded-xl p-4"
            >
              <s.icon className="size-5 text-iris-light" />
              <div className="mt-6">
                <div className="font-display text-2xl font-bold text-white">
                  <AnimatedCounter value={s.value} />
                </div>
                <div className="text-xs text-white/45">{s.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 lg:col-span-2"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Github className="size-4 text-white/70" />
              <h3 className="font-display text-sm font-semibold text-white">
                Contribution activity
              </h3>
            </div>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-mono text-xs text-white/45 transition-colors hover:text-white"
            >
              @{username} <ExternalLink className="size-3" />
            </a>
          </div>

          <div className="mt-6 overflow-x-auto">
            <div className="flex gap-[3px]">
              {Array.from({ length: WEEKS }).map((_, w) => (
                <div key={w} className="flex flex-col gap-[3px]">
                  {Array.from({ length: DAYS }).map((_, d) => {
                    const lvl = levels[w * DAYS + d] ?? 0;
                    return (
                      <motion.span
                        key={d}
                        initial={{ opacity: 0, scale: 0.4 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: (w * DAYS + d) * 0.001 }}
                        className={cn("h-2.5 w-2.5 rounded-[3px]", levelColor[lvl])}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-[11px] text-white/35">
              {data?.live ? "Live from GitHub" : "Representative activity"}
            </span>
            <div className="flex items-center gap-1.5 text-[11px] text-white/35">
              Less
              {levelColor.map((c, i) => (
                <span key={i} className={cn("h-2.5 w-2.5 rounded-[3px]", c)} />
              ))}
              More
            </div>
          </div>
        </motion.div>
      </div>

      {/* top repos (only when live data has repos) */}
      {data?.topRepos && data.topRepos.length > 0 && (
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {data.topRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass group rounded-xl p-4 transition-colors hover:border-white/20"
            >
              <div className="flex items-center justify-between">
                <span className="truncate font-mono text-sm font-medium text-white">
                  {repo.name}
                </span>
                <ExternalLink className="size-3.5 text-white/40 transition-colors group-hover:text-white" />
              </div>
              <p className="mt-2 line-clamp-2 h-8 text-xs text-white/45">
                {repo.description ?? "—"}
              </p>
              <div className="mt-3 flex items-center gap-3 text-xs text-white/45">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-iris" />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <Star className="size-3" /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="size-3" /> {repo.forks_count}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </section>
  );
}
