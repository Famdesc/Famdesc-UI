import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://famdesc.com",
  image: {
    domains: ["images.unsplash.com"],
  },
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "fr"],
  //   fallback: {
  //     fr: "en",
  //   },
  //   routing: {
  //     prefixDefaultLocale: false,
  //   },
  // },
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "en", // All urls that don't contain `fr` after `https://famdesc.com/` will be treated as default locale, i.e. `en`
        locales: {
          en: "en", // The `defaultLocale` value must present in `locales` keys
          es: "es",
          fr: "fr",
        },
      },
    }),
    starlight({
      title: "Famdesc Docs",
      defaultLocale: "root",
      // https://github.com/withastro/starlight/blob/main/packages/starlight/CHANGELOG.md
      // If no Astro and Starlight i18n configurations are provided, the built-in default locale is used in Starlight and a matching Astro i18n configuration is generated/used.
      // If only a Starlight i18n configuration is provided, an equivalent Astro i18n configuration is generated/used.
      // If only an Astro i18n configuration is provided, the Starlight i18n configuration is updated to match it.
      // If both an Astro and Starlight i18n configurations are provided, an error is thrown.
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        es: { label: "Español", lang: "es" },
        fr: { label: "Français", lang: "fr" },
      },
      // https://starlight.astro.build/guides/sidebar/
      sidebar: [
        {
          label: "FSA Line One Pro",
          translations: {
            es: "FSA Line One Pro",
            fr: "FSA Line One Pro",
          },
          items: [
            { label: "Product Overview", link: "fsa-line-one-pro/product-overview/" },
            { label: "Compliance and Safety", link: "fsa-line-one-pro/compliance-and-safety/" },
            { label: "Care and Maintenance", link: "fsa-line-one-pro/care-and-maintenance/" },
            { label: "Warranty Information", link: "fsa-line-one-pro/warranty-information/" },
            { label: "Support", link: "fsa-line-one-pro/support/" },
          ],
        },
      ],
      social: {
        github: "https://github.com/Famdesc/Famdesc-UI",
      },
      disable404Route: true,
      customCss: ["./src/assets/styles/starlight.css"],
      favicon: "/favicon.ico",
      components: {
        SiteTitle: "./src/components/ui/starlight/SiteTitle.astro",
        Head: "./src/components/ui/starlight/Head.astro",
        MobileMenuFooter:
          "./src/components/ui/starlight/MobileMenuFooter.astro",
        ThemeSelect: "./src/components/ui/starlight/ThemeSelect.astro",
      },
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://famdesc.com/social.jpg",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:width",
            content: "1536",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:height",
            content: "1024",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:type",
            content: "image/jpeg",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:image",
            content: "https://famdesc.com/social.jpg",
          },
        },
      ],
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
  ],
  output: "static",
  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  },
});
