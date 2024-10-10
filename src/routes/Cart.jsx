import { useOutletContext } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const { cart, setCart } = useOutletContext();

  function increment(targetId) {
    setCart(
      cart.map((item) => {
        if (item.id === targetId)
          return { ...item, quantity: item.quantity + 1 };
        else return item;
      })
    );
  }

  function decrement(targetId) {
    setCart(
      cart
        .map((item) => {
          if (item.id === targetId) {
            return { ...item, quantity: item.quantity - 1 };
          } else return item;
        })
        .filter((item) => item.quantity !== 0)
    );
  }

  function checkout() {
    alert("Thank you for purchasing from us!");
    setCart([]);
  }

  return (
    <>
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        <>
          <table>
            <tbody>
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div
                      className="small-image"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                  </td>
                  <td>{item.title}</td>
                  <td>
                    <div className="quantity">
                      <button onClick={() => decrement(item.id)}>-</button>
                      <p>{item.quantity}</p>
                      <button onClick={() => increment(item.id)}>+</button>
                    </div>
                  </td>
                  <td>{(item.price * item.quantity).toFixed(2)} $</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td>Total:</td>
                <td>
                  {`${cart
                    .reduce(
                      (total, item) => total + item.quantity * item.price,
                      0
                    )
                    .toFixed(2)} $`}
                </td>
              </tr>
            </tbody>
          </table>
          <button className="checkout" onClick={() => checkout()}>
            Checkout
          </button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </>
  );
}
