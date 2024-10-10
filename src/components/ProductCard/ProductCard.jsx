import "./ProductCard.css";
import { useState } from "react";

function ProductCard({ imageUrl, title, price, onClick }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="card">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h3>{title}</h3>
        <div className="price-section">
          <p>{price.toFixed(2)} $</p>
          <button
            className="add"
            onClick={() => {
              onClick(quantity);
              setQuantity(1);
            }}
          >
            Add to cart
          </button>
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </div>
      </div>
    </div>
  );
}

function QuantitySelector({ quantity, setQuantity }) {
  function handleChange(e) {
    setQuantity(Number(e.target.value.replace(/\D/g, "")));
  }

  return (
    <div className="quantity-selector">
      <button
        disabled={quantity <= 1}
        onClick={() => setQuantity((q) => q - 1)}
      >
        -
      </button>
      <input type="tel" value={quantity} onChange={handleChange} />
      <button onClick={() => setQuantity((q) => q + 1)}>+</button>
    </div>
  );
}

export { ProductCard };
