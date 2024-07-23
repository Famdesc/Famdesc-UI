const navBarLinks = [
  { name: "Inicio", url: "/es" },
  { name: "Servicios", url: "/es/services" },
  { name: "Blog", url: "/es/blog" },
  { name: "Contacto", url: "/es/contact" },
];

const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      { name: "Documentación", url: "/es/welcome-to-docs/" },
      { name: "Nuestros Servicios", url: "/es/services" },
    ],
  },
  {
    section: "Compañía",
    links: [
      { name: "Sobre nosotros", url: "#" },
      { name: "Blog", url: "/es/blog" },
    ],
  },
];

const socialLinks = {
  facebook: "https://www.facebook.com/famdesc",
  x: "https://twitter.com/fam_desc",
  github: "https://github.com/nardis9501/Famdesc-landing-blog",
  discord:
    "https://discord.com/channels/1244297608420261983/1244332379154288812",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
