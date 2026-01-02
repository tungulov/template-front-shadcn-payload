"use client";

import { cn } from "@/shared/lib/utils";
import { Card } from "@/shared/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export interface TeamMemberCardProps {
  name: string;
  role: string;
  bio?: string;
  image: string;
  socials?: Array<{
    platform: "github" | "linkedin" | "twitter";
    url: string;
  }>;
  className?: string;
}

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

/**
 * Карточка члена команды
 * Используется в Team Section
 */
export function TeamMemberCard({
  name,
  role,
  bio,
  image,
  socials,
  className,
}: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className={cn("overflow-hidden h-full", className)}>
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-sm text-[var(--feature-accent)] font-medium mb-3">
            {role}
          </p>

          {bio && <p className="text-sm text-muted-foreground mb-4">{bio}</p>}

          {socials && socials.length > 0 && (
            <div className="flex gap-2">
              {socials.map((social) => {
                const Icon = socialIcons[social.platform];
                return (
                  <Link
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted hover:bg-[var(--feature-accent)]/10 hover:text-[var(--feature-accent)] transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}



