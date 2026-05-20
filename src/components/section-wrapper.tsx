"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionVariant = "operational" | "elevated" | "atmospheric" | "surface" | "default";

interface SectionWrapperProps {
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
  id?: string;
}

const variantClasses: Record<SectionVariant, string> = {
  operational: "bg-institutional-navy",
  elevated: "bg-[#071B34]",
  atmospheric: "bg-[#0A2240]",
  surface: "bg-[#0D284A]",
  default: "",
};

export function SectionWrapper({
  children,
  variant = "default",
  className,
  id
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 px-6", variantClasses[variant], className)}>
      {children}
    </section>
  );
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("max-w-7xl mx-auto", className)}>
      {children}
    </div>
  );
}

export function SectionHeading({
  children,
  subtitle,
  className
}: {
  children: ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center mb-16", className)}>
      {subtitle && (
        <span className="text-trust-green text-sm font-semibold uppercase tracking-wider">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl font-bold text-warm-white mt-4">{children}</h2>
    </div>
  );
}

export function CardSurface({
  children,
  className,
  hover = false
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "card border border-white/5 rounded-2xl p-6",
        hover && "hover:border-heritage-gold/30 transition-all",
        className
      )}
    >
      {children}
    </div>
  );
}