"use client";

import { SectionContainer } from "@/features/section-container";
import { StatCard } from "@/features/stat-card";
import { Users, TrendingUp, Star, Puzzle } from "lucide-react";

const stats = [
  {
    value: "10000+",
    label: "Активных пользователей",
    icon: Users,
  },
  {
    value: "99.9%",
    label: "Uptime",
    icon: TrendingUp,
    trend: { value: 12, direction: "up" as const },
  },
  {
    value: "4.9",
    label: "Средняя оценка",
    icon: Star,
  },
  {
    value: "50+",
    label: "Интеграций",
    icon: Puzzle,
  },
];

/**
 * Stats Section - секция с цифрами/достижениями
 */
export function StatsSection() {
  return (
    <SectionContainer id="stats" background="muted">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} animated />
        ))}
      </div>
    </SectionContainer>
  );
}



