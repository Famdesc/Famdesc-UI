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
      "Creamos un sitio bilingüe con una presentación directa de servicios, galería de antes y después, contacto por WhatsApp y un formulario de cotización protegido contra envíos automatizados.",
    result:
      "Una presencia web rápida y enfocada en clientes locales, preparada para mostrar resultados reales y recibir solicitudes desde cualquier dispositivo.",
    features: [
      "Contenido en inglés y español",
      "Galería visual de trabajos realizados",
      "Formulario seguro de solicitud de cotización",
      "Contacto directo mediante WhatsApp",
    ],
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "Cloudflare Workers", "Turnstile", "EmailJS"],
    participation: [
      "Análisis de las necesidades del negocio",
      "Diseño y desarrollo de la experiencia bilingüe",
      "Integración del flujo de cotizaciones",
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
      "Era necesario reunir varias líneas de trabajo en una experiencia coherente, multilingüe, rápida y preparada para evolucionar junto con la empresa.",
    solution:
      "Construimos una plataforma modular con páginas corporativas, contenidos, productos, formularios y versiones localizadas, manteniendo una identidad visual común.",
    result:
      "Una base digital en producción que comunica la visión de Famdesc y puede crecer progresivamente con nuevas soluciones, productos y casos de éxito.",
    features: [
      "Arquitectura multilingüe",
      "Páginas de productos y contenidos",
      "Formularios y lista de espera",
      "Diseño claro y adaptable",
    ],
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "Cloudflare"],
    participation: [
      "Dirección del producto y definición de visión",
      "Arquitectura y desarrollo de la plataforma",
      "Diseño de la identidad y experiencia digital",
      "Mantenimiento y evolución continua",
    ],
    productionUrl: "https://famdesc.com",
    accent: "amber",
    eyebrow: "Producto propio",
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
