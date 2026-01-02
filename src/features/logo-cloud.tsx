"use client";

import { cn } from "@/shared/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export interface LogoCloudProps {
  logos: Array<{
    name: string;
    src: string;
    url?: string;
  }>;
  variant?: "grid" | "marquee";
  animated?: boolean;
  className?: string;
}

/**
 * Облако логотипов компаний-клиентов
 * Используется в Social Proof Section
 */
export function LogoCloud({
  logos,
  variant = "grid",
  animated = false,
  className,
}: LogoCloudProps) {
  if (variant === "marquee") {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <motion.div
          animate={
            animated
              ? {
                  x: [0, -1000],
                }
              : {}
          }
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-12 items-center"
        >
          {/* Дублируем логотипы для бесшовной прокрутки */}
          {[...logos, ...logos].map((logo, index) => (
            <LogoItem key={`${logo.name}-${index}`} logo={logo} />
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center",
        className
      )}
    >
      {logos.map((logo) => (
        <LogoItem key={logo.name} logo={logo} />
      ))}
    </motion.div>
  );
}

function LogoItem({
  logo,
}: {
  logo: { name: string; src: string; url?: string };
}) {
  const content = (
    <div className="relative h-12 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
      <Image
        src={logo.src}
        alt={logo.name}
        fill
        className="object-contain"
      />
    </div>
  );

  if (logo.url) {
    return (
      <Link
        href={logo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center"
      >
        {content}
      </Link>
    );
  }

  return <div className="flex items-center justify-center">{content}</div>;
}



