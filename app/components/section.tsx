import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "secondary" | "gradient";
}

export function Section({
  children,
  className = "",
  id,
  background = "default",
}: SectionProps) {
  const backgrounds = {
    default: "bg-background",
    secondary: "bg-background-secondary",
    gradient: "bg-gradient-to-b from-background to-background-secondary",
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12 md:mb-16`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
        {titleHighlight && (
          <>
            {" "}
            <span className="gradient-text">{titleHighlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p className="text-foreground-muted text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

