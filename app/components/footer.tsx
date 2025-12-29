import Link from "next/link";
import { Mail, Linkedin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./logo";

const navigationLinks = {
  services: [
    { name: "Plateformes Digitales", href: "/services#plateformes" },
    { name: "Applications Web", href: "/services#applications" },
    { name: "Communication Digitale", href: "/services#communication" },
  ],
  company: [
    { name: "Notre approche", href: "/notre-approche" },
    { name: "L'équipe", href: "/notre-approche#equipe" },
    { name: "Réalisations", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Mentions légales", href: "#" },
    { name: "Confidentialité", href: "#" },
    { name: "CGV", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo theme="dark" variant="default" />
            </div>
            <p className="text-foreground-muted text-sm leading-relaxed mb-4">
              Hub de création de solutions digitales pour PME, entrepreneurs et organisations engagées.
            </p>
            <p className="text-foreground-secondary text-xs mb-6">
              Rendre le digital accessible, utile et stratégique.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/221771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background-card border border-border flex items-center justify-center text-foreground-muted hover:text-emerald-500 hover:border-emerald-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:+221771234567"
                className="w-10 h-10 rounded-full bg-background-card border border-border flex items-center justify-center text-foreground-muted hover:text-primary hover:border-primary transition-colors"
                aria-label="Téléphone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@moon-innov.com"
                className="w-10 h-10 rounded-full bg-background-card border border-border flex items-center justify-center text-foreground-muted hover:text-primary hover:border-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background-card border border-border flex items-center justify-center text-foreground-muted hover:text-primary hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {navigationLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground-muted hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Moon.innov</h3>
            <ul className="space-y-3">
              {navigationLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground-muted hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Légal</h3>
            <ul className="space-y-3">
              {navigationLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground-muted hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground-secondary text-sm">
            © {new Date().getFullYear()} Moon.innov. Tous droits réservés.
          </p>
          <p className="text-foreground-secondary text-sm">
            Fait avec ❤️ à Dakar
          </p>
        </div>
      </div>
    </footer>
  );
}
