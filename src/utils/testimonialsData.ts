type SliderItem = {
  type: "certification" | "testimonial";
  title: string;
  description: string;
  author?: string;
  role?: string;
  avatar?: string;
  icon?: string;
};

export const usSliderData: SliderItem[] = [
  {
    type: "certification",
    title: "Amazon FBA Ready",
    description:
      "Optimized for automated distribution through international warehouses and fulfillment networks.",
    icon: "src/images/logos/amazon.avif",
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
    title: "CE & FCC Compliant",
    description:
      "Legal compliance with European and American safety, health, and electromagnetic compatibility directives.",
    icon: "src/images/logos/ce-fcc.avif",
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
    title: "OSHWA Open Hardware",
    description:
      "Official open hardware certification, ensuring schematics that are readable, modifiable, and fully auditable.",
    icon: "src/images/logos/oshwa.avif",
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
    title: "RoHS Certified",
    description:
      "Compliance with restrictions on hazardous substances in electrical and electronic manufacturing.",
    icon: "src/images/logos/rohs.avif",
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

export default {
  usSliderData,
};
