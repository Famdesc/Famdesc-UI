import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server'



const isProtectedRoute = createRouteMatcher(['/prtectedRoute(.*)']) //aquí se definen las rutas protegidas
//si se necesita proteger una ruta en especifico, esta de momento debe tener el export const prerender = false;

export const onRequest = clerkMiddleware((auth, context) => {
    
  const { redirectToSignIn, userId } = auth()

  

  if (!userId && isProtectedRoute(context.request)) {
    // Add custom logic to run before redirecting

    return redirectToSignIn()
  }
})