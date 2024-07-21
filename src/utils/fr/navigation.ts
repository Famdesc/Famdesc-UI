const navBarLinks = [
  { name: "Accueil", url: "/fr" },
  { name: "Produits", url: "/fr/products" },
  { name: "Services", url: "/fr/services" },
  { name: "Blog", url: "/fr/blog" },
  { name: "Contact", url: "/fr/contact" },
];

const footerLinks = [
  {
    section: "Écosystème",
    links: [
      { name: "Documentation", url: "/fr/welcome-to-docs/" },
      { name: "Services de Construction", url: "/fr/services" },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "#" },
      { name: "Blog", url: "/fr/blog" },
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
