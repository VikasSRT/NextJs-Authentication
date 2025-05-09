"use client";
import Input from "@/components/Input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const page = () => {
  const [submitMsg, setSubmitMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
    reset,
  } = useForm({});
  const onSubmit = (data: any) => {
    console.log("data", data);
    submit();
  };

  const submit = () => {
    setSubmitMsg("Form submitted successfully");
    setTimeout(() => {
      setSubmitMsg("");
      reset();
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-2.5 items-center justify-center">
      <form
        className="mt-3.5 border-1 flex flex-col gap-0.5 items-center justify-center px-3.5 py-3.5 min-w-[400px] max-w-[500px] rounded-md shadow-2xl shadow-zinc-200"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-xl mb-2">Contact Us</h1>

        {isSubmitSuccessful && (
          <span className="text-green-500 text-sm">{submitMsg}</span>
        )}

        <Input
          type="text"
          placeholder="enter your name"
          className="pl-1.5 py-2 border-1 rounded w-[80%]"
          register={register("name", {
            required: true,
            maxLength: {
              value: 10,
              message: "name is too long",
            },
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "name cannot contain symbols or numbers",
            },
          })}
        />

        {errors.name && typeof errors?.name?.message === "string" ? (
          <span className="text-red-500 h-[20px] my-1">
            {errors?.name?.message}
          </span>
        ) : (
          <span className="h-[20px] my-1"></span>
        )}

        <Input
          type="text"
          placeholder="enter your email"
          className="pl-1.5 py-2 border-1 rounded w-[80%]"
          register={register("email", {
            required: true,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email",
            },
          })}
        />
        {errors.email && typeof errors?.email?.message === "string" ? (
          <span className="text-red-500 h-[20px] my-1">
            {errors?.email?.message}
          </span>
        ) : (
          <span className="h-[20px] my-1"></span>
        )}

        <Input
          type="text"
          placeholder="enter your phone"
          className="pl-1.5 py-2 border-1 rounded w-[80%]"
          register={register("phone", {
            required: true,
            validate: {
              validCheck: (value) =>
                [9, 8, 7, 6].includes(parseInt(value[0])) ||
                "phone number is not valid",
              lenCheck: (value) =>
                value.length === 10 || "phone no must contain 10 digits",
              symbolsCheck: (value) =>
                /^[0-9]+$/.test(value) || "phone number cannot contain symbols",
            },
          })}
        />
        {errors.phone && typeof errors?.phone?.message === "string" ? (
          <span className="text-red-500 h-[20px] my-1">
            {errors?.phone?.message}
          </span>
        ) : (
          <span className="h-[20px] my-1"></span>
        )}

        <button
          type="submit"
          className="bg-gray-800 text-white rounded px-2 py-1.5 tracking-wider cursor-pointer"
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default page;
