export interface ClientTestimonial {
  projectSlug: string;
  projectName: string;
  quote: string;
  author: string;
  role: string;
  translations: {
    en: { quote: string; role: string };
    fr: { quote: string; role: string };
  };
  initials: string;
  status: "draft" | "approved";
  photo?: string;
  logo?: string;
  permissions: {
    quote: boolean;
    name: boolean;
    photo: boolean;
    logo: boolean;
  };
}

// Drafts for client review. Production pages only render approved entries.
export const clientTestimonials: ClientTestimonial[] = [
  {
    projectSlug: "serenity",
    projectName: "Serenity by Eneida M. Ortega",
    quote:
      "Famdesc entendió la visión de Serenity y la convirtió en una plataforma profesional, clara y cercana. El sitio nos permite presentar nuestros servicios en inglés y español, organizar las solicitudes de citas y transmitir la confianza que queremos ofrecer a cada cliente.",
    author: "Eneida M. Ortega",
    role: "Fundadora de Serenity",
    translations: {
      en: { quote: "Famdesc understood the vision behind Serenity and turned it into a professional, clear, and welcoming platform. The site helps us present our services in English and Spanish, organize appointment requests, and convey the trust we want every client to feel.", role: "Founder of Serenity" },
      fr: { quote: "Famdesc a compris la vision de Serenity et l'a transformée en une plateforme professionnelle, claire et accueillante. Le site nous aide à présenter nos services en anglais et en espagnol, à organiser les demandes de rendez-vous et à transmettre la confiance que nous voulons offrir à chaque client.", role: "Fondatrice de Serenity" },
    },
    initials: "EO",
    status: "approved",
    photo: "/images/testimonials/eneida-ortega.avif",
    logo: "/images/testimonials/serenity-logo.webp",
    permissions: { quote: true, name: true, photo: true, logo: true },
  },
  {
    projectSlug: "viking-pressure-service",
    projectName: "Viking Pressure Service",
    quote:
      "Necesitábamos una presencia digital que mostrara la calidad de nuestro trabajo y facilitara pedir una cotización. Famdesc creó un sitio bilingüe, rápido y fácil de usar, con una galería clara y un formulario protegido para recibir solicitudes reales.",
    author: "Carlos Alfonso",
    role: "Viking Pressure Service",
    translations: {
      en: { quote: "We needed a digital presence that showed the quality of our work and made requesting a quote easy. Famdesc created a fast, bilingual website with a clear gallery and a protected form that helps us receive genuine inquiries.", role: "Viking Pressure Service" },
      fr: { quote: "Nous avions besoin d'une présence numérique capable de montrer la qualité de notre travail et de simplifier les demandes de devis. Famdesc a créé un site bilingue et rapide, avec une galerie claire et un formulaire protégé qui nous permet de recevoir de véritables demandes.", role: "Viking Pressure Service" },
    },
    initials: "CA",
    status: "approved",
    logo: "/images/testimonials/viking-pressure-service-logo.webp",
    permissions: { quote: true, name: true, photo: false, logo: true },
  },
  {
    projectSlug: "famdesc",
    projectName: "Famdesc",
    quote:
      "Famdesc es la demostración de cómo trabajamos: una visión ambiciosa convertida paso a paso en productos reales, una plataforma multilingüe y una base tecnológica que une frontend, backend, seguridad y experiencia de usuario. Cada decisión busca construir tecnología útil y preparada para crecer.",
    author: "Nardis Del Campo Soler",
    role: "Fundador y líder de Famdesc",
    translations: {
      en: { quote: "Famdesc demonstrates how we work: turning an ambitious vision, step by step, into real products, a multilingual platform, and a technology foundation spanning frontend, backend, security, and user experience. Every decision is aimed at building useful technology that is ready to grow.", role: "Founder and lead, Famdesc" },
      fr: { quote: "Famdesc illustre notre manière de travailler : transformer progressivement une vision ambitieuse en produits concrets, en plateforme multilingue et en socle technologique réunissant frontend, backend, sécurité et expérience utilisateur. Chaque décision vise une technologie utile et prête à évoluer.", role: "Fondateur et dirigeant de Famdesc" },
    },
    initials: "ND",
    status: "approved",
    photo: "/images/testimonials/nardis-del-campo.avif",
    permissions: { quote: true, name: true, photo: true, logo: true },
  },
];
