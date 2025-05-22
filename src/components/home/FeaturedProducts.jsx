import React from 'react'
import Container from './Container'
import ProductBox from '../ProductBox';

export default async function FeaturedProducts() {

  const response = await fetch("https://fakestoreapi.in/api/products?limit=10&page=6");
  const data = await response.json();

  return (
    <div className="p-3">
          <Container>
            <h1 className="text-center text-3xl font-bold">
              Featured Products
            </h1>

            <div className="grid grid-cols-5">
              {data.products.map(
                (prod) => {
                  return (
                    <ProductBox key={prod.id} product={prod} />
                  )
                }
              )}

            </div>
           
          </Container>
        </div>
  )
}
