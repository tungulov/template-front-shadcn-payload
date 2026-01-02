"use client";

import { SectionContainer } from "@/features/section-container";
import { SectionHeader } from "@/features/section-header";
import { FeatureCard } from "@/features/feature-card";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/shared/hooks/use-scroll-animation";
import {
  Zap,
  Users,
  BarChart3,
  Puzzle,
  Shield,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Быстрый старт",
    description:
      "Начните работу за 5 минут. Интуитивный интерфейс и простая настройка.",
  },
  {
    icon: Users,
    title: "Командная работа",
    description:
      "Пригласите коллег и работайте вместе в реальном времени над проектами.",
  },
  {
    icon: BarChart3,
    title: "Аналитика",
    description:
      "Отслеживайте прогресс в реальном времени с подробными отчетами и дашбордами.",
  },
  {
    icon: Puzzle,
    title: "Интеграции",
    description:
      "Подключите любимые инструменты: Slack, GitHub, Jira и еще более 50 сервисов.",
  },
  {
    icon: Shield,
    title: "Безопасность",
    description:
      "Защита данных на уровне банков с шифрованием и регулярными бэкапами.",
  },
  {
    icon: Headphones,
    title: "Поддержка 24/7",
    description:
      "Наша команда всегда готова помочь вам в любое время дня и ночи.",
  },
];

/**
 * Features Section - секция с возможностями/преимуществами
 */
export function FeaturesSection() {
  return (
    <SectionContainer id="features">
      <SectionHeader
        subtitle="Возможности"
        title="Все что нужно для вашей команды"
        description="Мощные инструменты для эффективной работы в одном месте"
        withGradient
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {features.map((feature) => (
          <motion.div key={feature.title} variants={staggerItem}>
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}



