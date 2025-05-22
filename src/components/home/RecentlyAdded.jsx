import React from 'react'
import Container from "@/components/home/Container";
import ProductBox from "../ProductBox";

export default async function RecentlyAdded() {
  const response = await fetch("https://fakestoreapi.in/api/products?limit=5");
  const data = await response.json();

  return (
    <div className="bg-gray-100 p-3">
      <Container>
        <h1 className="text-center text-3xl font-bold">
          Recently Added Products
        </h1>
        <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {data.products.map(
            (prod) => {
              return (
                <ProductBox key={prod.id} product={prod} />
              )
            }
          )};
        </div>
      </Container>
    </div>
  );
}
