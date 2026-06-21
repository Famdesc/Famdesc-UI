const navBarLinks = [
  { name: "Accueil", url: "/fr" },
  { name: "Produits", url: "/fr/products" },
  { name: "À propos", url: "/about" },
  { name: "Contact", url: "/fr/contact" },
];

const footerLinks = [
  {
    section: "Écosystème",
    links: [
      { name: "Produits FSA", url: "/fr/products" },
      { name: "FSA Line One Pro", url: "/products/fsa-line-one-pro" },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "/about" },
      { name: "Contact", url: "/fr/contact" },
      { name: "Liste d'attente", url: "/fr/waitlist" },
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
