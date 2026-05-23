/** @type {import("prettier").Config} */
export default {
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss' // Siempre debe ir al final para que ordene las clases de Astro
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};