import axios from "axios";
import Link from "next/link";
import React from "react";

const page = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const products = response?.data;
  return (
    <div>
      <h1 className="text-center text-2xl underline">All Products</h1>

      <table className="w-[95%] mx-auto bg-zinc-50 mt-4">
        <thead>
          <tr className="flex justify-between px-20">
            <th className="">ID</th>
            <th className="w-[50%] text-center">PRODUCT</th>
          </tr>
        </thead>

        <tbody>
          {products.map(({ title, id }: { title: string; id: number }) => (
            <tr
              className="flex justify-between items-center px-20 border-b-1 border-stone-200 py-1"
              key={id}
            >
              <td className="w-[50%]">
                <Link href={`/staticsite/${id}`}>{id}</Link>
              </td>
              <td className="text-left w-[50%]">
                <Link href={`/staticsite/${id}`}>{title}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;
