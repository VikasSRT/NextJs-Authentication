// "use client";
// import { useSession } from "next-auth/react";
import { handleSignOut } from "@/app/actions/authActions";
import { auth } from "@/auth";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  //   const { data: session, status } = useSession();
  const session = await auth();
  console.log("Session", session);

  return (
    <nav className="bg-zinc-200 flex justify-between items-center px-3.5 py-3">
      <Link href="/" className="text-black text-xl">
        Home
      </Link>
      <Link href="/clientside" className="text-black text-xl">
        clientside
      </Link>
      <Link href="/serverside" className="text-black text-xl">
        serverside
      </Link>
      <Link href="/contactus" className="text-black text-xl">
        contact
      </Link>
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
