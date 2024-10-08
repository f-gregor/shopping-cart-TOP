export default function Cart() {
  return (
    <>
      <h1>Your Cart</h1>
      {/* <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.quantity} x {item.name}
          </li>
        ))}
      </ul>
      <p>
        {`Total: ${cart
          .reduce((total, item) => total + item.cost * item.quantity, 0)
          .toFixed(2)} $`}
      </p> */}
    </>
  );
}
