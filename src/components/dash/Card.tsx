import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  subtitle?: ReactNode;
  action?: ReactNode;
}

export const DashCard = ({ title, subtitle, action, className, children, ...rest }: CardProps) => (
  <div
    className={cn(
      "gradient-card shadow-card rounded-xl border border-border/60 p-5 transition-all duration-300",
      "hover:border-primary/40 hover:shadow-glow hover:-translate-y-0.5",
      className
    )}
    {...rest}
  >
    {(title || action) && (
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          {title && <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{title}</h3>}
          {subtitle && <p className="mt-1 text-xs text-muted-foreground/70">{subtitle}</p>}
        </div>
        {action}
      </div>
    )}
    {children}
  </div>
);
