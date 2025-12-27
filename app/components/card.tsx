import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export function Card({
  children,
  className = "",
  hover = true,
  gradient = false,
}: CardProps) {
  return (
    <div
      className={`
        bg-background-card rounded-2xl border border-border p-6
        ${hover ? "card-hover" : ""}
        ${gradient ? "gradient-border" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  tags?: string[];
}

export function ServiceCard({
  icon,
  title,
  description,
  href,
  tags,
}: ServiceCardProps) {
  const content = (
    <>
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-foreground-muted text-sm leading-relaxed mb-4">
        {description}
      </p>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-background border border-border text-foreground-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {href && (
        <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
          En savoir plus
          <ArrowRight className="w-4 h-4" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className="group">
        <Card className="h-full">{content}</Card>
      </Link>
    );
  }

  return <Card>{content}</Card>;
}

interface ProjectCardProps {
  image: string;
  category: string;
  categoryColor?: "blue" | "green" | "purple" | "orange";
  title: string;
  description: string;
  tags?: string[];
  href?: string;
}

export function ProjectCard({
  image,
  category,
  categoryColor = "blue",
  title,
  description,
  tags,
  href = "#",
}: ProjectCardProps) {
  const categoryColors = {
    blue: "bg-primary text-white",
    green: "bg-emerald-500 text-white",
    purple: "bg-purple-500 text-white",
    orange: "bg-orange-500 text-white",
  };

  return (
    <Link href={href} className="group">
      <Card className="overflow-hidden p-0">
        <div className="relative aspect-[4/3] bg-background-secondary overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${categoryColors[categoryColor]}`}>
              {category}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-foreground-muted text-sm leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full bg-background border border-border text-foreground-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  description: string;
}

export function TeamCard({ image, name, role, description }: TeamCardProps) {
  return (
    <Card className="text-center">
      <div className="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
      <p className="text-primary text-sm font-medium mb-3">{role}</p>
      <p className="text-foreground-muted text-sm leading-relaxed">
        {description}
      </p>
    </Card>
  );
}

