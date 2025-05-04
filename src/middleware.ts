import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";
import { Routes } from "./constants/enums";

export default withAuth(
  async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;
    const isAuth = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const isAuthPage = pathname.startsWith(`/${Routes.Auth}`);
    const protectedRoutes = [Routes.Admin];
    const isProtectedRoute = protectedRoutes.some((route) => {
      return pathname.startsWith(`/${route}`);
    });

    if (isProtectedRoute && !isAuth) {
      return NextResponse.redirect(new URL(`${Routes.Root}`, req.url));
    }
    if (isAuthPage && isAuth) {
      return NextResponse.redirect(new URL(`/${Routes.Admin}`, req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      async authorized(params) {
        return true;
      },
    },
  }
);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
