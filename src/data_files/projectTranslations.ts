import { projects, type Project } from "@data/projects";

type LocalizedProject = Pick<
  Project,
  | "type"
  | "summary"
  | "context"
  | "challenge"
  | "solution"
  | "result"
  | "features"
  | "participation"
  | "eyebrow"
>;

export type PortfolioLocale = "en" | "fr";

const translations: Record<PortfolioLocale, Record<string, LocalizedProject>> = {
  en: {
    serenity: {
      type: "Bilingual web platform",
      eyebrow: "Professional services",
      summary: "An executive digital presence for notary and real estate services in South Florida.",
      context: "Serenity provides notary and real estate services to clients who communicate in English and Spanish.",
      challenge: "The business needed to present its services with clarity and authority, simplify inquiries, and maintain useful content in two languages without unnecessary infrastructure.",
      solution: "We designed and developed a fast, responsive bilingual platform with service pages, appointment requests, contact forms, and a structured-content blog.",
      result: "A professional production platform that explains the offer, captures new inquiries, and supports publishing in both languages from a maintainable technical foundation.",
      features: ["Complete English and Spanish experience", "Appointment requests and contact forms", "SEO-ready bilingual blog", "Responsive desktop and mobile design"],
      participation: ["Requirements and architecture definition", "Design adaptation to the business identity", "Frontend and form development", "Deployment, domain, and technical support"],
    },
    "viking-pressure-service": {
      type: "Bilingual business website",
      eyebrow: "Local services",
      summary: "A quote-focused website for an exterior cleaning company serving South Florida.",
      context: "Viking Pressure Service provides pressure washing and exterior cleaning for homes and businesses.",
      challenge: "The company needed to demonstrate the quality of its work, serve customers in two languages, and turn visits into legitimate quote requests.",
      solution: "We built a bilingual site with clear service information, a before-and-after gallery, WhatsApp contact, and a quote form protected by Cloudflare Turnstile against bots and automated spam.",
      result: "A fast local-business presence ready to show real results and receive qualified inquiries from any device.",
      features: ["English and Spanish content", "Before-and-after project gallery", "Quote form protected with Cloudflare Turnstile", "Direct WhatsApp contact"],
      participation: ["Business-needs analysis", "Bilingual experience design and development", "Quote-request workflow integration", "Anti-bot and spam protection with Turnstile", "Security, deployment, and domain configuration"],
    },
    famdesc: {
      type: "Owned platform and ecosystem",
      eyebrow: "Owned product",
      summary: "The corporate platform connecting Famdesc products, content, and digital solutions.",
      context: "Famdesc is a people-centered technology company with its own products and a long-term vision for family technology.",
      challenge: "Multiple lines of work needed one coherent, multilingual, fast experience, protected forms, and a backend foundation able to support the company's evolution.",
      solution: "We built a modular platform for corporate pages, content, products, and localized experiences. Forms use client- and server-side validation plus Cloudflare Turnstile. A separate NestJS REST API foundation adds authentication and PostgreSQL persistence for future platform stages; it is not yet connected to the public site.",
      result: "A production foundation that communicates the Famdesc vision, receives spam-protected inquiries, and can grow through backend services, new solutions, products, and case studies.",
      features: ["Multilingual architecture", "Product and content publishing", "Cloudflare Turnstile-protected forms", "REST API and initial user management", "JWT access and refresh authentication", "PostgreSQL schema and migrations"],
      participation: ["Product leadership and vision", "Platform architecture and development", "Brand and digital-experience design", "Forms and anti-bot protection", "Layered API design with ports and adapters", "Data modeling, migrations, and backend authentication", "Ongoing maintenance and evolution"],
    },
  },
  fr: {
    serenity: {
      type: "Plateforme web bilingue",
      eyebrow: "Services professionnels",
      summary: "Une présence numérique haut de gamme pour des services notariaux et immobiliers en Floride du Sud.",
      context: "Serenity accompagne une clientèle anglophone et hispanophone dans ses démarches notariales et immobilières.",
      challenge: "L'entreprise devait présenter ses services avec clarté et crédibilité, simplifier les prises de contact et publier du contenu utile en deux langues sans infrastructure inutilement complexe.",
      solution: "Nous avons conçu une plateforme bilingue, rapide et responsive, avec pages de services, demandes de rendez-vous, formulaires de contact et blog basé sur des contenus structurés.",
      result: "Une plateforme professionnelle en production qui valorise les services, recueille de nouvelles demandes et facilite la publication bilingue sur une base maintenable.",
      features: ["Expérience complète en anglais et en espagnol", "Demandes de rendez-vous et formulaires", "Blog bilingue optimisé pour le référencement", "Design adapté au mobile et au bureau"],
      participation: ["Définition des besoins et de l'architecture", "Adaptation du design à l'identité de l'entreprise", "Développement frontend et formulaires", "Déploiement, domaine et assistance technique"],
    },
    "viking-pressure-service": {
      type: "Site commercial bilingue",
      eyebrow: "Services locaux",
      summary: "Un site pensé pour générer des demandes de devis pour une entreprise de nettoyage extérieur en Floride du Sud.",
      context: "Viking Pressure Service propose le lavage haute pression et le nettoyage extérieur aux particuliers comme aux entreprises.",
      challenge: "L'entreprise devait montrer la qualité de ses réalisations, servir ses clients dans deux langues et transformer les visites en demandes de devis légitimes.",
      solution: "Nous avons créé un site bilingue avec une présentation directe des services, une galerie avant-après, un contact WhatsApp et un formulaire protégé par Cloudflare Turnstile contre les robots et le spam automatisé.",
      result: "Une présence locale rapide, conçue pour présenter des résultats concrets et recevoir des demandes qualifiées depuis tout appareil.",
      features: ["Contenu anglais et espagnol", "Galerie avant-après", "Formulaire protégé par Cloudflare Turnstile", "Contact direct par WhatsApp"],
      participation: ["Analyse des besoins métier", "Conception et développement bilingues", "Intégration du parcours de devis", "Protection anti-robots avec Turnstile", "Configuration de la sécurité, du déploiement et du domaine"],
    },
    famdesc: {
      type: "Plateforme et écosystème propriétaire",
      eyebrow: "Produit propriétaire",
      summary: "La plateforme institutionnelle qui relie les produits, contenus et solutions numériques de Famdesc.",
      context: "Famdesc est une entreprise technologique centrée sur l'humain, avec ses propres produits et une vision à long terme pour la technologie familiale.",
      challenge: "Il fallait réunir plusieurs activités dans une expérience cohérente, multilingue et rapide, protéger les formulaires et préparer un socle backend capable d'accompagner l'évolution de l'entreprise.",
      solution: "Nous avons construit une plateforme modulaire pour les pages institutionnelles, les contenus, les produits et les versions localisées. Les formulaires combinent validation côté client et serveur avec Cloudflare Turnstile. Une API REST NestJS indépendante apporte authentification et persistance PostgreSQL pour les prochaines étapes, sans être encore connectée au site public.",
      result: "Un socle en production qui exprime la vision de Famdesc, reçoit des demandes protégées contre le spam et peut évoluer grâce au backend, à de nouvelles solutions et à de nouveaux produits.",
      features: ["Architecture multilingue", "Publication de produits et de contenus", "Formulaires protégés par Cloudflare Turnstile", "API REST et gestion initiale des utilisateurs", "Authentification JWT avec renouvellement", "Schéma PostgreSQL et migrations"],
      participation: ["Direction produit et définition de la vision", "Architecture et développement de la plateforme", "Identité et expérience numérique", "Formulaires et protection anti-robots", "API en couches avec ports et adaptateurs", "Modélisation, migrations et authentification backend", "Maintenance et évolution continues"],
    },
  },
};

export const getLocalizedProjects = (locale: PortfolioLocale): Project[] =>
  projects.map((project) => ({ ...project, ...translations[locale][project.slug] }));
