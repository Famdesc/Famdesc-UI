import amazonIcon from "../images/logos/amazon.avif";
import cefccIcon from "../images/logos/ce-fcc.avif";
import oshwaIcon from "../images/logos/oshwa.avif";
import rohsIcon from "../images/logos/rohs.avif";
type SliderItem = {
  type: "certification" | "testimonial";
  title: string;
  description: string;
  author?: string;
  role?: string;
  avatar?: string;
  icon?: ImageMetadata;
  badgeText?: string
};

export const usSliderData: SliderItem[] = [
  {
    type: "certification",
    title: "Amazon FBA Ready",
    description:
      "Prepared for Amazon FBA distribution. Public Amazon listing link will be added after launch.",
    icon: amazonIcon,
    badgeText: "Distribution Status",
  },
  {
    type: "testimonial",
    title: "Delivery Efficiency",
    description:
      "The logistics operation is flawless. My hardware orders from Famdesc arrive on time, with sealed packaging and precise end-to-end tracking.",
    author: "Yuri",
    role: "FSA Customer",
    avatar:
      "https://raw.githubusercontent.com/nardis9501/avatar/main/yuri.avif",
  },
  {
    type: "certification",
    title: "CE & FCC Requirements",
    description:
      "Designed to meet CE and FCC compliance requirements. Updated supplier PDF documentation has been requested.",
    icon: cefccIcon,
    badgeText: "Documentation Requested",
  },
  {
    type: "testimonial",
    title: "Precision Engineering",
    description:
      "We analyzed the frequency response and structural strength of the FSA One Line Pro; its interference shielding and durability exceed standard commercial specifications.",
    author: "Alejandro Ruiz",
    role: "Systems Engineer",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    type: "certification",
    title: "WEEE Requirements",
    description:
      "Designed with WEEE electrical and electronic equipment responsibilities in mind before market launch.",
    icon: oshwaIcon,
    badgeText: "Compliance Planning",
  },
  {
    type: "testimonial",
    title: "Founder & CEO of Famdesc",
    description:
      "We don't build disposable technology for fast consumption; we create heavy-duty physical tools designed to last and preserve our community's legacies.",
    author: "Nardis Del Campo Soler",
    role: "CEO | Famdesc",
    avatar:
      "https://raw.githubusercontent.com/nardis9501/avatar/main/nardis.webp",
  },
  {
    type: "certification",
    title: "RoHS Requirements",
    description:
      "Designed to meet RoHS restrictions on hazardous substances. Supplier documents are being requested for validation.",
    icon: rohsIcon,
    badgeText: "Documentation Requested",
  },
  {
    type: "testimonial",
    title: "Technology with a Purpose",
    description:
      "It gives peace of mind to support an umbrella company that, while expanding its premium audio and hardware lines, maintains respect for the environment and people as a non-negotiable foundation.",
    author: "Famdesc Community",
    role: "Users and Contributors",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
  },
];

export const esSliderData: SliderItem[] = [
  {
    type: "certification",
    title: "Amazon FBA Ready",
    description:
      "Preparado para distribución por Amazon FBA. El enlace público al listing se agregará después del lanzamiento.",
    icon: amazonIcon,
    badgeText: "Estado de Distribución",
  },
  {
    type: "testimonial",
    title: "Eficiencia de Entrega",
    description:
      "El despliegue logístico es impecable. Mis pedidos de hardware de Famdesc llegan a tiempo, con empaques sellados y un rastreo milimétrico de punta a punta.",
    author: "Yuri",
    role: "Cliente FSA",
    avatar:
      "https://raw.githubusercontent.com/nardis9501/avatar/main/yuri.avif", // Puedes usar el avatar de tu repositorio
  },
  {
    type: "certification",
    title: "Requisitos CE & FCC",
    description:
      "Diseñado para cumplir requisitos CE y FCC. Se han solicitado al proveedor los PDFs actualizados.",
    icon: cefccIcon,
    badgeText: "Documentación Solicitada",
  },
  {
    type: "testimonial",
    title: "Ingeniería de Precisión",
    description:
      "Analizamos la respuesta de frecuencia y la resistencia estructural del FSA Line One Pro; el blindaje contra interferencias y la durabilidad superan los estándares comerciales ordinarios.",
    author: "Alejandro Ruiz",
    role: "Ingeniero de Sistemas",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    type: "certification",
    title: "Requisitos WEEE",
    description:
      "Diseñado considerando responsabilidades WEEE para equipos eléctricos y electrónicos antes del lanzamiento.",
    icon: oshwaIcon,
    badgeText: "Plan de Cumplimiento",
  },
  {
    type: "testimonial",
    title: "Fundador & CEO de Famdesc",
    description:
      "No construimos tecnología desechable para el consumo rápido; creamos herramientas físicas de alta resistencia diseñadas para durar y preservar los legados de nuestra comunidad.",
    author: "Nardis Del Campo Soler",
    role: "CEO | Famdesc",
    avatar:
      "https://raw.githubusercontent.com/nardis9501/avatar/main/nardis.webp",
  },
  {
    type: "certification",
    title: "Requisitos RoHS",
    description:
      "Diseñado para cumplir restricciones RoHS sobre sustancias peligrosas. La documentación del proveedor está solicitada.",
    icon: rohsIcon,
    badgeText: "Documentación Solicitada",
  },
  {
    type: "testimonial",
    title: "Tecnología Con Propósito",
    description:
      "Da tranquilidad respaldar a una empresa paraguas que, mientras expande sus líneas de audio y hardware premium, mantiene el respeto ambiental y humano como base innegociable.",
    author: "Comunidad Famdesc",
    role: "Usuarios y Colaboradores",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
  },
];

export const frSliderData: SliderItem[] = [
  {
    type: "certification",
    title: "Amazon FBA Ready",
    description:
      "Préparé pour une distribution Amazon FBA. Le lien public sera ajouté après le lancement.",
    icon: amazonIcon,
    badgeText: "Statut de Distribution",
  },
  {
    type: "testimonial",
    title: "Efficacité de la livraison",
    description:
      '"Le déploiement logistique est impeccable. Mes commandes de matériel Famdesc arrivent à temps, dans des emballages scellés et avec un suivi précis de bout en bout."',
    author: "Yuri",
    role: "Client FSA",
    avatar:
      "https://raw.githubusercontent.com/nardis9501/avatar/main/yuri.avif", // Vous pouvez utiliser l'avatar de votre référentiel
  },
  {
    type: "certification",
    title: "Exigences CE & FCC",
    description:
      "Conçu pour répondre aux exigences CE et FCC. Les PDFs fournisseur actualisés ont été demandés.",
    icon: cefccIcon,
    badgeText: "Documentation Demandée",
  },
  {
    type: "testimonial",
    title: "Ingénierie de précision",
    description:
      "Nous avons analysé la réponse en fréquence et la résistance structurelle du FSA Line One Pro ; le blindage contre les interférences et la durabilité dépassent les normes commerciales habituelles.",
    author: "Alejandro Ruiz",
    role: "Ingénieur systèmes",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    type: "certification",
    title: "Exigences WEEE",
    description:
      "Conçu en tenant compte des responsabilités WEEE pour équipements électriques et électroniques avant lancement.",
    icon: oshwaIcon,
    badgeText: "Plan de Conformité",
  },
  {
    type: "testimonial",
    title: "Fondateur et PDG de Famdesc",
    description:
      "Nous ne construisons pas de technologies jetables destinées à une consommation rapide ; nous créons des outils physiques hautement résistants, conçus pour durer et préserver l'héritage de notre communauté.",
    author: "Nardis Del Campo Soler",
    role: "PDG | Famdesc",
    avatar:
      "https://raw.githubusercontent.com/nardis9501/avatar/main/nardis.webp",
  },
  {
    type: "certification",
    title: "Exigences RoHS",
    description:
      "Conçu pour répondre aux restrictions RoHS sur les substances dangereuses. La documentation fournisseur a été demandée.",
    icon: rohsIcon,
    badgeText: "Documentation Demandée",
  },
  {
    type: "testimonial",
    title: "Une technologie qui a du sens",
    description:
      "C'est rassurant de soutenir une entreprise qui, tout en développant ses gammes d'audio et de matériel haut de gamme, fait du respect de l'environnement et de l'humain un principe non négociable.",
    author: "Communauté Famdesc",
    role: "Utilisateurs et contributeurs",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
  },
];

export default {
  usSliderData,
  esSliderData,
  frSliderData,
};
