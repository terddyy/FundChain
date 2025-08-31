// middleware.ts
import { NextResponse, type NextRequest } from "next/server";
import { createServerClient, type CookieOptions } from "@supabase/ssr";

const PUBLIC_ROUTES = new Set([
  "/", "/login", "/signup", "/auth/confirm", "/auth/callback", "/reset-password",
]);

const AUTH_ROUTES = new Set(["/login", "/signup"]); // redirect away when already authed

function isPublic(pathname: string) {
  if (PUBLIC_ROUTES.has(pathname)) return true;
  // Add any public prefixes here (e.g., docs, marketing)
  if (pathname.startsWith("/public")) return true;
  return false;
}

export async function middleware(req: NextRequest) {
  // Always create a response you mutate with cookies set by Supabase
  const res = NextResponse.next({ request: { headers: req.headers } });

  // Edge-safe Supabase client with cookie shim
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieOptions) {
          res.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: CookieOptions) {
          res.cookies.set({ name, value: "", ...options });
        },
      },
    }
  );

  // Important: calling getUser() causes the client to refresh/rotate session cookies when needed.
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const { pathname, origin } = req.nextUrl;

  // 1) Block unauthenticated users from protected routes
  if (!user && !isPublic(pathname)) {
    const redirectUrl = new URL("/login", origin);
    redirectUrl.searchParams.set("next", pathname); // preserve intent
    return NextResponse.redirect(redirectUrl);
  }

  // 2) Redirect authenticated users away from auth pages
  if (user && AUTH_ROUTES.has(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", origin));
  }

  // 3) Example: role-based gating for /admin using app_metadata.role
  if (user && pathname.startsWith("/admin")) {
    const role = (user.app_metadata as any)?.role; // set this server-side at sign-up
    if (role !== "admin") {
      return NextResponse.redirect(new URL("/403", origin));
    }
  }

  // Let the request pass through with any refreshed cookies
  return res;
}

// Run middleware on everything except static assets/_next.
// Add or remove exclusions based on your needs.
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|ico|css|js|map)$).*)",
  ],
};
