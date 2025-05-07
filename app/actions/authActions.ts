"use server";

import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

export async function handleCredentialsSignIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  try {
    await signIn("credentials", { email, password, redirectTo: "/" });
  } catch (error) {
    if (error instanceof AuthError) {
      if ("type" in error) {
        switch (error.type) {
          case "CredentialsSignIn":
            return {
              message: "Invalid credentials",
            };

          default:
            return {
              message: "Something went wrong",
            };
        }
      }
    }
    throw error;
  }
}

export const handleGithubSignin = async () => {
  await signIn("github", { redirectTo: "/" });
};

export const handleSignOut = async () => {
  await signOut();
};
