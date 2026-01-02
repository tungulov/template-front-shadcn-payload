import { cn } from "@/shared/lib/utils";
import { ReactNode } from "react";

export interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "narrow" | "wide";
  background?: "default" | "muted" | "gradient";
  withPadding?: boolean;
  id?: string;
}

const variantClasses = {
  default: "max-w-7xl",
  narrow: "max-w-5xl",
  wide: "max-w-[90rem]",
};

const backgroundClasses = {
  default: "",
  muted: "bg-muted/50",
  gradient: "bg-gradient-primary",
};

/**
 * Универсальный контейнер для секций лендинга
 * Обеспечивает единообразный spacing, ширину и padding
 */
export function SectionContainer({
  children,
  className,
  variant = "default",
  background = "default",
  withPadding = true,
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        withPadding && "py-20 lg:py-32",
        backgroundClasses[background],
        className
      )}
    >
      <div
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          variantClasses[variant]
        )}
      >
        {children}
      </div>
    </section>
  );
}



