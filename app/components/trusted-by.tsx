import { Building2, Landmark, Leaf, ShoppingBag, Smartphone, Briefcase } from "lucide-react";

const companies = [
  { name: "Sonatel", icon: Smartphone },
  { name: "BCEAO", icon: Landmark },
  { name: "Teranga Foods", icon: Leaf },
  { name: "Jumia", icon: ShoppingBag },
  { name: "Wave", icon: Briefcase },
  { name: "Orange", icon: Building2 },
];

export function TrustedBy() {
  return (
    <div className="py-12 border-y border-border">
      <p className="text-center text-foreground-secondary text-sm uppercase tracking-wider mb-8">
        Ils nous font confiance
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {companies.map((company) => {
          const Icon = company.icon;
          return (
            <div
              key={company.name}
              className="flex items-center gap-2 text-foreground-muted hover:text-white transition-colors"
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{company.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
