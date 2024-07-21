// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Famdesc Services", url: "/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
    ],
  },
];
// An object of links for social icons
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
