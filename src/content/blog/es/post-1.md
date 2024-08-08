---
title: "Estandarizando Commits en Famdesc con Conventional Commits"
description: "Implementación y beneficios del Convenio de Commits Convencional en nuestra red social de código abierto"
author: "Nardis"
role: "Founder & Developer, Famdesc"
authorImage: "@/images/blog/nardis.avif"
authorImageAlt: "Avatar Description"
pubDate: 2024-08-02
cardImage: "@/images/blog/post-1.avif"
cardImageAlt: "Top view mechanical tools arrangement"
readTime: 5
tags: ["Software", "git", "Conventional commits"]
contents: [""]
---

En el desarrollo de software, mantener un historial de commits claro y estructurado es crucial para la colaboración y el mantenimiento del proyecto. En **Famdesc**, nuestra red social de código abierto, seguimos el **Convenio de Commits Convencional** (Conventional Commits) para asegurar la calidad y consistencia de nuestro código. En este artículo, explicaremos qué es este convenio, cómo se estructura, y cómo lo implementamos en Famdesc para que sirva de referencia para todos nuestros colaboradores.

### ¿Qué es el Convenio de Commits Convencional?

El Convenio de Commits Convencional es una especificación para estructurar los mensajes de commit de una manera estándar y consistente. Esta especificación define un conjunto simple de reglas para crear un historial de commit explícito y legible, lo cual facilita la automatización en la generación de versiones y en el mantenimiento del proyecto.

### Estructura de un Mensaje de Commit Convencional

Un mensaje de commit convencional sigue esta estructura básica:

```markdown
<tipo>[alcance opcional]: <descripción>

[cuerpo opcional]

[pie de página opcional]
```

#### Tipos de Commit en Famdesc

Los tipos de commit más comunes que usamos en Famdesc son:

- **feat**: Se usa cuando se añade una nueva funcionalidad
- **fix**: Se usa cuando se corrige un error
- **docs**: Cambios en la documentación
- **style**: Cambios que no afectan el significado del código (formateo, punto y coma, etc.)
- **refactor**: Cambios en el código que no corrigen errores ni añaden funcionalidades, por ejemplo, refactorización del código
- **test**: Añadir o corregir tests
- **chore**: Cambios en el proceso de construcción o herramientas auxiliares y librerías

### Uso del Verbo Imperativo en Mensajes de Commit

Aunque el mensaje puede sonar un poco borde, el uso del verbo en presente es una forma de expresar la acción que se realiza en el commit. Por ejemplo, **add** significa que se añade un nuevo archivo, **change** significa que se modifica un archivo existente y **fix** significa que se arregla o corrige un bug. Algunos ejemplos de estos verbos imperativos, que son los que se usan después de etiquetas como fix:, feat:, docs:, etc., son:

- **fix**
- **change**
- **add**
- **remove**
- **update**
- **edit**
- **integrate**

#### Ejemplos de Mensajes de Commit en Famdesc

1. Añadiendo una nueva funcionalidad:

   ```markdown
   feat(authentication): add login feature

   Added the login feature with email and password authentication. This includes
   the backend API and frontend form validation.
   ```

2. Corrigiendo un error:

   ```markdown
   fix(auth): fix login error

   Resolved an issue where users could not log in with correct credentials due to
   a typo in the authentication module.
   ```

3. Actualizando documentación:

   ```markdown
   docs(readme): update installation instructions

   Updated the README file to include new installation instructions for Windows.
   ```

### Beneficios de Usar el Convenio de Commits Convencional en Famdesc

1. **Claridad y Consistencia**: Ayuda a mantener un historial de commits claro y consistente, facilitando la comprensión de los cambios realizados en el proyecto
2. **Automatización**: Permite la automatización de la generación de versiones y changelogs. Herramientas como semantic-release pueden analizar los mensajes de commit para determinar automáticamente la nueva versión del proyecto (mayor, menor o parche)
3. **Mejor Colaboración**: Facilita la colaboración entre desarrolladores, ya que todos siguen un mismo estándar para los mensajes de commit
4. **Trazabilidad**: Mejora la trazabilidad de los cambios, permitiendo a los desarrolladores entender rápidamente el propósito de cada commit

### Implementación en Famdesc

Para implementar el Convenio de Commits Convencional en Famdesc, seguimos estos pasos:

1. **Educación**: Aseguramos que todos los miembros del equipo entiendan y adopten el convenio. Organizamos sesiones de formación y compartimos este artículo como referencia
2. **Configuración de Herramientas**: Configuramos herramientas que soporten este convenio, como commitlint y husky, para validar los mensajes de commit y asegurar que sigan el estándar
3. **Revisión de Código**: Durante las revisiones de código, revisamos también los mensajes de commit para asegurar que cumplan con el convenio

### Buenas Prácticas para Mensajes de Commit

1. **No usar punto final**: Usar puntuación, más allá de las comas, es innecesario a la hora de crear un buen mensaje de commit
2. **Proveer contexto en el cuerpo del mensaje**: A veces necesitas proveer de más contexto a tu commit. Para ello, en lugar de saturar el sumario del commit, añade información que sea necesaria en el cuerpo del mensaje

### Conclusión

Adoptar el Convenio de Commits Convencional en Famdesc nos ha permitido mantener un historial de commits claro y estructurado, mejorando la colaboración y facilitando el mantenimiento del proyecto. Al seguir estas prácticas, podemos asegurar la calidad y consistencia de nuestro código, beneficiando tanto a los desarrolladores como a la comunidad que utiliza y contribuye a nuestra red social de código abierto

¡Empieza a usar el Convenio de Commits Convencional en tus contribuciones a Famdesc hoy mismo y ayuda a mejorar nuestro proyecto!

---

![Ejemplo de Mensaje de Commit](@/images/blog/post-1-commit-example.avif)

**Pie de foto**: Ejemplo de un mensaje de commit siguiendo el Convenio de Commits Convencional en Famdesc

---

```

```

```

```
