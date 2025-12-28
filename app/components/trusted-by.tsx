import Image from "next/image";
import Link from "next/link";

const clients = [
  { 
    name: "J-GEN Sénégal", 
    description: "ONG - Droits des femmes",
    href: "https://www.jgen.sn/",
    logo: "/clients/logo-jgen.png"
  },
  { 
    name: "Aïda Création", 
    description: "E-commerce Mode",
    href: "#",
    logo: "/clients/logo-aida.jpeg"
  },
  { 
    name: "Allemagne Beauty", 
    description: "E-commerce Cosmétiques",
    href: "https://allemagnebeauty.com/",
    logo: "/clients/allemagne-logo.png"
  },
  { 
    name: "BTLabs Consulting", 
    description: "Études environnementales",
    href: "#",
    logo: "/clients/btlabs.png"
  },
  { 
    name: "Wooma", 
    description: "Application Web",
    href: "#",
    logo: null
  },
];

export function TrustedBy() {
  return (
    <div className="py-8">
      <p className="text-center text-foreground-secondary text-sm uppercase tracking-wider mb-8">
        Ils nous font confiance
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {clients.map((client) => (
          <Link
            key={client.name}
            href={client.href}
            target={client.href !== "#" ? "_blank" : undefined}
            rel={client.href !== "#" ? "noopener noreferrer" : undefined}
            className="group flex flex-col items-center gap-2 transition-opacity hover:opacity-80"
          >
            {client.logo ? (
              <div className="h-12 w-auto flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={500}
                  height={500}
                  className="h-10 md:h-12 w-auto object-contain bg-white  group-hover:opacity-100 "
                />
              </div>
            ) : (
              <div className="h-12 flex items-center justify-center px-4 py-2 rounded-lg bg-background-card border border-border">
                <span className="text-foreground-muted font-medium">{client.name}</span>
              </div>
            )}
            <span className="text-foreground-secondary text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              {client.description}
            </span>
          </Link>
        ))}
      </div>
      <p className="text-center text-foreground-secondary text-xs mt-8">
        Gestion globale : plateformes, stratégie de communication, réseaux sociaux
      </p>
    </div>
  );
}
