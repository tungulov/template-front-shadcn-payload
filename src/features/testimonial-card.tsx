"use client";

import { cn } from "@/shared/lib/utils";
import { Card } from "@/shared/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export interface TestimonialCardProps {
  content: string;
  author: {
    name: string;
    role: string;
    company?: string;
    avatar?: string;
  };
  rating?: number;
  variant?: "card" | "quote";
  className?: string;
}

/**
 * Карточка отзыва клиента
 * Используется в Social Proof Section
 */
export function TestimonialCard({
  content,
  author,
  rating,
  variant = "card",
  className,
}: TestimonialCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (variant === "quote") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn("relative", className)}
      >
        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[var(--feature-accent)]/20" />
        <blockquote className="pl-6">
          <p className="text-lg italic text-foreground mb-4">{content}</p>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{getInitials(author.name)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">{author.name}</div>
              <div className="text-sm text-muted-foreground">
                {author.role}
                {author.company && ` @ ${author.company}`}
              </div>
            </div>
          </div>
        </blockquote>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className={cn("p-6 h-full", className)}>
        {rating && (
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-4 h-4",
                  i < rating
                    ? "fill-yellow-500 text-yellow-500"
                    : "fill-muted text-muted"
                )}
              />
            ))}
          </div>
        )}

        <p className="text-muted-foreground mb-6 leading-relaxed">{content}</p>

        <div className="flex items-center gap-3 mt-auto">
          <Avatar>
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{getInitials(author.name)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-sm">{author.name}</div>
            <div className="text-xs text-muted-foreground">
              {author.role}
              {author.company && ` @ ${author.company}`}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}


