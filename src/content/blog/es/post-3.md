---
title: "Guía para Reportar Issues en Famdesc"
description: "Cómo reportar problemas de manera efectiva para contribuir al desarrollo de Famdesc."
author: "Nardis"
role: "Founder & Developer, Famdesc"
authorImage: "@/images/blog/nardis.avif"
authorImageAlt: "Foto del autor Nardis"
pubDate: 2024-08-10
cardImage: "@/images/blog/post-3.avif"
cardImageAlt: "Laptop con un bug reportado en la pantalla"
readTime: 5
tags: ["GitHub", "Open Source", "Colaboración", "Issues"]
contents: [""]
---

Reportar **issues** de manera efectiva es crucial para el mantenimiento y la mejora continua de **Famdesc**. Una **issue** bien documentada permite que los desarrolladores comprendan rápidamente el problema y trabajen en una solución adecuada. A continuación, te mostramos cómo estructurar tus issues para maximizar su utilidad.

### Estructura de una Issue en Famdesc

Cada issue debe seguir la siguiente estructura:

```markdown
## Description:

[Proporciona una descripción clara y concisa del problema o sugerencia.]

## Steps to Reproduce (if applicable):

1. [Primer paso.]
2. [Segundo paso.]
3. [Y así sucesivamente.]

## Expected Behavior:

[Describe lo que esperabas que sucediera.]

## Actual Behavior:

[Describe lo que realmente está sucediendo.]

## Environment (if applicable):

- OS: [Especifica el SO]
- Browser: [Especifica el navegador y la versión]
- Version: [Especifica la versión de la aplicación o módulo afectado]

## Additional Context:

[Proporciona cualquier información adicional que pueda ayudar a diagnosticar el problema, como capturas de pantalla, archivos de registro, configuraciones, etc.]

## Screenshots or Logs (if applicable):

[Proporciona contexto sobre la importancia de resolver este issue, cómo afecta a los usuarios o desarrolladores, y cualquier otro detalle relevante.]
```

### **Ejemplo**:

#### Description:

Al desplegar en Vercel, el CDN de Swiper no se está ejecutando, lo que provoca que el componente Swiper no funcione correctamente en el sitio desplegado. Este problema no está presente en el entorno de desarrollo local.

#### Steps to Reproduce (if applicable):

1. Desplegar el proyecto en Vercel.
2. Navegar a la página con el componente Swiper.
3. Observar que el componente Swiper no funciona como se espera.

#### Expected Behavior:

El CDN de Swiper debería ejecutarse y el componente Swiper debería funcionar correctamente en el entorno desplegado.

#### Actual Behavior:

El CDN de Swiper no se está ejecutando, lo que resulta en que el componente Swiper no funcione en el entorno desplegado en Vercel.

#### Environment (if applicable):

- OS: N/A (El problema es con el despliegue en Vercel)
- Browser: N/A (Ocurre en todos los navegadores)
- Version: N/A

#### Additional Context:

La actual Política de Seguridad de Contenidos (Content-Security-Policy) en la configuración de Vercel puede estar bloqueando la ejecución del CDN de Swiper. Aquí está la parte relevante de la configuración:

```json
{
  "key": "Content-Security-Policy",
  "value": "default-src 'self'; base-uri 'self'; form-action 'self'; frame-src 'self'; frame-ancestors 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://images.unsplash.com; connect-src 'self'; object-src 'none'; upgrade-insecure-requests; block-all-mixed-content"
}
```

#### Screenshots or Logs (if applicable):

![Swiper Component Not Working](@/images/blog/post-3-example.avif)
