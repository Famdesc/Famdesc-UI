import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Famdesc - Hardware, Technology & Professional Audio Solutions",
  tagline: "Engineering Premium Electronics and Innovative Digital Ecosystems",
  description:
    "Welcome to Famdesc, a forward-thinking technology and hardware manufacturing firm. We design and engineer premium electronic ecosystems, professional audio equipment, and high-performance digital solutions built to hardware-grade standards.",
  description_short:
    "Famdesc is a technology and hardware firm engineering premium electronics and professional audio ecosystems.",
  url: "https://famdesc.com",
  author: "Nardis Del Campo Soler",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title} | Engineering the Future of Tech & Audio`,
  description: SITE.description,
  image: ogImageSrc,
};
