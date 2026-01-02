"use client";

import { SectionContainer } from "@/features/section-container";
import { SectionHeader } from "@/features/section-header";
import { StepCard } from "@/features/step-card";
import { motion } from "framer-motion";
import { UserPlus, FolderPlus, Users as UsersIcon, Rocket } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Зарегистрируйтесь",
    description: "Создайте аккаунт за 30 секунд. Кредитная карта не требуется.",
    icon: UserPlus,
  },
  {
    number: 2,
    title: "Создайте проект",
    description: "Настройте свой первый проект и добавьте задачи.",
    icon: FolderPlus,
  },
  {
    number: 3,
    title: "Пригласите команду",
    description: "Добавьте коллег и назначьте роли для совместной работы.",
    icon: UsersIcon,
  },
  {
    number: 4,
    title: "Начните работать",
    description: "Отслеживайте прогресс и достигайте целей быстрее.",
    icon: Rocket,
  },
];

/**
 * How It Works Section - секция "Как это работает"
 */
export function HowItWorksSection() {
  return (
    <SectionContainer id="how-it-works">
      <SectionHeader
        subtitle="Как это работает"
        title="Начните за 4 простых шага"
        description="Настройка займет всего несколько минут"
        withGradient
      />

      <div className="relative">
        {/* Connection line */}
        <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--gradient-from)] via-[var(--gradient-via)] to-[var(--gradient-to)] opacity-20" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} variant="icon" />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}



