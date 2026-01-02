"use client";

import { cn } from "@/shared/lib/utils";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { useInView } from "@/shared/hooks/use-in-view";

export interface StatCardProps {
  value: string | number;
  label: string;
  description?: string;
  icon?: LucideIcon;
  trend?: {
    value: number;
    direction: "up" | "down";
  };
  animated?: boolean;
  className?: string;
}

/**
 * Карточка статистики/достижения
 * Используется в Stats Section
 * Поддерживает анимированный счетчик для числовых значений
 */
export function StatCard({
  value,
  label,
  description,
  icon: Icon,
  trend,
  animated = true,
  className,
}: StatCardProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const hasAnimated = useRef(false);

  // Попытка извлечь число из строки для анимации
  const numericValue =
    typeof value === "number"
      ? value
      : parseFloat(String(value).replace(/[^0-9.]/g, ""));
  const isNumeric = !isNaN(numericValue);
  const prefix = typeof value === "string" ? value.replace(/[0-9.,]/g, "") : "";

  useEffect(() => {
    if (isInView && !hasAnimated.current && animated && isNumeric) {
      hasAnimated.current = true;
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, numericValue, animated, isNumeric]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("text-center", className)}
    >
      {Icon && (
        <div className="mb-4 inline-flex p-3 rounded-lg bg-[var(--feature-accent)]/10">
          <Icon className="w-6 h-6 text-[var(--feature-accent)]" />
        </div>
      )}

      <div className="mb-2">
        {animated && isNumeric ? (
          <motion.span className="text-4xl lg:text-5xl font-bold text-gradient">
            {prefix}
            <motion.span>{rounded}</motion.span>
          </motion.span>
        ) : (
          <span className="text-4xl lg:text-5xl font-bold text-gradient">
            {value}
          </span>
        )}
      </div>

      <div className="text-lg font-semibold mb-1">{label}</div>

      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}

      {trend && (
        <div
          className={cn(
            "mt-2 inline-flex items-center gap-1 text-sm font-medium",
            trend.direction === "up" ? "text-green-600" : "text-red-600"
          )}
        >
          {trend.direction === "up" ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          {trend.value}%
        </div>
      )}
    </motion.div>
  );
}


