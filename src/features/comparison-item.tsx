"use client";

import { cn } from "@/shared/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon, X, Check } from "lucide-react";

export interface ComparisonItemProps {
  before: {
    title: string;
    description: string;
    icon?: LucideIcon;
  };
  after: {
    title: string;
    description: string;
    icon?: LucideIcon;
  };
  variant?: "side-by-side" | "overlay";
  className?: string;
}

/**
 * Элемент сравнения "до/после"
 * Используется в Comparison Section
 */
export function ComparisonItem({
  before,
  after,
  variant = "side-by-side",
  className,
}: ComparisonItemProps) {
  if (variant === "overlay") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn("relative", className)}
      >
        <div className="grid md:grid-cols-2 gap-4">
          {/* Before */}
          <div className="relative p-6 rounded-xl bg-destructive/10 border border-destructive/20">
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-destructive flex items-center justify-center">
              <X className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-semibold mb-2 text-destructive">{before.title}</h4>
            <p className="text-sm text-muted-foreground">{before.description}</p>
          </div>

          {/* After */}
          <div className="relative p-6 rounded-xl bg-[var(--feature-accent)]/10 border border-[var(--feature-accent)]/20">
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[var(--feature-accent)] flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-semibold mb-2 text-[var(--feature-accent)]">{after.title}</h4>
            <p className="text-sm text-muted-foreground">{after.description}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("flex items-center gap-6", className)}
    >
      {/* Before */}
      <div className="flex-1 p-4 rounded-lg bg-muted/50 relative">
        <div className="flex items-start gap-3">
          {before.icon && (
            <div className="p-2 rounded-lg bg-destructive/10">
              <before.icon className="w-5 h-5 text-destructive" />
            </div>
          )}
          <div>
            <h4 className="font-medium mb-1 line-through text-muted-foreground">
              {before.title}
            </h4>
            <p className="text-sm text-muted-foreground">{before.description}</p>
          </div>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex-shrink-0 text-2xl font-bold text-[var(--feature-accent)]">
        →
      </div>

      {/* After */}
      <div className="flex-1 p-4 rounded-lg bg-[var(--feature-accent)]/10 border border-[var(--feature-accent)]/20">
        <div className="flex items-start gap-3">
          {after.icon && (
            <div className="p-2 rounded-lg bg-[var(--feature-accent)]/10">
              <after.icon className="w-5 h-5 text-[var(--feature-accent)]" />
            </div>
          )}
          <div>
            <h4 className="font-medium mb-1 text-[var(--feature-accent)]">
              {after.title}
            </h4>
            <p className="text-sm text-muted-foreground">{after.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}



