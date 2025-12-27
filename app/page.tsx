import { Sparkles, Globe, ShoppingCart, Code, Megaphone, BarChart3, Settings, Zap, ArrowRight, Target, Eye, Users, Lightbulb } from "lucide-react";
import { Button } from "@/app/components/button";
import { Section, SectionHeader } from "@/app/components/section";
import { ServiceCard, ProjectCard } from "@/app/components/card";
import { HeroWave } from "@/app/components/hero-wave";
import { TrustedBy } from "@/app/components/trusted-by";
import { ProcessSteps } from "@/app/components/process-steps";
import { CTASection } from "@/app/components/cta-section";
import Link from "next/link";

const missions = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Structurer votre présence numérique",
    description: "Créer une identité digitale forte et professionnelle pour votre entreprise.",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Digitaliser vos activités",
    description: "Transformer vos processus avec des outils numériques adaptés à votre métier.",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Créer des solutions sur mesure",
    description: "Développer des outils digitaux qui répondent à vos besoins réels.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Gagner en compétitivité",
    description: "Améliorer votre visibilité, votre efficacité et votre performance.",
  },
];

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Plateformes Digitales",
    description: "Sites vitrines professionnels, boutiques e-commerce performantes, plateformes adaptées à vos besoins métiers.",
    href: "/services#plateformes",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Applications Web",
    description: "Applications sur mesure, outils de gestion, suivi, évaluation et automatisation de vos processus.",
    href: "/services#applications",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Communication Digitale",
    description: "Stratégies digitales, gestion des réseaux sociaux, création de contenus à forte valeur ajoutée.",
    href: "/services#communication",
  },
];

const processSteps = [
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Écoute",
    description: "Comprendre vos besoins réels et vos objectifs.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Analyse",
    description: "Étudier votre contexte et définir la stratégie.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Co-construction",
    description: "Concevoir ensemble des solutions adaptées.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Accompagnement",
    description: "Un suivi progressif et durable.",
  },
];

const projects = [
  {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    category: "E-commerce",
    categoryColor: "blue" as const,
    title: "Boutique en ligne performante",
    description: "Plateforme e-commerce évolutive avec intégration des paiements mobiles locaux.",
    tags: ["E-commerce", "Wave", "Orange Money"],
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    category: "Application Web",
    categoryColor: "green" as const,
    title: "Outil de gestion PME",
    description: "Solution logicielle pour la gestion, le suivi et l'automatisation des processus métier.",
    tags: ["Gestion", "Automatisation"],
  },
  {
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    category: "Site Vitrine",
    categoryColor: "purple" as const,
    title: "Présence digitale professionnelle",
    description: "Site vitrine sur mesure pour structurer la présence numérique d'une entreprise.",
    tags: ["Site Web", "SEO"],
  },
];

const values = [
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
    icon: <Users className="w-5 h-5" />,
    title: "Accompagnement humain",
    description: "Pédagogique et stratégique.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-grid">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Hub de création de solutions digitales
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-delay-1">
            Entrez pleinement dans
            <br />
            <span className="gradient-text">l&apos;ère du numérique.</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-foreground-muted text-lg md:text-xl max-w-3xl mx-auto mb-10 animate-fade-in-delay-2">
            Moon.innov accompagne les PME, entrepreneurs et organisations engagées dans leur transformation digitale. Expertise, innovation et solutions concrètes, adaptées aux réalités africaines.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-3">
            <Button href="/contact" variant="primary" size="lg">
              <Sparkles className="w-4 h-4" />
              Démarrer votre projet
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Découvrir nos services
            </Button>
          </div>
        </div>
        
        {/* 3D Wave */}
        <div className="relative z-10 w-full mt-12 animate-fade-in-delay-4">
          <HeroWave />
        </div>
      </section>

      {/* Ambition Section */}
      <Section background="secondary">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">Notre ambition</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Rendre le digital accessible, utile et stratégique
          </h2>
          <p className="text-foreground-muted text-lg leading-relaxed">
            Afin qu&apos;il devienne un véritable levier de <span className="text-white font-medium">croissance</span>, de <span className="text-white font-medium">performance</span> et d&apos;<span className="text-white font-medium">impact</span> pour votre organisation.
          </p>
        </div>
      </Section>

      {/* Mission Section */}
      <Section>
        <SectionHeader
          title="Notre mission"
          description="Aider les entreprises et porteurs de projets en Afrique à réussir leur transformation digitale."
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {missions.map((mission) => (
            <div
              key={mission.title}
              className="bg-background-card rounded-2xl border border-border p-6 text-center card-hover"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                {mission.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{mission.title}</h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {mission.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Trusted By */}
      <Section background="secondary">
        <TrustedBy />
      </Section>

      {/* Services Section */}
      <Section id="services">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-4">
              CE QUE NOUS FAISONS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Des solutions digitales
              <br />
              <span className="gradient-text">pour chaque besoin.</span>
            </h2>
          </div>
          <p className="text-foreground-muted max-w-md lg:text-right">
            De la création de plateformes au développement d&apos;applications, en passant par la communication digitale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Voir tous nos services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* Approach Section */}
      <Section background="secondary">
        <SectionHeader
          title="Notre approche"
          description="Nous ne livrons pas simplement des outils digitaux. Nous adoptons une approche globale et stratégique."
          centered
        />
        <ProcessSteps steps={processSteps} />
        <p className="text-center text-foreground-muted mt-8 max-w-2xl mx-auto">
          Chaque projet est pensé comme une <span className="text-white">solution utile, évolutive et alignée</span> avec la vision du client.
        </p>
      </Section>

      {/* Value Proposition */}
      <Section>
        <SectionHeader
          title="Notre valeur ajoutée"
          description="Ce qui nous différencie dans l'accompagnement de votre transformation digitale."
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                {value.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{value.title}</h3>
              <p className="text-foreground-muted text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section background="secondary">
        <div className="flex items-end justify-between mb-12">
          <SectionHeader
            title="Nos réalisations"
            description="Des solutions concrètes déployées pour nos clients."
          />
          <Link
            href="/portfolio"
            className="hidden md:inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Voir tous les projets
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-primary font-medium"
          >
            Voir tous les projets
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* Vision Section */}
      <Section>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">Notre vision</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Contribuer à la transformation numérique en Afrique
          </h2>
          <p className="text-foreground-muted text-lg leading-relaxed mb-8">
            En accompagnant les entreprises et les initiatives locales vers des usages digitaux <span className="text-white font-medium">innovants</span>, <span className="text-white font-medium">durables</span> et <span className="text-white font-medium">créateurs de valeur</span>.
          </p>
          <p className="text-foreground-secondary text-base italic">
            Moon.innov aspire à devenir un acteur de référence dans la création de solutions digitales adaptées au contexte africain.
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <CTASection
        title="Prêt pour votre transformation digitale ?"
        description="PME, entrepreneur ou organisation — discutons de votre projet et construisons ensemble votre avenir numérique."
        primaryButtonText="Démarrer un projet"
        primaryButtonHref="/contact"
        variant="default"
      />
    </div>
  );
}
