import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moon.innov | Hub de création de solutions digitales",
  description: "Moon.innov accompagne les PME, entrepreneurs et organisations dans leur transformation digitale. Expertise, innovation et solutions concrètes adaptées aux réalités africaines.",
  keywords: ["solutions digitales", "transformation digitale", "Afrique", "PME", "e-commerce", "applications web", "communication digitale"],
  authors: [{ name: "Moon.innov" }],
  openGraph: {
    title: "Moon.innov | Hub de création de solutions digitales",
    description: "Accompagnement à la transformation digitale pour PME, entrepreneurs et organisations en Afrique",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" >
      <body
        className={`${sora.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
