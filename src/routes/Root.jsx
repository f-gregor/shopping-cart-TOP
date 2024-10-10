import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Root() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <nav>
        <div className="wrapper">
          <ul>
            <li>
              <Link to={`/`}>SweetDealz</Link>
            </li>
            <li>
              <Link to={`/products`}>Products</Link>
            </li>
          </ul>

          <Link to={"/cart"}>
            <div className="cart">
              {cart.length > 0 && (
                <div className="tooltip">
                  {/* {cart.reduce(
                    (numOfItems, item) => numOfItems + item.quantity,
                    0
                  )} */}
                  {cart.length}
                </div>
              )}
            </div>
          </Link>
        </div>
      </nav>
      <main>
        <div className="wrapper">
          <Outlet context={{ cart, setCart }} />
        </div>
      </main>
      <footer>
        <div className="wrapper">
          Dummy products were fetched from{" "}
          <a href="https://fakestoreapi.com/" target="_blank">
            FakeStoreAPI
          </a>
          .
        </div>
      </footer>
    </>
  );
}
