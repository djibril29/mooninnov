"use client";

import { useState } from "react";
import { Star, ArrowRight, ArrowUpRight, Quote, Sparkles, CheckCircle } from "lucide-react";
import { Section, SectionHeader } from "@/app/components/section";
import { Button } from "@/app/components/button";
import { Card } from "@/app/components/card";
import { CTASection } from "@/app/components/cta-section";
import Link from "next/link";

const categories = [
  { id: "all", name: "Tout" },
  { id: "plateforme", name: "Plateformes" },
  { id: "application", name: "Applications" },
  { id: "communication", name: "Communication" },
];

const featuredProject = {
  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
  category: "E-COMMERCE",
  tech: "Next.js / Node.js / PostgreSQL",
  title: "Marketplace régionale",
  description: "Une plateforme e-commerce complète pour connecter producteurs locaux et acheteurs. Intégration des paiements mobiles (Wave, Orange Money), gestion des stocks, suivi des commandes et livraisons. La solution a permis à plus de 150 producteurs de digitaliser leur activité commerciale.",
  stats: [
    { value: "150+", label: "Vendeurs" },
    { value: "10k+", label: "Commandes" },
    { value: "98%", label: "Satisfaction" },
  ],
  results: [
    "Digitalisation de la vente pour 150+ producteurs",
    "Intégration complète des paiements mobiles",
    "Réduction de 40% des délais de livraison",
  ],
};

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Application Web",
    categoryColor: "purple" as const,
    title: "Outil de gestion PME",
    description: "Solution logicielle pour la gestion des stocks, la facturation et le suivi commercial. Automatisation des processus métier.",
    tags: ["Gestion", "Automatisation", "Dashboard"],
    type: "application",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    category: "Site Vitrine",
    categoryColor: "blue" as const,
    title: "Présence digitale ONG",
    description: "Site institutionnel professionnel avec présentation des projets, collecte de dons et espace partenaires.",
    tags: ["Site Web", "SEO", "Dons en ligne"],
    type: "plateforme",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    category: "Communication",
    categoryColor: "orange" as const,
    title: "Stratégie réseaux sociaux",
    description: "Définition et déploiement d'une stratégie de communication digitale. Création de contenus et animation de communauté.",
    tags: ["Social Media", "Contenus", "Engagement"],
    type: "communication",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",
    category: "Application Web",
    categoryColor: "green" as const,
    title: "Plateforme de suivi agricole",
    description: "Application de collecte de données terrain, géolocalisation des parcelles et génération de rapports automatiques.",
    tags: ["Suivi", "Mobile", "Rapports"],
    type: "application",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    category: "E-commerce",
    categoryColor: "blue" as const,
    title: "Boutique en ligne artisanat",
    description: "Plateforme e-commerce avec intégration des paiements locaux et internationaux. Gestion des expéditions.",
    tags: ["E-commerce", "Paiements", "Logistique"],
    type: "plateforme",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    category: "Application Web",
    categoryColor: "purple" as const,
    title: "Tableau de bord analytique",
    description: "Dashboard de suivi et d'évaluation avec visualisation des données et génération de rapports.",
    tags: ["Analytics", "Dashboard", "Reporting"],
    type: "application",
  },
];

const testimonials = [
  {
    quote: "Moon.innov a su comprendre nos besoins et nous proposer une solution adaptée à notre contexte. L'accompagnement a été exemplaire du début à la fin.",
    author: "Amadou D.",
    role: "Directeur, Coopérative agricole",
  },
  {
    quote: "Notre présence digitale a été transformée. Nous avons maintenant une image professionnelle qui reflète vraiment notre engagement.",
    author: "Mariama S.",
    role: "Directrice, ONG Education",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.type === activeCategory);

  return (
    <div className="bg-grid">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Nos Réalisations
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Des solutions concrètes,
            <br />
            <span className="gradient-text">des résultats mesurables.</span>
          </h1>
          
          <p className="text-foreground-muted text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Découvrez comment nous accompagnons PME, entrepreneurs et organisations dans leur transformation digitale.
          </p>
          
          <Button href="#projets" variant="primary" size="lg">
            Voir les projets
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Featured Project */}
      <Section id="projets" background="secondary">
        <div className="flex items-center gap-2 text-primary font-medium mb-6">
          <Star className="w-5 h-5 fill-primary" />
          Projet en vedette
        </div>
        
        <Card className="overflow-hidden p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${featuredProject.image})` }}
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-white">
                  {featuredProject.category}
                </span>
                <span className="text-foreground-muted text-sm">
                  {featuredProject.tech}
                </span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {featuredProject.title}
              </h3>
              
              <p className="text-foreground-muted leading-relaxed mb-6">
                {featuredProject.description}
              </p>
              
              <div className="flex items-center gap-8 mb-6">
                {featuredProject.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-foreground-muted text-xs uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                {featuredProject.results.map((result) => (
                  <div key={result} className="flex items-center gap-2 text-foreground-muted text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {result}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Filter Tabs */}
      <Section>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-background-card border border-border text-foreground-muted hover:text-white hover:border-primary/50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              <Card className="overflow-hidden p-0 h-full">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.categoryColor === "blue" ? "bg-primary text-white" :
                      project.categoryColor === "green" ? "bg-emerald-500 text-white" :
                      project.categoryColor === "purple" ? "bg-purple-500 text-white" :
                      "bg-orange-500 text-white"
                    }`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground-muted text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-background border border-border text-foreground-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-background-card border border-border flex items-center justify-center text-foreground-muted group-hover:text-primary group-hover:border-primary transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section background="secondary">
        <SectionHeader
          title="Ils nous font confiance"
          description="Des organisations satisfaites qui témoignent de notre accompagnement."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="relative">
              <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/20" />
              <div className="pt-8">
                <p className="text-white text-lg italic leading-relaxed mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-foreground-muted text-sm">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <CTASection
        title="Un projet en tête ?"
        description="Discutons de vos besoins. Nous vous accompagnons de l'idée à la réalisation."
        primaryButtonText="Démarrer un projet"
        primaryButtonHref="/contact"
        variant="default"
      />
    </div>
  );
}
