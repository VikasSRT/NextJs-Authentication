import axios from "axios";

interface ProductTypes {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
}

export const generateStaticParams = async () => {
  const response = await axios.get<ProductTypes[]>(
    `https://fakestoreapi.com/products`
  );
  const products = response?.data;

  const data = products?.map((product: ProductTypes) => ({
    id: product.id.toString(),
  }));

  return data;
};

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  console.log("productId", id);
  const response = await axios.get<ProductTypes>(
    `https://fakestoreapi.com/products/${id}`
  );

  const product = response?.data;

  return (
    <div className="flex flex-col items-center mt-3.5">
      <h1 className="my-1.5 text-2xl underline">Product Details</h1>

      {product && (
        <div className="bg-stone-100 w-[400px] flex-col flex gap-2.5 px-3 py-2 rounded">
          <h2 className="text-xl">{product?.title}</h2>
          <hr />
          <p>{product?.description}</p>
          <hr />
          <span className="bg-red-500 px-2 py-1 rounded-md text-white w-fit text-sm capitalize">
            {product?.category}
          </span>
          <p className="text-xl font-bold">${product?.price}</p>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
