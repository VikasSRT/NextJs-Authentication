import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./lib/zod";
import GitHub from "next-auth/providers/github";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      profile(profile): any {
        return { id: "some id" };
      },
    }),
    Credentials({
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Enter Username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials): Promise<any> {
        let user: User | null = null;

        const parsedCredentials = signInSchema.safeParse(credentials);

        if (!parsedCredentials.success) {
          console.error("Invalid Credentials", parsedCredentials.error.errors);
          return null;
        }

        user = {
          id: 1,
          name: "arun",
          email: "arunsingh@gmail.com",
          role: "admin",
        };

        if (!user) {
          console.log("invalid credentials");
          return null;
        }

        return user;
      },
    }),
  ],
  callbacks: {
    authorized({ request: { nextUrl }, auth }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = nextUrl;
      const role = auth?.user.role;

      if (
        (pathname === "/adminpanel" && role === "user") ||
        (pathname === "/userpanel" && role === "admin")
      ) {
        return Response.redirect(new URL("/", nextUrl));
      }

      if (pathname === "/auth/signin" && isLoggedIn) {
        return Response.redirect(new URL("/", nextUrl));
      }

      return !!auth;
    },
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
});
