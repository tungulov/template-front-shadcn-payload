"use client";

import { SectionContainer } from "@/features/section-container";
import { SectionHeader } from "@/features/section-header";
import { PricingCard } from "@/features/pricing-card";

const pricingPlans = [
  {
    name: "Free",
    price: 0,
    description: "Для начала работы и малых команд",
    features: [
      { text: "До 5 участников команды", included: true },
      { text: "До 10 проектов", included: true },
      { text: "Базовые отчеты", included: true },
      { text: "Email поддержка", included: true },
      { text: "Интеграции", included: false },
      { text: "Приоритетная поддержка", included: false },
      { text: "Кастомные роли", included: false },
    ],
    ctaLabel: "Начать бесплатно",
    ctaHref: "#",
  },
  {
    name: "Pro",
    price: 2900,
    description: "Для растущих команд",
    features: [
      { text: "До 50 участников команды", included: true },
      { text: "Неограниченные проекты", included: true },
      { text: "Расширенная аналитика", included: true },
      { text: "Email и чат поддержка", included: true },
      { text: "Все интеграции", included: true },
      { text: "Приоритетная поддержка", included: true },
      { text: "Кастомные роли", included: false },
    ],
    ctaLabel: "Попробовать Pro",
    ctaHref: "#",
    popular: true,
    variant: "featured" as const,
  },
  {
    name: "Enterprise",
    price: "custom",
    description: "Для крупного бизнеса",
    features: [
      { text: "Неограниченные участники", included: true },
      { text: "Неограниченные проекты", included: true },
      { text: "Кастомная аналитика", included: true },
      { text: "Выделенный менеджер", included: true },
      { text: "Все интеграции + API", included: true },
      { text: "24/7 поддержка", included: true },
      { text: "Кастомные роли и права", included: true },
    ],
    ctaLabel: "Связаться с нами",
    ctaHref: "#",
  },
];

/**
 * Pricing Section - секция с тарифами
 */
export function PricingSection() {
  return (
    <SectionContainer id="pricing">
      <SectionHeader
        subtitle="Тарифы"
        title="Выберите подходящий план"
        description="Прозрачные цены без скрытых платежей. Отмените в любое время."
        withGradient
      />

      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          Все планы включают 14-дневную бесплатную пробную версию.{" "}
          <a href="#" className="text-[var(--feature-accent)] hover:underline">
            Сравнить все функции
          </a>
        </p>
      </div>
    </SectionContainer>
  );
}

