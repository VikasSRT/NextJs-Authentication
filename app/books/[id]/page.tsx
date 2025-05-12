import { blurArr } from "@/lib/data/books";
import axios from "axios";
import Image from "next/image";
import React from "react";

const page = async ({ params }: any) => {
  const { id } = await params;
  const response = await axios
    .get(`http://localhost:3000/api/books/${id}`)
    .catch((err) => console.log("error", err));

  const book = response?.data;

  return (
    <div>
      <div className="max-w-[250px] px-2 py-1 flex flex-col items-center justify-center mt-3">
        <div className="my-0.5 image-cont">
          <Image alt={book?.title} src={book?.image} width={200} height={200}   placeholder="blur" blurDataURL={blurArr[id-1] || blurArr[3]}  />
        </div>
        <div className="mt-5 text-center">
          <h1 className="hover:text-blue-600 underline">{book?.title}</h1>
          <p>{book?.author}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
