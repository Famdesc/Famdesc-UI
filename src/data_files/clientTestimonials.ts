export interface ClientTestimonial {
  projectSlug: string;
  projectName: string;
  quote: string;
  author: string;
  role: string;
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
    initials: "ND",
    status: "approved",
    photo: "/images/testimonials/nardis-del-campo.avif",
    permissions: { quote: true, name: true, photo: true, logo: true },
  },
];
