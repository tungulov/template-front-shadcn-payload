"use client";

import { SectionContainer } from "@/features/section-container";
import { GradientBackground } from "@/features/gradient-background";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

/**
 * CTA Section - финальный призыв к действию
 */
export function CtaSection() {
  return (
    <SectionContainer className="relative">
      <GradientBackground variant="mesh" opacity={0.4} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--feature-accent)]/10 border border-[var(--feature-accent)]/20">
            <Sparkles className="w-4 h-4 text-[var(--feature-accent)]" />
            <span className="text-sm font-medium text-[var(--feature-accent)]">
              Начните работать эффективнее уже сегодня
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Готовы{" "}
            <span className="text-gradient">трансформировать</span>
            <br />
            работу вашей команды?
          </h2>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Присоединяйтесь к тысячам команд, которые уже используют TaskFlow
            для достижения своих целей быстрее и эффективнее.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Ваш email"
              className="h-12"
            />
            <Button size="lg" className="w-full sm:w-auto group">
              Попробовать бесплатно
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            14 дней бесплатно • Кредитная карта не требуется • Отмените в любое время
          </p>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              ✓ Настройка за 5 минут
            </div>
            <div className="flex items-center gap-2">
              ✓ Поддержка 24/7
            </div>
            <div className="flex items-center gap-2">
              ✓ Безопасность данных
            </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}



