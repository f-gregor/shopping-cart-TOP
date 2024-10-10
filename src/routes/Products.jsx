import { useLoaderData, useOutletContext } from "react-router-dom";
import { getProducts } from "../products";
import { ProductCard } from "../components/ProductCard/ProductCard";
import "./Products.css";

export async function loader() {
  const products = await getProducts();
  return { products };
}

export default function Products() {
  const { products } = useLoaderData();
  const { cart, setCart } = useOutletContext();

  function addToCart(product) {
    return (quantity) => {
      if (quantity < 1) {
        alert(
          "Invalid quantity. Please insert a valid quantity (greater than 0)"
        );
        return;
      }

      let productAlreadyInCart = false;

      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          productAlreadyInCart = true;
          return { ...item, quantity: item.quantity + quantity };
        } else {
          return item;
        }
      });

      if (!productAlreadyInCart) {
        newCart.push({
          id: product.id,
          image: product.image,
          title: product.title,
          price: product.price,
          quantity: quantity,
        });
      }

      setCart(newCart);
    };
  }

  return (
    <>
      <h1>Products</h1>
      <hr />
      <div className="container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
            onClick={addToCart(product)}
          />
        ))}
      </div>
    </>
  );
}
