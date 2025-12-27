import { Button } from "./button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: "default" | "card";
}

export function CTASection({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  variant = "default",
}: CTASectionProps) {
  if (variant === "card") {
    return (
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-background-card rounded-3xl border border-border overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 pointer-events-none" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 py-12 md:py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  {title}
                </h2>
                <p className="text-foreground-muted text-lg max-w-xl">
                  {description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button href={primaryButtonHref} variant="primary" size="lg">
                  {primaryButtonText}
                </Button>
                {secondaryButtonText && secondaryButtonHref && (
                  <Button href={secondaryButtonHref} variant="outline" size="lg">
                    {secondaryButtonText}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-foreground-muted text-lg max-w-2xl mx-auto mb-8">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={primaryButtonHref} variant="primary" size="lg">
            {primaryButtonText}
          </Button>
          {secondaryButtonText && secondaryButtonHref && (
            <Button href={secondaryButtonHref} variant="outline" size="lg">
              {secondaryButtonText}
            </Button>
          )}
        </div>
        
        {/* Trust indicator */}
        <p className="mt-6 text-foreground-secondary text-sm">
          Réponse sous 24h garantie.
        </p>
      </div>
    </section>
  );
}

