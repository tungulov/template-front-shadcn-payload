"use client";

import { cn } from "@/shared/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/shared/ui/badge";

export interface PortfolioItemProps {
  image: string;
  title: string;
  description?: string;
  category?: string;
  link?: string;
  variant?: "card" | "overlay";
  className?: string;
}

/**
 * Элемент портфолио/галереи
 * Используется в Gallery Section
 */
export function PortfolioItem({
  image,
  title,
  description,
  category,
  link,
  variant = "card",
  className,
}: PortfolioItemProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={cn("group relative overflow-hidden rounded-xl", className)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {variant === "overlay" && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </div>

      <div
        className={cn(
          variant === "card"
            ? "p-4 bg-card"
            : "absolute inset-x-0 bottom-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
        )}
      >
        {category && (
          <Badge variant="secondary" className="mb-2">
            {category}
          </Badge>
        )}
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        {description && (
          <p
            className={cn(
              "text-sm",
              variant === "card" ? "text-muted-foreground" : "text-white/90"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );

  if (link) {
    return (
      <Link href={link} className="block">
        {content}
      </Link>
    );
  }

  return content;
}



