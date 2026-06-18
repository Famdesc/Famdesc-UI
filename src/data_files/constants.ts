export const SITE = {
  title: "Famdesc - People-Centered Technology & Premium Audio",
  tagline: "Premium audio today, private family technology for tomorrow",
  description:
    "Famdesc is a people-centered technology company starting with premium audio products through Famdesc Sound Authority while building toward a private family social platform.",
  description_short:
    "Famdesc builds people-centered technology, beginning with premium FSA audio products.",
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
  title: `${SITE.title} | FSA Line One Pro`,
  description: SITE.description,
  image: `${SITE.url}/social.jpg`,
};
