import { useLoaderData, useOutletContext } from "react-router-dom";
import { getProducts } from "../products";
import { ProductCard } from "../components/ProductCard/ProductCard";

export async function loader() {
  const products = await getProducts();
  return { products };
}

export default function Products() {
  const { products } = useLoaderData();
  const { addToCart } = useOutletContext();

  return (
    <>
      <h1>Products</h1>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          onClick={() => addToCart(product)}
        />
      ))}
    </>
  );
}
