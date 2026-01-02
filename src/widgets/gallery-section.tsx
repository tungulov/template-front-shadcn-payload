"use client";

import { SectionContainer } from "@/features/section-container";
import { SectionHeader } from "@/features/section-header";
import { PortfolioItem } from "@/features/portfolio-item";

const portfolioItems = [
  {
    image: "/api/placeholder/600/400",
    title: "Dashboard",
    description: "Полная аналитика проектов",
    category: "Интерфейс",
  },
  {
    image: "/api/placeholder/600/400",
    title: "Kanban Board",
    description: "Визуальное управление задачами",
    category: "Функции",
  },
  {
    image: "/api/placeholder/600/400",
    title: "Team Collaboration",
    description: "Совместная работа в реальном времени",
    category: "Команда",
  },
  {
    image: "/api/placeholder/600/400",
    title: "Reports",
    description: "Детальные отчеты о прогрессе",
    category: "Аналитика",
  },
  {
    image: "/api/placeholder/600/400",
    title: "Mobile App",
    description: "Работайте из любой точки мира",
    category: "Мобайл",
  },
  {
    image: "/api/placeholder/600/400",
    title: "Integrations",
    description: "Подключение к любимым сервисам",
    category: "Интеграции",
  },
];

/**
 * Gallery Section - секция с примерами/скриншотами
 */
export function GallerySection() {
  return (
    <SectionContainer id="gallery">
      <SectionHeader
        subtitle="Галерея"
        title="Посмотрите на возможности"
        description="Скриншоты интерфейса и ключевых функций"
        withGradient
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {portfolioItems.map((item) => (
          <PortfolioItem key={item.title} {...item} variant="card" />
        ))}
      </div>
    </SectionContainer>
  );
}



