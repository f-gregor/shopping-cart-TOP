import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Root() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    let productAlreadyInCart = false;

    const newCart = cart.map((item) => {
      if (item.id === product.id) {
        productAlreadyInCart = true;
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });

    if (!productAlreadyInCart) {
      newCart.push({ id: product.id, quantity: 1 });
    }

    setCart(newCart);
  }

  return (
    <>
      <nav>
        <div className="navbar">
          <ul>
            <li>
              <Link to={`/`}>ThriftShop</Link>
            </li>
            <li>
              <Link to={`/products`}>Products</Link>
            </li>
          </ul>

          <Link to={"/cart"}>
            <button className="cartButton">
              {/* {cart.length > 0 && (
              <div className="tooltip">
                {cart.reduce(
                  (numOfItems, item) => numOfItems + item.quantity,
                  0
                )}
              </div>
            )} */}
            </button>
          </Link>
        </div>
      </nav>
      <main>
        <Outlet context={{ cart, addToCart }} />
      </main>
      <footer></footer>
    </>
  );
}
