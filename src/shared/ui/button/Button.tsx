"use client";

import React from "react";
import { clsx } from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  className,
  variant = "primary",
  children,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const stylesByVariant: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
      "bg-foreground text-background hover:opacity-90 focus:ring-foreground/30",
    secondary:
      "border border-black/10 dark:border-white/20 bg-transparent text-foreground hover:bg-black/5 dark:hover:bg-white/10 focus:ring-foreground/20",
  };

  return (
    <button
      className={clsx(base, stylesByVariant[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
