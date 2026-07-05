import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Clamp a number between min and max. */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/** Format large integers into compact human-readable strings (e.g. 13400000 -> "13.4M"). */
export function formatCompact(value: number, digits = 1) {
  if (Math.abs(value) >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(digits).replace(/\.0$/, "")}M`;
  }
  if (Math.abs(value) >= 1_000) {
    return `${(value / 1_000).toFixed(digits).replace(/\.0$/, "")}K`;
  }
  return value.toString();
}
