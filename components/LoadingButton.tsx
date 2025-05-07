import React from "react";

const LoadingButton = ({ pending }: { pending: boolean }) => {
  return (
    <button className="bg-zinc-950 text-white px-3.5 py-2.5 rounded w-full cursor-pointer  hover:bg-white hover:text-black duration-500">
      {pending ? "Processing..." : "SignIn"}
    </button>
  );
};

export default LoadingButton;
