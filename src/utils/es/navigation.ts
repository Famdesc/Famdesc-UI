const navBarLinks = [
  { name: "Inicio", url: "/es" },
  { name: "Productos", url: "/products" },
  { name: "Servicios", url: "/es/services" },
  { name: "Hiring", url: "/es/hiring" },
  { name: "Nosotros", url: "/es/about" },
  { name: "Contacto", url: "/es/contact" },
];

const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      { name: "Productos FSA", url: "/products" },
      { name: "FSA Line One Pro", url: "/products/fsa-line-one-pro" },
      { name: "Famdesc Web", url: "/es/services" },
    ],
  },
  {
    section: "Compañía",
    links: [
      { name: "Sobre nosotros", url: "/es/about" },
      { name: "Hiring", url: "/es/hiring" },
      { name: "Contacto", url: "/es/contact" },
      { name: "Lista de espera", url: "/es/waitlist" },
    ],
  },
];

const socialLinks = {
  facebook: "https://www.facebook.com/famdesc",
  x: "https://twitter.com/fam_desc",
  github: "https://github.com/Famdesc/Famdesc-UI",
  discord:
    "https://discord.com/channels/1244297608420261983/1244332379154288812",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
