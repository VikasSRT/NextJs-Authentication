// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import { JWT as NextAuthJWT } from "next-auth/jwt";

// declare module "next-auth" {
//   interface User {
//     role?: string;
//   }

//   interface Session {
//     user: User;
//   }

//   interface JWT extends NextAuthJWT {
//     role?: string;
//   }
// }

// export const authOptions = NextAuth({
//   providers: [
//     Credentials({
//       name: "credentials",
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const users = [
//           { username: "user1", password: "password1", role: "user" },
//           { username: "admin1", password: "admin1", role: "admin" },
//         ];

//         const user = users.find(
//           (u) =>
//             u.username === credentials?.username &&
//             u.password === credentials?.password
//         );

//         if (user) {
//           return { id: user.username, role: user.role };
//         }
//         return null;
//       },
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.role = user.role;
//       }
//       return token;
//     },

//     async session({ session, token }) {
//       if (token && typeof token.role === "string") {
//         session.user.role = token.role;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/auth/signin",
//   },
// });

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import { handlers } from "@/auth";

export const { GET, POST } = handlers;
