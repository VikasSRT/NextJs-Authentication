"use client";

import {
  handleCredentialsSignIn,
  handleGithubSignin,
} from "@/app/actions/authActions";
import LoadingButton from "@/components/LoadingButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ErrorMessage from "@/components/ui/error-message";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import svg from "../../../public/github.svg";

const SignIn = () => {
  const [globalError, setGlobalError] = useState<string>("");
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    try {
      const result = await handleCredentialsSignIn(values);
    } catch (error) {
      console.log("error something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-3xl font-bold text-center text-gray-800">
          <CardTitle>SignIn Page</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            {globalError && <ErrorMessage error={globalError} />}
            <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        autoComplete="off"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <LoadingButton pending={form.formState.isSubmitting} />
            </form>
          </Form>
          <p className="text-center text-xl">or</p>

          <button
            className="flex gap-1.5 items-center bg-black rounded px-3.5 py-2.5
           text-white w-full justify-center cursor-pointer duration-500 hover:invert"
            onClick={handleGithubSignin}
          >
            <Image
              src={svg}
              alt="github"
              width={24}
              height={24}
              className="invert"
            />
            Sign in with GitHub
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignIn;
