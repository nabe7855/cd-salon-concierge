import { updateSession } from "@/utils/supabase/middleware";
import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // Admin Route Protection (Temporary Hardcoded Check)
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Matches /admin and /admin/*
    const adminCookie = request.cookies.get("admin_logged_in");
    console.log(`[Middleware] Check Path: ${request.nextUrl.pathname}`);
    console.log(
      `[Middleware] Cookie 'admin_logged_in':`,
      adminCookie ? adminCookie.value : "MISSING",
    );
    console.log(
      `[Middleware] All Cookies:`,
      request.cookies
        .getAll()
        .map((c) => `${c.name}=${c.value}`)
        .join("; "),
    );

    // If cookie is missing explicitly or not "true"
    if (!adminCookie || adminCookie.value !== "true") {
      console.log("[Middleware] Access DENIED -> Redirecting to /login");
      return NextResponse.redirect(new URL("/login", request.url));
    }
    console.log("[Middleware] Access GRANTED - Bypassing Supabase Check");
    return NextResponse.next();
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
