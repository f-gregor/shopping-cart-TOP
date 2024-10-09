import { useOutletContext } from "react-router-dom";

export default function Cart() {
  const { cart } = useOutletContext();
  return (
    <>
      <h1>Your Cart</h1>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {`${item.quantity} x Product with id=${item.id}`}
          </li>
        ))}
      </ul>
    </>
  );
}
