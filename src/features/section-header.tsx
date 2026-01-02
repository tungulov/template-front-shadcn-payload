"use client";

import { cn } from "@/shared/lib/utils";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/shared/hooks/use-scroll-animation";

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  withGradient?: boolean;
  className?: string;
}

const alignClasses = {
  left: "text-left",
  center: "text-center mx-auto",
  right: "text-right ml-auto",
};

/**
 * Переиспользуемый заголовок секции
 * Поддерживает subtitle, description, выравнивание и gradient эффект
 */
export function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  withGradient = false,
  className,
}: SectionHeaderProps) {
  const animation = useScrollAnimation({ direction: "up", duration: 0.6 });

  return (
    <motion.div
      {...animation}
      className={cn(
        "space-y-4 mb-12 lg:mb-16",
        alignClasses[align],
        align === "center" && "max-w-3xl",
        className
      )}
    >
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm font-semibold uppercase tracking-wider text-[var(--feature-accent)]"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight",
          withGradient && "text-gradient"
        )}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}



