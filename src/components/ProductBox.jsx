import React from "react";
import styles from "@/styles/productBox.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ProductBox({product}) {
  return (
    <div className={`${styles.card} bg-white shadow-lg m-1 rounded-lg p-5`}>
      <Link href={"/store/product_details/" + product.id}>
        <Image
          width={300}
          height={150}
          src={product.image}
          alt={product.title}
          className={`${styles.productImage} w-full h-48 object-cover rounded-md`}
        />
      </Link>

      <div className="mt-4 ">
        <h3 className="text-sm min-h-[70px] font-semibold ☐ text-gray-800">{product.title}</h3>

        <p className="text-gray-900 font-semibold mt-2">${product.price}</p>

        <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
}
