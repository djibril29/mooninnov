import { 
  Globe, Code, Megaphone,
  ArrowRight, CheckCircle, Sparkles, Eye, Zap, Heart
} from "lucide-react";
import { Section, SectionHeader } from "@/app/components/section";
import { Button } from "@/app/components/button";
import { Card } from "@/app/components/card";
import { CTASection } from "@/app/components/cta-section";

const serviceCategories = [
  {
    id: "plateformes",
    icon: <Globe className="w-8 h-8" />,
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    title: "Création de plateformes digitales",
    description: "Des solutions web professionnelles pour structurer votre présence numérique.",
    services: [
      {
        title: "Sites vitrines professionnels et sur mesure",
        description: "Une présence en ligne qui reflète votre identité et met en valeur votre activité.",
      },
      {
        title: "Boutiques e-commerce performantes et évolutives",
        description: "Vendez en ligne avec des solutions intégrant les paiements locaux et internationaux.",
      },
      {
        title: "Plateformes digitales adaptées aux besoins métiers",
        description: "Des solutions sur mesure pour répondre aux spécificités de votre secteur.",
      },
    ],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
  },
  {
    id: "applications",
    icon: <Code className="w-8 h-8" />,
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    title: "Développement d'applications web",
    description: "Des outils digitaux pour optimiser et automatiser vos processus métier.",
    services: [
      {
        title: "Applications web sur mesure",
        description: "Des solutions développées spécifiquement pour répondre à vos besoins uniques.",
      },
      {
        title: "Outils de gestion, suivi et évaluation",
        description: "Digitalisez vos processus avec des tableaux de bord et des outils de pilotage.",
      },
      {
        title: "Solutions d'automatisation",
        description: "Gagnez du temps en automatisant vos tâches répétitives et vos workflows.",
      },
      {
        title: "Solutions logicielles spécifiques",
        description: "Répondez à des problématiques métier précises avec des outils adaptés.",
      },
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
  },
  {
    id: "communication",
    icon: <Megaphone className="w-8 h-8" />,
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-400",
    title: "Communication et présence digitale",
    description: "Développez votre visibilité et engagez votre audience sur les canaux digitaux.",
    services: [
      {
        title: "Stratégies de communication digitale",
        description: "Définissez et déployez une stratégie cohérente pour atteindre vos objectifs.",
      },
      {
        title: "Gestion et animation des réseaux sociaux",
        description: "Créez et maintenez une communauté engagée autour de votre marque.",
      },
      {
        title: "Création de contenus à forte valeur ajoutée",
        description: "Produisez des contenus qui informent, engagent et convertissent.",
      },
      {
        title: "Accompagnement vente en ligne",
        description: "Optimisez votre présence pour vendre vos produits et services sur le digital.",
      },
    ],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
  },
];

const valueProposition = [
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Vision orientée solutions",
    description: "Pas uniquement techniques, mais stratégiques.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Compréhension des réalités africaines",
    description: "Des solutions adaptées au contexte local.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Solutions simples et efficaces",
    description: "Des outils évolutifs qui fonctionnent.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Accompagnement humain",
    description: "Pédagogique et stratégique.",
  },
];

const sectors = [
  "Commerce & Distribution",
  "Services financiers",
  "Agriculture & Agro-industrie",
  "Santé",
  "Éducation & Formation",
  "ONG & Associations",
  "Immobilier",
  "Tourisme & Hôtellerie",
];

export default function ServicesPage() {
  return (
    <div className="bg-grid">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')" 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Ce que nous faisons
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Des solutions digitales
            <br />
            <span className="gradient-text">adaptées à vos besoins.</span>
          </h1>
          
          <p className="text-foreground-muted text-lg md:text-xl max-w-3xl mx-auto">
            De la création de plateformes au développement d&apos;applications, en passant par la communication digitale — nous vous accompagnons à chaque étape.
          </p>
        </div>
      </section>

      {/* Services Categories */}
      {serviceCategories.map((category, index) => (
        <Section key={category.id} id={category.id} background={index % 2 === 0 ? "default" : "secondary"}>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className={`w-16 h-16 rounded-2xl ${category.iconBg} flex items-center justify-center ${category.iconColor} mb-6`}>
                {category.icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {category.title}
              </h2>
              <p className="text-foreground-muted text-lg mb-8">
                {category.description}
              </p>
              
              <div className="space-y-4">
                {category.services.map((service) => (
                  <div key={service.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-medium mb-1">{service.title}</h3>
                      <p className="text-foreground-muted text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <Card className="overflow-hidden p-0">
                <div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
              </Card>
            </div>
          </div>
        </Section>
      ))}

      {/* Sectors */}
      <Section background="secondary">
        <SectionHeader
          title="Secteurs d'intervention"
          description="Nous accompagnons des organisations dans de nombreux secteurs d'activité."
          centered
        />
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          {sectors.map((sector) => (
            <span
              key={sector}
              className="px-4 py-2 rounded-full bg-background-card border border-border text-foreground-muted hover:text-primary hover:border-primary/50 transition-colors"
            >
              {sector}
            </span>
          ))}
        </div>
      </Section>

      {/* Value Proposition */}
      <Section>
        <SectionHeader
          title="Notre valeur ajoutée"
          description="Ce qui nous différencie dans l'accompagnement de votre transformation digitale."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProposition.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Approach Summary */}
      <Section background="secondary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Notre approche
          </h2>
          <p className="text-foreground-muted text-lg leading-relaxed mb-8">
            Chez Moon.innov, nous ne livrons pas simplement des outils digitaux. Nous adoptons une <span className="text-foreground">approche globale et stratégique</span>, basée sur l&apos;écoute, l&apos;analyse, la co-construction et l&apos;accompagnement durable.
          </p>
          <p className="text-foreground-secondary italic mb-8">
            Chaque projet est pensé comme une solution utile, évolutive et alignée avec la vision du client.
          </p>
          <Button href="/notre-approche" variant="outline">
            En savoir plus sur notre approche
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <CTASection
        title="Un projet en tête ?"
        description="Décrivez-nous votre besoin. Nous vous accompagnons de l'idée à la réalisation."
        primaryButtonText="Discuter de mon projet"
        primaryButtonHref="/contact"
        secondaryButtonText="Voir nos réalisations"
        secondaryButtonHref="/portfolio"
        variant="card"
      />
    </div>
  );
}
