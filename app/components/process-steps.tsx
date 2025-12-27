import { type ReactNode } from "react";

interface ProcessStep {
  icon: ReactNode;
  number?: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  variant?: "horizontal" | "cards";
}

export function ProcessSteps({ steps, variant = "horizontal" }: ProcessStepsProps) {
  if (variant === "cards") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-background-card rounded-2xl border border-border p-6 card-hover group"
          >
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
            )}
            
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              {step.icon}
            </div>
            
            <h3 className="text-lg font-semibold text-white mb-2">
              {step.number && <span className="text-primary">{step.number}. </span>}
              {step.title}
            </h3>
            
            <p className="text-foreground-muted text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center flex-1 relative">
          {/* Connector line */}
          {index < steps.length - 1 && (
            <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-border" />
          )}
          
          <div className="relative z-10 w-12 h-12 rounded-full bg-background-card border border-border flex items-center justify-center text-primary mb-4">
            {step.icon}
          </div>
          
          <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
          
          <p className="text-foreground-muted text-sm leading-relaxed max-w-xs">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}

