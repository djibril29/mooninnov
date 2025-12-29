"use client";

import { useState } from "react";
import { Star, ArrowRight, Quote, Sparkles, CheckCircle, ExternalLink } from "lucide-react";
import { Section, SectionHeader } from "@/app/components/section";
import { Button } from "@/app/components/button";
import { Card } from "@/app/components/card";
import { CTASection } from "@/app/components/cta-section";
import Link from "next/link";

const categories = [
  { id: "all", name: "Tout" },
  { id: "plateforme", name: "Plateformes" },
  { id: "ecommerce", name: "E-commerce" },
  { id: "application", name: "Applications" },
];

const featuredProject = {
  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=800&fit=crop",
  category: "ONG",
  client: "J-GEN Sénégal",
  title: "Plateforme & Communication Digitale",
  description: "J-GEN Women Global Entrepreneurship est une association féministe qui œuvre pour l'élimination des violences basées sur le genre et la promotion des droits des femmes au Sénégal. Nous assurons la gestion globale de leur présence digitale : site web institutionnel, stratégie de communication, gestion des réseaux sociaux et création de contenus.",
  link: "https://www.jgen.sn/",
  services: [
    "Création et maintenance du site web",
    "Stratégie de communication digitale",
    "Gestion des réseaux sociaux",
    "Création de contenus à forte valeur ajoutée",
  ],
};

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    category: "E-commerce",
    categoryColor: "blue" as const,
    client: "Aïda Création",
    title: "Boutique E-commerce Mode",
    description: "Plateforme e-commerce de mode avec gestion des commandes, paiements intégrés et stratégie de communication sur les réseaux sociaux.",
    tags: ["E-commerce", "Mode", "Social Media"],
    type: "ecommerce",
    link: "#",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
    category: "E-commerce",
    categoryColor: "purple" as const,
    client: "Allemagne Beauty",
    title: "Site E-commerce Cosmétiques",
    description: "Plateforme de vente de produits cosmétiques importés d'Allemagne. Gestion complète de la présence digitale et de la stratégie de communication.",
    tags: ["E-commerce", "Cosmétiques", "Communication"],
    type: "ecommerce",
    link: "https://allemagnebeauty.com/",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop",
    category: "Site Institutionnel",
    categoryColor: "green" as const,
    client: "BTLabs Consulting",
    title: "Cabinet d'Études Environnementales",
    description: "Site vitrine professionnel pour un cabinet d'études environnementales et sociales. Présence digitale complète et gestion de la communication.",
    tags: ["Site Web", "Consulting", "Environnement"],
    type: "plateforme",
    link: "#",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
    category: "Application Web",
    categoryColor: "orange" as const,
    client: "Wooma",
    title: "Mise en relation Ouvriers-Clients",
    description: "Application web de mise en relation entre ouvriers qualifiés et clients. Développement de la plateforme et accompagnement digital.",
    tags: ["Application", "Marketplace", "Services"],
    type: "application",
    link: "#",
  },
];

const services = [
  "Création de plateformes digitales",
  "Gestion de stratégie de communication",
  "Gestion des réseaux sociaux",
  "Présence digitale globale",
];

const testimonials = [
  {
    quote: "Moon.innov nous accompagne depuis le début dans notre transformation digitale. Leur compréhension de notre mission et leur expertise nous permettent de toucher plus de femmes et de filles au Sénégal.",
    author: "J-GEN Sénégal",
    role: "Women Global Entrepreneurship",
  },
  {
    quote: "Une équipe professionnelle qui comprend les enjeux de l'e-commerce. Notre boutique en ligne et notre présence sur les réseaux sociaux ont considérablement évolué grâce à leur accompagnement.",
    author: "Allemagne Beauty",
    role: "E-commerce Cosmétiques",
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
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Projets en cours,
            <br />
            <span className="gradient-text">clients accompagnés.</span>
          </h1>
          
          <p className="text-foreground-muted text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Découvrez les organisations que nous accompagnons dans leur transformation digitale. Gestion globale de leur présence numérique.
          </p>
          
          <Button href="#projets" variant="primary" size="lg">
            Voir les projets
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* What We Do */}
      <Section background="secondary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Notre accompagnement</h2>
          <p className="text-foreground-muted mb-8">
            Pour chaque client, nous assurons une gestion globale de leur présence digitale :
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service) => (
              <span
                key={service}
                className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Project */}
      <Section id="projets">
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
              <div className="absolute inset-0 bg-gradient-to-t from-background-card/80 to-transparent lg:hidden" />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-white">
                  {featuredProject.category}
                </span>
                <span className="text-foreground-muted text-sm">
                  {featuredProject.client}
                </span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                {featuredProject.title}
              </h3>
              
              <p className="text-foreground-muted leading-relaxed mb-6">
                {featuredProject.description}
              </p>

              <div className="space-y-2 mb-6">
                {featuredProject.services.map((service) => (
                  <div key={service} className="flex items-center gap-2 text-foreground-muted text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {service}
                  </div>
                ))}
              </div>
              
              <Link
                href={featuredProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Visiter le site
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Card>
      </Section>

      {/* Filter Tabs */}
      <Section background="secondary">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-background-card border border-border text-foreground-muted hover:text-primary hover:border-primary/50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              <Card className="overflow-hidden p-0 h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-card via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.categoryColor === "blue" ? "bg-primary text-white" :
                      project.categoryColor === "green" ? "bg-emerald-500 text-white" :
                      project.categoryColor === "purple" ? "bg-purple-500 text-white" :
                      "bg-orange-500 text-white"
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-foreground font-semibold text-lg">{project.client}</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-background border border-border text-foreground-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link !== "#" && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-background-card border border-border flex items-center justify-center text-foreground-muted group-hover:text-primary group-hover:border-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section>
        <SectionHeader
          title="Ils témoignent"
          description="Retours de nos clients sur notre accompagnement."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="relative">
              <Quote className="absolute top-6 left-6 w-8 h-8 text-primary/20" />
              <div className="pt-8">
                <p className="text-foreground text-lg italic leading-relaxed mb-6">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="text-foreground font-semibold">{testimonial.author}</p>
                  <p className="text-foreground-muted text-sm">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <CTASection
        title="Vous souhaitez être accompagné ?"
        description="Discutons de votre projet. Nous assurons la gestion globale de votre présence digitale."
        primaryButtonText="Démarrer un projet"
        primaryButtonHref="/contact"
        variant="default"
      />
    </div>
  );
}
