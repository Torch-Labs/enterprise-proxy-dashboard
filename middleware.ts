// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "@auth0/nextjs-auth0";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const session = request.cookies.get("appSession");

  if (!session) {
    return NextResponse.redirect(new URL("/api/auth/login", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*",
};
