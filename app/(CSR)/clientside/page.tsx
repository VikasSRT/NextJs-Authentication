"use client";
import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

const ClientSideRendering = () => {
  interface ProductTypes {
    id: number;
    category: string;
    description: string;
    title: string;
    price: number;
  }

  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response?.data);
      setLoading(false);
    } catch (error: unknown) {
      setLoading(false);
      if (error instanceof AxiosError) {
        setError(error?.message);
      } else if (error instanceof Error) {
        setError(error?.message);
      } else {
        console.log("something went wrong");
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1>CSR Data Fetching</h1>
      <div>
        {error && <h2 className="text-2xl text-red-600">{error}</h2>}
        <ul>
          {loading ? (
            <div className="text-2xl text-center">Loading...</div>
          ) : (
            products?.map(({ id, category, description, title, price }) => (
              <li key={id}>
                <div className="bg-zinc-100 my-0.5 mx-2.5 px-3.5 py-1.5">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="flex justify-between">
                    <span>{category}</span>
                    <span>${price}</span>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default ClientSideRendering;
