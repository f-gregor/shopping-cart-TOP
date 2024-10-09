import "./ProductCard.css";

function ProductCard({ image, title, price, onClick }) {
  return (
    <div>
      <div className="image"></div>
      <h2>{title}</h2>
      <p>{price.toFixed(2)} $</p>
      <button onClick={() => onClick()}>Add to cart</button>
    </div>
  );
}

export { ProductCard };
