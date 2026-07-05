import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default: "border-white/10 bg-white/5 text-white/80",
        iris: "border-iris/30 bg-iris/10 text-iris-light",
        cyber: "border-cyber/30 bg-cyber/10 text-cyber-light",
        violet: "border-violet/30 bg-violet/10 text-violet-light",
        signal: "border-signal/30 bg-signal/10 text-signal",
        outline: "border-white/15 text-white/70",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
