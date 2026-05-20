import { LucideIcon } from "lucide-react";
import { clsx } from "clsx";

interface IconContainerProps {
  icon: LucideIcon;
  variant?: "default" | "premium" | "success" | "muted";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-8 h-8 p-2",
  md: "w-10 h-10 p-2.5",
  lg: "w-12 h-12 p-3",
};

const variantClasses = {
  default: "bg-white/5 border border-white/10",
  premium: "bg-heritage-gold/10 border border-heritage-gold/20",
  success: "bg-trust-green/10 border border-trust-green/20",
  muted: "bg-white/5 border border-white/5",
};

export function IconContainer({ 
  icon: Icon, 
  variant = "default", 
  size = "md",
  className 
}: IconContainerProps) {
  return (
    <div className={clsx(
      "rounded-xl flex items-center justify-center",
      sizeClasses[size],
      variantClasses[variant],
      className
    )}>
      <Icon className="w-4 h-4" strokeWidth={1.75} />
    </div>
  );
}