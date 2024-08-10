---
title: "Guía para Contribuir con Pull Requests en Famdesc"
description: "Aprende a realizar Pull Requests efectivas y alineadas con nuestras prácticas de desarrollo en Famdesc."
author: "Nardis"
role: "Founder & Developer, Famdesc"
authorImage: "@/images/blog/nardis.avif"
authorImageAlt: "Foto del autor Nardis"
pubDate: 2024-08-09
cardImage: "@/images/blog/post-2.avif"
cardImageAlt: "Banner de solicitudes de extracción (pull requests) en Famdesc"
readTime: 6
tags: ["Git", "Open Source", "Colaboración", "Pull Requests"]
contents: [""]
---

Una **Pull Request (PR)** es una solicitud para fusionar cambios de código desde una rama (normalmente una rama de características o de corrección de errores) al repositorio principal del proyecto. En **Famdesc**, las Pull Requests (PRs) son una parte esencial del flujo de trabajo de desarrollo. Son el medio por el cual los cambios propuestos en el código se revisan, discuten y finalmente se integran en la base de código principal. Para asegurar que nuestras PRs sean claras, efectivas y fáciles de revisar, seguimos un formato y unas prácticas recomendadas.

#### Beneficios de las Pull Requests

- **Colaboración y Transparencia:** Las PRs fomentan la colaboración entre los miembros del equipo, permitiendo que varios desarrolladores revisen y comenten sobre los cambios propuestos. Esto no solo mejora la calidad del código, sino que también aumenta la transparencia en el proceso de desarrollo.
- **Detección Temprana de Errores:** A través del proceso de revisión, es más probable detectar errores, inconsistencias o problemas de diseño antes de que el código sea fusionado en la rama principal, lo que reduce el riesgo de introducir bugs en producción.
- **Documentación del Proceso de Desarrollo:** Cada PR actúa como una pieza de documentación que registra el razonamiento detrás de los cambios, las discusiones que se tuvieron, y las decisiones tomadas. Esto es útil para la futura referencia y para nuevos miembros del equipo.
- **Control de Calidad:** Permitir que otros desarrolladores revisen el código asegura que se mantengan los estándares de calidad y que el código cumpla con las normativas y convenciones del proyecto.

#### Mejores Prácticas para Crear Pull Requests

- **Cambios Pequeños y Enfocados:** Es recomendable que cada PR aborde un solo tema o problema. Esto facilita la revisión y la comprensión de los cambios.
- **Descripción Clara y Concisa:** Proveer una descripción detallada del propósito del PR, incluyendo qué problema resuelve y cómo lo resuelve. Si aplica, adjuntar referencias a tickets de incidencias o especificaciones.
- **Pruebas Incluidas:** Asegurarse de que cualquier cambio en el código esté acompañado por las pruebas correspondientes. Esto ayuda a validar que el código funciona como se espera y no introduce errores.
- **Solicitar Revisiones Específicas:** Etiquetar a miembros del equipo con conocimiento relevante para que revisen el PR, asegurando una revisión más efectiva y rápida.

#### Proceso de Revisión de Pull Requests

1. **Revisión de Código:** Revisar el código línea por línea, asegurándose de que siga las normas de codificación del proyecto y que no introduzca errores o vulnerabilidades.
2. **Pruebas y Validación:** Ejecutar todas las pruebas asociadas para asegurar que los cambios no rompan ninguna funcionalidad existente.
3. **Discusión y Feedback:** Comentar sobre posibles mejoras, solicitar cambios si es necesario, y discutir alternativas con el autor de la PR.
4. **Aprobación y Fusión:** Una vez que el PR ha sido aprobado por los revisores requeridos y todas las pruebas han pasado, se puede fusionar en la rama principal del proyecto.

#### Automatización en Pull Requests

Herramientas como CI/CD se pueden integrar con el flujo de trabajo de PRs para automatizar la ejecución de pruebas, análisis de código y otras verificaciones antes de la fusión. Esto ayuda a garantizar que solo el código de alta calidad llegue a la rama principal.

### Plantilla para Pull Requests

Usar la plantilla correcta asegura que los cambios propuestos se presenten de manera clara y organizada. Cada PR debe seguir la siguiente estructura:

```markdown
## General Description

[Breve descripción de los cambios propuestos, proporcionando contexto y el objetivo general de la PR.]

## Change Details

- **[Área específica]:** [Descripción detallada del cambio realizado.]
- **[Otra área específica]:** [Descripción detallada de otro cambio realizado.]

## Motivation and Context

[Explicación del porqué de los cambios, detallando la motivación detrás de ellos y cómo afectan al proyecto.]

## Instructions for Testing

1. [Primer paso para probar los cambios.]
2. [Segundo paso para probar los cambios.]
3. [Cualquier otro paso adicional necesario.]

## Additional Notes

[Cualquier información adicional que pueda ser útil para los revisores, como advertencias, limitaciones, o detalles técnicos relevantes.]

## Related Issues

- [#Número del Issue relacionado (si aplica).]

## Screenshots

[Incluye capturas de pantalla de los cambios si aplican, especialmente para cambios en la interfaz de usuario.]
```

**Ejemplo**:

#### General Description

Esta solicitud de incorporación de cambios agrega soporte para la traducción al español de la página "Contáctanos" en la plataforma Famdesc. Esta actualización incluye contenido traducido para todos los elementos de texto, asegurando una experiencia de usuario consistente para los usuarios de habla hispana.

#### Change Details

- **Título y Subtítulos**: Se tradujeron el título principal y los subtítulos de la página de contacto al español.
- **Etiquetas del Formulario**: Se actualizaron las etiquetas para los campos del formulario (por ejemplo, nombre, apellido, detalles) al español.
- **ContactIconBlocks**: Se tradujeron los encabezados y el contenido para las diversas opciones de contacto, incluyendo la Base de Conocimientos, Preguntas Frecuentes, visita a la oficina y contacto por correo electrónico.

#### Motivation and Context

Esta actualización mejora la accesibilidad y usabilidad de la plataforma Famdesc para los usuarios de habla hispana. Se alinea con nuestro compromiso de ofrecer una experiencia localizada que atienda a una audiencia diversa.

#### Instructions for Testing

1. Navegar a la página "Contáctanos" con el idioma del sitio configurado en español.
2. Verificar que todos los elementos de texto se muestren en español.
3. Asegurarse de que los campos del formulario y ContactIconBlocks estén traducidos correctamente y mantengan la coherencia en el diseño y la disposición.
4. Probar la presentación del formulario para garantizar que ninguna funcionalidad se vea afectada por la traducción.

#### Additional Notes

- Revisar las traducciones para garantizar su exactitud y adecuación en el contexto de la plataforma.
- Verificar cualquier discrepancia visual o problema que pueda haber surgido debido a los cambios de longitud en el texto traducido.

#### Related Issues

- N/A

#### Screenshots

![Página "Contáctanos" con traducciones al español](https://raw.githubusercontent.com/nardis9501/Famdesc-images/main/blog/contact-screenshot.avif)

### Conclusión

El uso efectivo de las Pull Requests es una práctica clave en el desarrollo colaborativo, ayudando a mantener la calidad del código, facilitando la comunicación entre los desarrolladores, y asegurando que el proyecto avance de manera coherente y bien documentada.
