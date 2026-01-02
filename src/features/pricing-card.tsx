"use client";

import { cn } from "@/shared/lib/utils";
import { Card } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Link from "next/link";

export interface PricingCardProps {
  name: string;
  price: number | "custom";
  period?: "month" | "year";
  description: string;
  features: Array<{
    text: string;
    included: boolean;
  }>;
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
  variant?: "default" | "featured";
  className?: string;
}

/**
 * Карточка тарифного плана
 * Используется в Pricing Section
 */
export function PricingCard({
  name,
  price,
  period = "month",
  description,
  features,
  ctaLabel,
  ctaHref,
  popular = false,
  variant = "default",
  className,
}: PricingCardProps) {
  const isFeatured = variant === "featured" || popular;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={isFeatured ? { scale: 1.05, y: -10 } : { scale: 1.02, y: -5 }}
      className={cn("relative", className)}
    >
      {popular && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--feature-accent)] text-white">
          Популярный
        </Badge>
      )}

      <Card
        className={cn(
          "p-8 h-full flex flex-col",
          isFeatured &&
            "border-2 border-[var(--feature-accent)] shadow-lg shadow-[var(--feature-accent)]/20"
        )}
      >
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        <div className="mb-8">
          {price === "custom" ? (
            <div className="text-4xl font-bold">Индивидуально</div>
          ) : (
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-bold">{price.toLocaleString('ru-RU')} ₽</span>
              <span className="text-muted-foreground">
                /{period === "month" ? "мес" : "год"}
              </span>
            </div>
          )}
        </div>

        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              {feature.included ? (
                <Check className="w-5 h-5 text-[var(--feature-accent)] shrink-0 mt-0.5" />
              ) : (
                <X className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
              )}
              <span
                className={cn(
                  "text-sm",
                  feature.included ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <Button
          asChild
          variant={isFeatured ? "default" : "outline"}
          size="lg"
          className="w-full"
        >
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </Card>
    </motion.div>
  );
}

