import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Famdesc - Your Digital Haven for Family Moments",
  tagline: "A New Way to Preserve and Share Your Family&aposs Precious Moments",
  description:
    "Join Famdesc to build your family tree, share cherished memories and preserve the moments that matter most. Connect with loved ones in your digital space dedicated to family moments.",
  description_short:
    "Join Famdesc to build your family tree, share cherished memories and preserve the moments that matter most.",
  url: "https://famdesc.com",
  author: "Nardis Del Campo Soler",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
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
  title: `${SITE.title}: : A New Way to Preserve and Share Your Family&aposs Precious Moments`,
  description: SITE.description,
  image: ogImageSrc,
};
