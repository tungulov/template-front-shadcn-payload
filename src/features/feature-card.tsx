"use client";

import { cn } from "@/shared/lib/utils";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "bordered" | "filled";
  link?: {
    href: string;
    label: string;
  };
  className?: string;
}

const variantClasses = {
  default: "bg-card hover:bg-accent/50",
  bordered: "bg-transparent border-2 border-border hover:border-[var(--feature-accent)]",
  filled: "bg-gradient-primary border border-border/50",
};

/**
 * Карточка фичи/преимущества
 * Используется в Features Section
 */
export function FeatureCard({
  icon: Icon,
  title,
  description,
  variant = "default",
  link,
  className,
}: FeatureCardProps) {
  const content = (
    <>
      <div className="mb-4 inline-flex p-3 rounded-lg bg-[var(--feature-accent)]/10">
        <Icon className="w-6 h-6 text-[var(--feature-accent)]" />
      </div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      
      <p className="text-muted-foreground leading-relaxed">{description}</p>

      {link && (
        <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--feature-accent)] group-hover:gap-3 transition-all">
          {link.label}
          <ArrowRight className="w-4 h-4" />
        </div>
      )}
    </>
  );

  const card = (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={{
        rest: { scale: 1, y: 0 },
        hover: { scale: 1.02, y: -5 },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group relative p-6 rounded-xl transition-all duration-300",
        variantClasses[variant],
        className
      )}
    >
      {content}
    </motion.div>
  );

  if (link) {
    return (
      <Link href={link.href} className="block">
        {card}
      </Link>
    );
  }

  return card;
}



