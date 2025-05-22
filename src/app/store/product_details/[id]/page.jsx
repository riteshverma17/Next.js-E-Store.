import React from "react";
import Container from "@/components/home/Container";
import { getProducts } from "@/library";

export default async function ProductDetails({ params }) {
  const product = await getProducts(params.id);

  return (
    <Container>
      <div className="max-w-5xl mx-auto mt-12 bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
        <div className="text-center py-10">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 drop-shadow-lg">
    Product Details
  </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
            Discover the full specifications and features
          </p>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-4 rounded-full animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8">
          <div className="flex justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-80 w-auto object-contain rounded-xl border"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              {product.title}
            </h1>

            <div className="flex items-center space-x-3">
              <p className="text-2xl font-bold text-green-600">
                ${product.price}
              </p>
              <span className="bg-red-100 text-red-600 text-sm font-medium px-2 py-1 rounded-full">
                {product.discount}% OFF
              </span>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-300">
              Category: <span className="capitalize">{product.category}</span>
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-300">
              Brand:{" "}
              <span className="capitalize font-semibold">{product.brand}</span>
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-300">
              Model:{" "}
              <span className="uppercase font-semibold">{product.model}</span>
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-300">
              Color:{" "}
              <span className="capitalize font-semibold">{product.color}</span>
            </p>

            <p className="text-base text-gray-700 dark:text-gray-200">
              {product.description}
            </p>

            <div className="mt-6">
              <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
