"use client";

import { SectionContainer } from "@/features/section-container";
import { SectionHeader } from "@/features/section-header";
import { TestimonialCard } from "@/features/testimonial-card";
import { LogoCloud } from "@/features/logo-cloud";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/ui/carousel";

const testimonials = [
  {
    content:
      "TaskFlow полностью изменил то, как мы работаем. Теперь все задачи под контролем, и команда работает намного эффективнее.",
    author: {
      name: "Алексей Иванов",
      role: "CTO",
      company: "TechStart",
      avatar: "/api/placeholder/100/100",
    },
    rating: 5,
  },
  {
    content:
      "Интуитивный интерфейс и мощные функции. За первую неделю наша продуктивность выросла на 40%.",
    author: {
      name: "Мария Петрова",
      role: "Product Manager",
      company: "InnovateCo",
      avatar: "/api/placeholder/100/100",
    },
    rating: 5,
  },
  {
    content:
      "Лучший инструмент для управления проектами, который я использовал. Поддержка на высшем уровне!",
    author: {
      name: "Дмитрий Сидоров",
      role: "Team Lead",
      company: "DevStudio",
      avatar: "/api/placeholder/100/100",
    },
    rating: 5,
  },
  {
    content:
      "Отличная альтернатива дорогим решениям. Все что нужно для команды из 20 человек.",
    author: {
      name: "Екатерина Волкова",
      role: "Operations Director",
      company: "GrowthLab",
      avatar: "/api/placeholder/100/100",
    },
    rating: 4,
  },
];

const logos = [
  { name: "Company 1", src: "/api/placeholder/150/50" },
  { name: "Company 2", src: "/api/placeholder/150/50" },
  { name: "Company 3", src: "/api/placeholder/150/50" },
  { name: "Company 4", src: "/api/placeholder/150/50" },
  { name: "Company 5", src: "/api/placeholder/150/50" },
  { name: "Company 6", src: "/api/placeholder/150/50" },
  { name: "Company 7", src: "/api/placeholder/150/50" },
  { name: "Company 8", src: "/api/placeholder/150/50" },
];

/**
 * Social Proof Section - секция с отзывами и логотипами клиентов
 */
export function SocialProofSection() {
  return (
    <SectionContainer id="testimonials" background="muted">
      <SectionHeader
        subtitle="Отзывы"
        title="Что говорят наши клиенты"
        description="Тысячи команд по всему миру доверяют TaskFlow"
        withGradient
      />

      <Carousel className="w-full max-w-5xl mx-auto mb-16">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <TestimonialCard {...testimonial} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div>
        <p className="text-center text-sm text-muted-foreground mb-8">
          Нам доверяют лучшие компании
        </p>
        <LogoCloud logos={logos} variant="grid" />
      </div>
    </SectionContainer>
  );
}



