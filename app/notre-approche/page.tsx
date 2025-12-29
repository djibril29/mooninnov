import { Search, Users, Rocket, Target, Eye, Zap, Heart, Globe, CheckCircle, Lightbulb } from "lucide-react";
import { Section, SectionHeader } from "@/app/components/section";
import { Button } from "@/app/components/button";
import { ProcessSteps } from "@/app/components/process-steps";
import { TeamCard, Card } from "@/app/components/card";
import { CTASection } from "@/app/components/cta-section";

const processSteps = [
  {
    icon: <Search className="w-5 h-5" />,
    number: 1,
    title: "L'écoute des besoins réels",
    description: "Nous prenons le temps de comprendre votre activité, vos défis quotidiens et vos objectifs. Chaque projet commence par une écoute attentive.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    number: 2,
    title: "L'analyse du contexte et des objectifs",
    description: "Nous étudions votre environnement, vos contraintes et vos ambitions pour définir la meilleure stratégie digitale.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    number: 3,
    title: "La co-construction de solutions adaptées",
    description: "Nous concevons ensemble des solutions sur mesure, alignées avec votre vision et vos capacités.",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    number: 4,
    title: "Un accompagnement progressif et durable",
    description: "Nous vous accompagnons dans la durée : formation, support, évolutions. Votre succès est notre priorité.",
  },
];

const values = [
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Vision orientée solutions",
    description: "Nous ne pensons pas uniquement technique. Nous pensons stratégie, impact et résultats pour votre organisation.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Compréhension des réalités africaines",
    description: "Nous connaissons le terrain, les usages, les contraintes. Nos solutions sont pensées pour fonctionner ici.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Solutions simples, efficaces et évolutives",
    description: "Pas d'usines à gaz. Des outils qui fonctionnent, faciles à prendre en main et qui grandissent avec vous.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Accompagnement humain et pédagogique",
    description: "Nous prenons le temps d'expliquer, de former, de vous rendre autonomes. Le digital devient accessible.",
  },
];

const targetAudience = [
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "PME & Entreprises",
    description: "Vous souhaitez structurer votre présence numérique et digitaliser vos processus pour gagner en efficacité.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Entrepreneurs",
    description: "Vous lancez votre activité et avez besoin d'une présence digitale professionnelle dès le départ.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Organisations engagées",
    description: "ONG, associations, coopératives. Le digital peut démultiplier votre impact et votre portée.",
  },
];

const team = [
  {
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=400&h=400&fit=crop&crop=face",
    name: "Moussa Diallo",
    role: "Fondateur & Direction",
    description: "Passionné par le potentiel du digital en Afrique. 10 ans d'expérience en transformation numérique.",
  },
  {
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",
    name: "Aminata Sy",
    role: "Direction Technique",
    description: "Architecte de solutions robustes et évolutives. Experte en développement web et mobile.",
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    name: "Ibrahima Ndiaye",
    role: "Lead Design & UX",
    description: "Crée des interfaces intuitives et accessibles. L'expérience utilisateur au cœur de chaque projet.",
  },
  {
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    name: "Fatou Seck",
    role: "Gestion de Projets",
    description: "Coordonne les projets avec rigueur et bienveillance. Votre interlocutrice privilégiée.",
  },
];

export default function NotreApprochePage() {
  return (
    <div className="bg-grid">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            <Target className="w-4 h-4" />
            Notre Approche
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Plus qu&apos;un prestataire,
            <br />
            <span className="gradient-text">un partenaire digital.</span>
          </h1>
          
          <p className="text-foreground-muted text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Chez Moon.innov, nous ne livrons pas simplement des outils digitaux. Nous adoptons une <span className="text-foreground">approche globale et stratégique</span>, centrée sur vos besoins réels et vos objectifs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#approche" variant="primary" size="lg">
              Découvrir notre méthode
            </Button>
            <Button href="#equipe" variant="outline" size="lg">
              Rencontrer l&apos;équipe
            </Button>
          </div>
        </div>
      </section>

    

      {/* Who we serve */}
      <Section>
        <SectionHeader
          title="À qui nous nous adressons"
          description="Moon.innov accompagne ceux qui souhaitent entrer pleinement dans l'ère du numérique."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {targetAudience.map((audience) => (
            <Card key={audience.title} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                {audience.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{audience.title}</h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                {audience.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section id="approche" background="secondary">
        <SectionHeader
          title="Notre méthodologie"
          description="Une approche structurée, basée sur l'écoute et la co-construction."
        />
        <ProcessSteps steps={processSteps} variant="cards" />
        
        <div className="mt-12 text-center">
          <Card className="inline-block bg-primary/5 border-primary/20 max-w-2xl">
            <p className="text-foreground text-lg">
              Chaque projet est pensé comme une <span className="text-primary font-semibold">solution utile, évolutive et alignée</span> avec la vision du client.
            </p>
          </Card>
        </div>
      </Section>

      {/* Values Section */}
      <Section id="valeurs">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeader
              title="Notre valeur ajoutée"
              description="Ce qui nous différencie dans l'accompagnement de votre transformation digitale."
            />
            
            <div className="space-y-6">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">{value.title}</h3>
                    <p className="text-foreground-muted text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <Card className="overflow-hidden p-0">
              <div 
                className="aspect-[4/3] bg-cover bg-center"
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop')" 
                }}
              />
              <div className="p-6 bg-background-card">
                <h3 className="text-foreground font-semibold mb-1">Un hub de création</h3>
                <p className="text-foreground-muted text-sm">Expertise, innovation et solutions concrètes.</p>
              </div>
            </Card>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          </div>
        </div>
      </Section>

      {/* Vision Section */}
      <Section background="secondary">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">Notre vision</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Contribuer activement à la transformation numérique en Afrique
          </h2>
          <p className="text-foreground-muted text-lg leading-relaxed mb-6">
            En accompagnant les entreprises et les initiatives locales vers des usages digitaux <span className="text-foreground font-medium">innovants</span>, <span className="text-foreground font-medium">durables</span> et <span className="text-foreground font-medium">créateurs de valeur</span>.
          </p>
          <p className="text-foreground-secondary italic">
            Moon.innov aspire à devenir un acteur de référence dans la création de solutions digitales adaptées au contexte africain.
          </p>
        </div>
      </Section>

      {/* Team Section */}
      <Section id="equipe">
        <SectionHeader
          title="L'équipe Moon.innov"
          description="Des experts passionnés, engagés dans la réussite de vos projets."
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <CTASection
        title="Prêt à transformer votre organisation ?"
        description="Discutons de votre projet et construisons ensemble votre avenir numérique."
        primaryButtonText="Démarrer un projet"
        primaryButtonHref="/contact"
        secondaryButtonText="Voir nos réalisations"
        secondaryButtonHref="/portfolio"
        variant="default"
      />
    </div>
  );
}
