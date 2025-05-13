import { blurArr, books } from "@/lib/data/books";
import axios from "axios";
import Image from "next/image";
import React from "react";

export async function generateMetadata({ params }: any) {
  const book = books[params.id - 1];

  if (!book) {
    return {
      title: "Book Not Found",
    };
  }

  return {
    title: book.title,
    description: `Details about the book: ${book.title} by ${book.author}`,
    openGraph: {
      title: book.title,
      description: `Read more about ${book.title}`,
    },
  };
}

const page = async ({ params }: any) => {
  const { id } = await params;
  const response = await axios
    .get(`http://localhost:3000/api/books/${id}`)
    .catch((err) => console.log("error", err));

  const book = response?.data;

  return (
    <div>
      <div className="max-w-[250px] px-2 py-1 flex flex-col items-center justify-center mt-3">
        <div className="my-0.5">
          <Image
            alt={book?.title}
            src={book?.image}
            width={200}
            height={200}
            placeholder="blur"
            blurDataURL={blurArr[id - 1] || blurArr[3]}
          />
        </div>
        <div className="mt-5 text-center">
          <h1 className="hover:text-blue-600">{book?.title}</h1>
          <p>{book?.author}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
