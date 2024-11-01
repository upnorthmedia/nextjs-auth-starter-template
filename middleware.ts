import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    const isAuthenticated = await auth.protect().catch(() => false);
    if (!isAuthenticated) {
      const signInUrl = new URL('/sign-in', req.url);
      signInUrl.searchParams.set('redirect_url', req.url);
      return new Response(null, {
        status: 302,
        headers: {
          Location: signInUrl.toString(),
        },
      });
    }
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
