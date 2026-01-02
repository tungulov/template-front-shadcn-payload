"use client";

import { SectionContainer } from "@/features/section-container";
import { SectionHeader } from "@/features/section-header";
import { ComparisonItem } from "@/features/comparison-item";
import { FileText, Workflow, Mail } from "lucide-react";

const comparisons = [
  {
    before: {
      title: "Ручное управление",
      description: "Потеря времени на рутинные задачи и отслеживание статусов",
      icon: FileText,
    },
    after: {
      title: "Автоматизация",
      description: "Автоматические уведомления, дедлайны и распределение задач",
      icon: Workflow,
    },
  },
  {
    before: {
      title: "Хаос в задачах",
      description: "Задачи разбросаны по разным инструментам и чатам",
    },
    after: {
      title: "Структурированный процесс",
      description: "Все задачи в одном месте с четкой структурой и приоритетами",
    },
  },
  {
    before: {
      title: "Email-цепочки",
      description: "Потерянные сообщения и долгие согласования",
      icon: Mail,
    },
    after: {
      title: "Централизованное общение",
      description: "Вся коммуникация по проекту в контексте задач",
    },
  },
];

/**
 * Comparison Section - секция сравнения "до/после"
 */
export function ComparisonSection() {
  return (
    <SectionContainer id="comparison" background="gradient">
      <SectionHeader
        subtitle="До и после"
        title="Как TaskFlow меняет работу"
        description="Сравните привычный подход с нашим решением"
        withGradient
      />

      <div className="space-y-6">
        {comparisons.map((comparison, index) => (
          <ComparisonItem
            key={index}
            {...comparison}
            variant="overlay"
          />
        ))}
      </div>
    </SectionContainer>
  );
}



