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

const ServerSideRendering = async () => {
  const response = await axios.get<ProductTypes[]>(
    "https://fakestoreapi.com/products"
  );
  const products = response.data;

  if (!products.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <h1>ServerSideRendering</h1>
      <ul>
        {products.map(({ id, title, description, price, category }) => (
          <li key={id}>
            <div className="bg-stone-100 mx-2.5 px-3.5 py-1.5">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="flex justify-between px-0.5">
                <span>{category}</span>
                <span>${price}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServerSideRendering;
