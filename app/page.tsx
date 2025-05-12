import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <h1 className="homeGreet text-5xl font-semibold text-center text-black my-3.5">
          Welcome to the Home Page
        </h1>
        <button className="bg-sky-500 text-white px-2.5 py-1.5 rounded hover:bg-white hover:text-sky-500 hover:border-1 hover:border-sky-500">
          <Link href="/books" className="tracking-wide">
            Books
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
