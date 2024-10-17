# Notas de Autenticación

## Validación de Token en Backend

Si se necesita validar el token en backend se puede leer esto: [Manual JWT Handling](https://clerk.com/docs/backend-requests/handling/manual-jwt)

## Lectura de Información del Usuario

Para leer la información del usuario se usa la siguiente función:


Astro.locals.auth()


Importante: Dentro de `Astro.locals` existen más métodos útiles. Este siempre debe incluir `export const prerender = false;` para que no se trate como una ruta estática, ya que el modo de salida de la aplicación está configurada a hybrid y las páginas se tratan por defecto como estáticas.

## Variables de Entorno Necesarias

Para que la autenticación funcione es necesario agregar las siguientes variables de entorno:

- `PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`

Estas pertenecen a la cuenta de Clerk.