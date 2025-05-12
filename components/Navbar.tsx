"use client";
import { useSession } from "next-auth/react";
import { handleSignOut } from "@/app/actions/authActions";
// import { auth } from "@/auth";
import Link from "next/link";
import React, { useContext } from "react";
import SunIcon from "../public/sunIcon.svg";
import MoonIcon from "../public/moonIcon.svg";
import Image from "next/image";
import { ThemeContext } from "@/providers/ThemeProvider";

const Navbar = () => {
  const { data: session, status } = useSession();
  // const session = await auth();
  // console.log("Session", session);
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }

  const { isDark, toggleTheme } = context;

  return (
    <nav className="bg-zinc-200 flex justify-between items-center px-5 py-3">
      <Link href="/" className="text-black text-xl navlinks">
        Home
      </Link>
      <Link href="/clientside" className="text-black text-xl navlinks">
        clientside
      </Link>
      <Link href="/serverside" className="text-black text-xl navlinks">
        serverside
      </Link>
      <Link href="/contactus" className="text-black text-xl navlinks">
        contact
      </Link>
      <span className="text-black text-xl cursor-pointer" onClick={toggleTheme}>
        {!isDark ? (
          <Image
            height={25}
            width={25}
            src={SunIcon}
            alt="SunIcon"
            className={`hover:rotate-45 duration-200 ${isDark ? "invert" : ""}`}
          />
        ) : (
          <Image
            height={25}
            width={25}
            src={MoonIcon}
            alt="MoonIcon"
            className={`hover:rotate-45 duration-200 ${
              isDark ? "invert" : ""
            }`}
          />
        )}
      </span>
      {!session ? (
        <Link
          href="/auth/signin"
          className="bg-stone-900 text-white p-2.5 rounded-md"
        >
          SignIn
        </Link>
      ) : (
        <button
          className="bg-stone-900 text-white p-2.5 rounded-md"
          onClick={handleSignOut}
        >
          SignOut
        </button>
      )}
    </nav>
  );
};

export default Navbar;
