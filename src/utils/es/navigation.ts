const navBarLinks = [
  { name: "Inicio", url: "/es" },
  { name: "Productos", url: "/products" },
  { name: "Nosotros", url: "/about" },
  { name: "Contacto", url: "/es/contact" },
];

const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      { name: "Productos FSA", url: "/products" },
      { name: "FSA Line One Pro", url: "/products/fsa-line-one-pro" },
    ],
  },
  {
    section: "Compañía",
    links: [
      { name: "Sobre nosotros", url: "/about" },
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
