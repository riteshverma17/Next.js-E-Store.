import Container from "@/components/home/Container";
import ProductBox from "@/components/ProductBox";
import Link from "next/link";

async function getProductsByCategory(category) {
  try {
    const res = await fetch(
      `https://fakestoreapi.in/api/products/category?type=${category}`
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch products for category: ${category}`);
    }
    const data = await res.json();
    return data.products; // returns array of products
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function CategoryPage({ params }) {
  const products = await getProductsByCategory(params.name);

  return (
    <Container className={`my-3 py-3`}>
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl shadow-lg p-6 mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white animate-pulse">
          {params.name.toUpperCase()}
        </h1>
      </div>

      <div className="text-center mb-6">
        <Link
          href="/store"
          className="inline-block px-4 py-2 text-sm md:text-base font-semibold text-white bg-gradient-to-r from-purple-700 via-gray-800 to-black rounded-full shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
        >
          ← Back to Categories
        </Link>
      </div>

      {products.length === 0 ? (
        <p className="text-center text-red-500">
          No products found in this category.
        </p>
      ) : (
        <div className="col-span-4 grid grid-cols-3 gap-3">
          {products.map((prod) => (
            <ProductBox key={prod.id} product={prod} />
          ))}
        </div>
      )}
      <div className="text-center mb-6 my-4">
        <Link
          href="/store"
          className="inline-block px-4 py-2 text-sm md:text-base font-semibold text-white bg-gradient-to-r from-purple-700 via-gray-800 to-black rounded-full shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
        >
          ← Back to Categories
        </Link>
      </div>

    </Container>
  );
}
