"use client";
import React from "react";

const Input = ({ type, placeholder, className, register }: any) => {

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      {...register}
    />
  );
};

export default Input;
