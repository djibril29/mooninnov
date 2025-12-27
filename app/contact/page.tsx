"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Quote, Linkedin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/app/components/button";
import { Card } from "@/app/components/card";

const projectTypes = [
  "Site vitrine professionnel",
  "Boutique e-commerce",
  "Application web sur mesure",
  "Outil de gestion / ERP",
  "Communication digitale",
  "Stratégie réseaux sociaux",
  "Autre / Je ne sais pas encore",
];

const budgetRanges = [
  "< 500 000 FCFA",
  "500 000 - 1 500 000 FCFA",
  "1 500 000 - 5 000 000 FCFA",
  "5 000 000 - 15 000 000 FCFA",
  "> 15 000 000 FCFA",
  "À définir ensemble",
];

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "contact@moon-innov.com",
    subtext: "Réponse sous 24h",
    href: "mailto:contact@moon-innov.com",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Téléphone",
    value: "+221 77 123 45 67",
    subtext: "Lun-Ven, 9h-18h",
    href: "tel:+221771234567",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Bureau",
    value: "Dakar, Sénégal",
    subtext: "Point E",
    href: "https://maps.google.com/?q=Point+E+Dakar+Senegal",
  },
];

const testimonial = {
  quote: "L'équipe Moon.innov a su nous accompagner avec pédagogie et professionnalisme. Ils ont pris le temps de comprendre nos besoins avant de proposer une solution adaptée.",
  author: "Fatou N.",
  role: "Directrice, PME Services",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "Site vitrine professionnel",
    budget: "À définir ensemble",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Merci pour votre message ! Nous vous répondrons sous 24h.");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-grid min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Parlons de{" "}
            <span className="gradient-text">votre projet.</span>
          </h1>
          <p className="text-foreground-muted text-lg max-w-2xl">
            Décrivez-nous vos besoins et vos objectifs. Nous vous accompagnons à chaque étape de votre transformation digitale.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form Section */}
            <div className="lg:col-span-3">
              <Card className="p-6 md:p-8">
                <h2 className="text-xl font-semibold text-white mb-2">
                  Décrivez votre projet
                </h2>
                <p className="text-foreground-muted text-sm mb-6">
                  Plus vous êtes précis, mieux nous pourrons vous accompagner.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Votre nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Prénom Nom"
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl text-white placeholder:text-foreground-secondary focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Organisation (optionnel)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nom de votre structure"
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl text-white placeholder:text-foreground-secondary focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="vous@exemple.com"
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl text-white placeholder:text-foreground-secondary focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Téléphone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+221 77..."
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl text-white placeholder:text-foreground-secondary focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Type de projet
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 12px center",
                          backgroundSize: "20px",
                        }}
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-white mb-2"
                      >
                        Budget indicatif
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 12px center",
                          backgroundSize: "20px",
                        }}
                      >
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Décrivez votre projet
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Parlez-nous de votre activité, vos objectifs, les défis que vous souhaitez relever grâce au digital..."
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-white placeholder:text-foreground-secondary focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                    <Send className="w-4 h-4" />
                    Envoyer ma demande
                  </Button>
                </form>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Info */}
              <Card>
                <h3 className="text-lg font-semibold text-white mb-2">Contact direct</h3>
                <p className="text-foreground-muted text-sm mb-6">
                  Vous préférez échanger de vive voix ? Nous sommes disponibles.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 p-3 rounded-xl hover:bg-background transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-foreground-muted text-xs mb-0.5">{item.label}</p>
                        <p className="text-white font-medium group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                        <p className="text-foreground-secondary text-xs">{item.subtext}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/221771234567?text=Bonjour%2C%20je%20souhaite%20discuter%20d%27un%20projet%20digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 w-full px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-medium transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Discuter sur WhatsApp
                </a>

                {/* Social Links */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-foreground-muted text-sm mb-4">Nous suivre</p>
                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground-muted hover:text-primary hover:border-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Card>

              {/* Response Time Card */}
              <Card className="bg-primary/5 border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Réponse rapide</h4>
                    <p className="text-foreground-muted text-sm">
                      Nous revenons vers vous sous 24h avec une première analyse de votre projet.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Testimonial */}
              <Card>
                <Quote className="w-6 h-6 text-primary mb-4" />
                <p className="text-white italic leading-relaxed mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="text-foreground-muted text-sm">
                  — <span className="text-white font-medium">{testimonial.author}</span>, {testimonial.role}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
