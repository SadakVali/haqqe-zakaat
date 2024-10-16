import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import env from "./env";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: env.token.NEXTAUTH_SECRET });
  const { pathname } = new URL(req.url);
  if (!token) return NextResponse.redirect(new URL("/signin", req.url));
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
