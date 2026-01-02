"use client";

import { cn } from "@/shared/lib/utils";
import { motion } from "framer-motion";

export interface GradientBackgroundProps {
  variant?: "radial" | "mesh" | "animated";
  className?: string;
  opacity?: number;
}

/**
 * Декоративный градиентный фон для секций
 * Варианты: radial (радиальный), mesh (сеточный), animated (с анимацией)
 */
export function GradientBackground({
  variant = "radial",
  className,
  opacity = 0.5,
}: GradientBackgroundProps) {
  if (variant === "radial") {
    return (
      <div
        className={cn(
          "absolute inset-0 pointer-events-none overflow-hidden",
          className
        )}
        style={{ opacity }}
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--gradient-from)] rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--gradient-via)] rounded-full blur-3xl opacity-20" />
      </div>
    );
  }

  if (variant === "mesh") {
    return (
      <div
        className={cn(
          "absolute inset-0 pointer-events-none overflow-hidden",
          className
        )}
        style={{ opacity }}
      >
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[var(--gradient-from)] rounded-full blur-3xl opacity-30 mix-blend-multiply dark:mix-blend-lighten" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-[var(--gradient-via)] rounded-full blur-3xl opacity-30 mix-blend-multiply dark:mix-blend-lighten" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-[var(--gradient-to)] rounded-full blur-3xl opacity-30 mix-blend-multiply dark:mix-blend-lighten" />
      </div>
    );
  }

  if (variant === "animated") {
    return (
      <div
        className={cn(
          "absolute inset-0 pointer-events-none overflow-hidden",
          className
        )}
        style={{ opacity }}
      >
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--gradient-from)] rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--gradient-via)] rounded-full blur-3xl opacity-20"
        />
      </div>
    );
  }

  return null;
}


