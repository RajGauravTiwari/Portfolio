import {
  Activity,
  Fingerprint,
  Database,
  Boxes,
  GitBranch,
  Combine,
  ScanSearch,
  ShieldAlert,
  FileSearch,
  Rocket,
  Stethoscope,
  Code2,
  BrainCircuit,
  Layers,
  Sparkles,
  Cloud,
  Cpu,
  TerminalSquare,
  Trophy,
  Medal,
  Award,
  Star,
  Swords,
  Network,
  Users,
  type LucideIcon,
} from "lucide-react";

const registry: Record<string, LucideIcon> = {
  Activity,
  Fingerprint,
  Database,
  Boxes,
  GitBranch,
  Combine,
  ScanSearch,
  ShieldAlert,
  FileSearch,
  Rocket,
  Stethoscope,
  Code2,
  BrainCircuit,
  Layers,
  Sparkles,
  Cloud,
  Cpu,
  TerminalSquare,
  Trophy,
  Medal,
  Award,
  Star,
  Swords,
  Network,
  Users,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = registry[name] ?? Sparkles;
  return <Cmp className={className} />;
}
