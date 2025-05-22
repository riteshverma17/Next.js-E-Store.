import Container from "@/components/home/Container";
import ProductBox from "@/components/ProductBox";
import { getCategory, getProducts } from "@/library";
import styles from "@/styles/home/hero.module.css";
import Link from "next/link";
import React from "react";

export default function storePage() {
  return (
    <Container className="my-7">
      <div className="grid grid-cols-5 gap-3">
        <CategoryListing />
        <ProductyListing />
      </div>
    </Container>
  );
}

const CategoryListing = async () => {
  const data = await getCategory();
  return (
    <div>
      <div className="text-2xl my-3 text-center">Categories</div>
      <ul className="flex flex-col items-center ">
        {data.map((d) => (
          <Link
            key={d}
            href={`/category/${d}`}
            className={`${styles.ctaButton} w-full text-center m-2 transition`}
          >
            {d.toUpperCase()}
            
          </Link>
        ))}
      </ul>
    </div>
  );
};

const ProductyListing = async () => {
  const data = await getProducts();
  return (
    <div className="col-span-4 grid grid-cols-3 gap-3">
      {data.map((d) => (
        <ProductBox product={d} key={d.id} />
      ))}
    </div>
  );
};
