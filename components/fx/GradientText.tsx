import { cn } from "@/lib/utils";

/** Animated gradient text used for hero + section highlights. */
export function GradientText({
  children,
  className,
  animate = true,
}: {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-iris-light via-violet-light to-cyber-light bg-clip-text text-transparent",
        animate && "animate-gradient-x bg-[length:200%_auto]",
        className
      )}
    >
      {children}
    </span>
  );
}
