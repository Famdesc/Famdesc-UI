export interface Project {
  slug: string;
  name: string;
  type: string;
  summary: string;
  context: string;
  challenge: string;
  solution: string;
  result: string;
  features: string[];
  cardTechnologies: string[];
  technologies: string[];
  participation: string[];
  productionUrl: string;
  accent: "salmon" | "blue" | "amber";
  eyebrow: string;
}

export const projects: Project[] = [
  {
    slug: "serenity",
    name: "Serenity by Eneida M. Ortega",
    type: "Plataforma web bilingüe",
    summary:
      "Una presencia digital ejecutiva para servicios notariales e inmobiliarios en South Florida.",
    context:
      "Serenity ofrece servicios notariales y de real estate a una audiencia que se comunica tanto en inglés como en español.",
    challenge:
      "El negocio necesitaba presentar sus servicios con claridad y autoridad, facilitar las consultas y mantener contenido útil en dos idiomas sin depender de una infraestructura compleja.",
    solution:
      "Diseñamos y desarrollamos una plataforma bilingüe, rápida y adaptable, con páginas de servicios, sistema de citas, formularios de contacto y un blog administrado como contenido estructurado.",
    result:
      "Una plataforma profesional en producción que permite explicar los servicios, captar nuevos contactos y publicar contenido en ambos idiomas desde una base técnica fácil de mantener.",
    features: [
      "Experiencia completa en inglés y español",
      "Solicitud de citas y formularios de contacto",
      "Blog bilingüe optimizado para buscadores",
      "Diseño adaptable a móviles y escritorio",
    ],
    cardTechnologies: [
      "Astro",
      "React",
      "Tailwind CSS",
      "EmailJS",
      "Cloudflare",
    ],
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "React", "EmailJS", "Cloudflare"],
    participation: [
      "Definición de requisitos y arquitectura",
      "Adaptación del diseño a la identidad del negocio",
      "Desarrollo frontend y formularios",
      "Despliegue, dominio y soporte técnico",
    ],
    productionUrl: "https://serenity.ortegaempire.com",
    accent: "salmon",
    eyebrow: "Servicios profesionales",
  },
  {
    slug: "viking-pressure-service",
    name: "Viking Pressure Service",
    type: "Sitio web comercial bilingüe",
    summary:
      "Un sitio orientado a solicitudes de cotización para una empresa de limpieza exterior en South Florida.",
    context:
      "Viking Pressure Service atiende hogares y negocios con servicios de lavado a presión y limpieza de exteriores.",
    challenge:
      "La empresa necesitaba mostrar la calidad de sus trabajos, atender clientes en dos idiomas y convertir las visitas en solicitudes de presupuesto verificables.",
    solution:
      "Creamos un sitio bilingüe con una presentación directa de servicios, galería de antes y después, contacto por WhatsApp y un formulario de cotización protegido con Cloudflare Turnstile contra bots y envíos automatizados.",
    result:
      "Una presencia web rápida y enfocada en clientes locales, preparada para mostrar resultados reales y recibir solicitudes desde cualquier dispositivo.",
    features: [
      "Contenido en inglés y español",
      "Galería visual de trabajos realizados",
      "Formulario de cotización protegido con Cloudflare Turnstile",
      "Contacto directo mediante WhatsApp",
    ],
    cardTechnologies: [
      "Astro",
      "Cloudflare Workers",
      "Cloudflare Turnstile",
      "EmailJS",
      "TypeScript",
    ],
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "Cloudflare Workers", "Turnstile", "EmailJS"],
    participation: [
      "Análisis de las necesidades del negocio",
      "Diseño y desarrollo de la experiencia bilingüe",
      "Integración del flujo de cotizaciones",
      "Protección anti-bots y prevención de spam con Turnstile",
      "Configuración de seguridad, despliegue y dominio",
    ],
    productionUrl: "https://vikingpressureservice.com",
    accent: "blue",
    eyebrow: "Servicios locales",
  },
  {
    slug: "famdesc",
    name: "Famdesc",
    type: "Plataforma y ecosistema propio",
    summary:
      "La plataforma corporativa que conecta los productos, contenidos y soluciones digitales de Famdesc.",
    context:
      "Famdesc es una empresa tecnológica centrada en las personas, con productos propios y una visión de largo plazo alrededor de la tecnología familiar.",
    challenge:
      "Era necesario reunir varias líneas de trabajo en una experiencia coherente, multilingüe y rápida; proteger los formularios frente al spam y preparar una base backend capaz de acompañar la evolución de la empresa.",
    solution:
      "Construimos una plataforma modular con páginas corporativas, contenidos, productos y versiones localizadas. Los formularios incorporan validación en cliente y servidor, además de Cloudflare Turnstile contra bots. En un repositorio independiente desarrollamos la base de una API REST con NestJS, autenticación y persistencia PostgreSQL, todavía sin conectar al sitio público y preparada para futuras etapas de la plataforma.",
    result:
      "Una base digital en producción que comunica la visión de Famdesc, recibe contactos con protección contra spam y puede crecer progresivamente mediante su capa backend, nuevas soluciones, productos y casos de éxito.",
    features: [
      "Arquitectura multilingüe",
      "Páginas de productos y contenidos",
      "Formularios protegidos con Cloudflare Turnstile",
      "API REST y gestión inicial de usuarios",
      "Autenticación JWT con tokens de acceso y renovación",
      "Persistencia PostgreSQL con esquema y migraciones",
    ],
    cardTechnologies: [
      "Astro",
      "NestJS",
      "PostgreSQL",
      "Prisma ORM",
      "Cloudflare Turnstile",
      "JWT y bcrypt",
    ],
    technologies: [
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      "Cloudflare Turnstile",
      "Google Apps Script",
      "NestJS",
      "PostgreSQL",
      "Prisma ORM",
      "JWT y bcrypt",
      "CQRS",
      "Docker",
      "Jest y Supertest",
    ],
    participation: [
      "Dirección del producto y definición de visión",
      "Arquitectura y desarrollo de la plataforma",
      "Diseño de la identidad y experiencia digital",
      "Formularios y protección anti-bots contra el spam",
      "Diseño de API y arquitectura por capas con puertos y adaptadores",
      "Modelado de datos, migraciones y autenticación backend",
      "Mantenimiento y evolución continua",
    ],
    productionUrl: "https://famdesc.com",
    accent: "amber",
    eyebrow: "Producto propio",
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
