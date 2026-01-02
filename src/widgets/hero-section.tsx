"use client";

import { SectionContainer } from "@/features/section-container";
import { GradientBackground } from "@/features/gradient-background";
import { Button } from "@/shared/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

/**
 * Hero Section - главная секция лендинга
 * Варианты: centered, split (текст слева, визуал справа)
 */
export function HeroSection() {
  return (
    <SectionContainer className="relative min-h-[calc(100vh-5rem)] flex items-center">
      <GradientBackground variant="animated" opacity={0.3} />

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--feature-accent)]/10 border border-[var(--feature-accent)]/20">
              <span className="w-2 h-2 rounded-full bg-[var(--feature-accent)] animate-pulse" />
              <span className="text-sm font-medium text-[var(--feature-accent)]">
                Новый способ управления проектами
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
          >
            Управляйте проектами{" "}
            <span className="text-gradient">быстрее и проще</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-2xl"
          >
            Все инструменты для командной работы в одном месте. Начните работать
            эффективнее уже сегодня.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" asChild className="group">
              <Link href="#pricing">
                Начать бесплатно
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#how-it-works">
                <Play className="mr-2 h-4 w-4" />
                Посмотреть демо
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-8 pt-4"
          >
            <div>
              <div className="text-2xl font-bold text-gradient">10,000+</div>
              <div className="text-sm text-muted-foreground">Пользователей</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-2xl font-bold text-gradient">4.9★</div>
              <div className="text-sm text-muted-foreground">Рейтинг</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-2xl font-bold text-gradient">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square rounded-2xl bg-gradient-primary border border-border p-8 shadow-2xl">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] opacity-20 blur-3xl" />
            </motion.div>
            
            {/* Placeholder для мокапа/скриншота */}
            <div className="relative z-10 h-full rounded-xl bg-card/50 backdrop-blur-sm border border-border flex items-center justify-center">
              <span className="text-muted-foreground font-medium">
                [Hero Image / Product Mockup]
              </span>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl bg-[var(--feature-accent)]/10 border border-[var(--feature-accent)]/20 backdrop-blur-sm"
          />
          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[var(--gradient-via)]/10 border border-[var(--gradient-via)]/20 backdrop-blur-sm"
          />
        </motion.div>
      </div>
    </SectionContainer>
  );
}



