"use client";

import { SectionContainer } from "@/features/section-container";
import { SectionHeader } from "@/features/section-header";
import { TeamMemberCard } from "@/features/team-member-card";

const team = [
  {
    name: "Иван Петров",
    role: "CEO & Founder",
    bio: "10+ лет опыта в разработке SaaS продуктов",
    image: "/api/placeholder/400/400",
    socials: [
      { platform: "linkedin" as const, url: "#" },
      { platform: "twitter" as const, url: "#" },
    ],
  },
  {
    name: "Анна Смирнова",
    role: "CTO",
    bio: "Архитектор enterprise-решений с опытом в Google",
    image: "/api/placeholder/400/400",
    socials: [
      { platform: "github" as const, url: "#" },
      { platform: "linkedin" as const, url: "#" },
    ],
  },
  {
    name: "Михаил Козлов",
    role: "Head of Product",
    bio: "Создал продукты, используемые миллионами пользователей",
    image: "/api/placeholder/400/400",
    socials: [
      { platform: "linkedin" as const, url: "#" },
      { platform: "twitter" as const, url: "#" },
    ],
  },
  {
    name: "Елена Новикова",
    role: "Head of Design",
    bio: "Award-winning UX/UI дизайнер с 8-летним опытом",
    image: "/api/placeholder/400/400",
    socials: [
      { platform: "twitter" as const, url: "#" },
      { platform: "linkedin" as const, url: "#" },
    ],
  },
];

/**
 * Team Section - секция с командой
 */
export function TeamSection() {
  return (
    <SectionContainer id="team">
      <SectionHeader
        subtitle="Команда"
        title="Познакомьтесь с нашей командой"
        description="Профессионалы, которые создают TaskFlow"
        withGradient
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {team.map((member) => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </SectionContainer>
  );
}



