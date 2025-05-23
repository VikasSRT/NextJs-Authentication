import axios from "axios";
import React from "react";

// export const fetchCache = 'force-no-store'

interface ProductTypes {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
}

const fetchProducts = async () => {
  try {
    const response = await axios.get<ProductTypes[]>(
      "https://fakestoreapi.com/products"
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

const ServerSideRendering = async () => {
  const products = await fetchProducts();

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="my-1.5">ServerSideRendering</h1>
      <ul>
        {products?.map(({ id, title, description, price, category }: ProductTypes) => (
          <li key={id} className="mx-auto w-[95%]">
            <div className="bg-stone-100 mx-2.5 px-3.5 py-1.5">
              <h2 className="text-xl font-medium">{title}</h2>
              <p>{description}</p>
              <div className="flex justify-between px-0.5">
                <span>{category}</span>
                <span className="font-bold">${price}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServerSideRendering;
