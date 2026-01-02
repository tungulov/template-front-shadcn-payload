"use client";

import { cn } from "@/shared/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon?: LucideIcon;
  variant?: "numbered" | "icon";
  className?: string;
}

/**
 * Карточка шага
 * Используется в How It Works Section
 */
export function StepCard({
  number,
  title,
  description,
  icon: Icon,
  variant = "numbered",
  className,
}: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
      className={cn("relative", className)}
    >
      <div className="flex flex-col items-center text-center">
        {variant === "numbered" ? (
          <div className="mb-4 w-16 h-16 rounded-full bg-gradient-primary border-2 border-[var(--feature-accent)] flex items-center justify-center">
            <span className="text-2xl font-bold text-gradient">{number}</span>
          </div>
        ) : Icon ? (
          <div className="mb-4 w-16 h-16 rounded-full bg-[var(--feature-accent)]/10 flex items-center justify-center">
            <Icon className="w-8 h-8 text-[var(--feature-accent)]" />
          </div>
        ) : null}

        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}



