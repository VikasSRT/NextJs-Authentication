import axios from "axios";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Books Page",
  description: "Created using route handlers",
};

const page = async () => {
  const response = await axios.get("http://localhost:3000/api/books");
  const books = response?.data;

  return (
    <div>
      <div>
        <h1
          className={`text-center my-3 text-3xl font-extrabold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-tl from-sky-600 to-indigo-200`}
        >
          Our Collections
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[100%] place-items-center">
        {books.map(
          ({
            id,
            title,
            image,
            author,
          }: {
            id: number;
            title: string;
            image: string;
            author: string;
          }) => (
            <div
              key={id}
              className="max-w-[250px] px-2 py-1 flex flex-col items-center justify-center"
            >
              <div className="my-0.5 image-cont">
                <Image
                  alt={title}
                  src={image}
                  width={200}
                  height={200}
                  quality={100}
                />
              </div>
              <div className="flex flex-col gap-1 justify-center items-center text-center mt-5">
                <h1 className="hover:text-indigo-600 underline">
                  <Link href={`books/${id}`}>{title}</Link>
                </h1>
                <p className="font-medium mt-1">{author}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default page;
