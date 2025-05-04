import { Environments, Pages, Routes } from "@/constants/enums";
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const NextAuthOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const allwodEmail = process.env.ALLOWED_EMAIL!;
      if (user.email === allwodEmail) {
        return true;
      }
      return false;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === Environments.Dev,
  pages: {
    error: "/",
    signIn: `/${Routes.Auth}/${Pages.Signin}`,
  },
};
