// imports from packages
import GitHubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

// local imports
import db from "@/db/prisma";
import {
  AUTH_TOKEN_EXPIRATION_TIME,
  AUTH_TOKEN_UPDATION_TIME,
} from "@/config/auth.config";
import env from "@/env";

export const authOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GitHubProvider({
      clientId: env.github.AUTH_GITHUB_ID,
      clientSecret: env.github.AUTH_GITHUB_SECRET,
    }),
  ],
  secret: env.token.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: AUTH_TOKEN_EXPIRATION_TIME,
    updateAge: AUTH_TOKEN_UPDATION_TIME,
  },
  // pages: { signIn: "/auth/signin"},
} satisfies NextAuthOptions;
