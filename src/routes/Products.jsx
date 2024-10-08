const fakeItems = [
  {
    id: 1,
    name: "Product 1",
    cost: 10,
  },
  {
    id: 2,
    name: "Product 2",
    cost: 5.5,
  },
  {
    id: 3,
    name: "Product 3",
    cost: 7.8,
  },
];

export default function Products() {
  return (
    <>
      <h1>Products</h1>
      {fakeItems.map((item) => {
        return (
          <div key={item.id}>
            {`${item.name} - Price: ${item.cost.toFixed(2)}`}
            {<button>Add to cart</button>}
          </div>
        );
      })}
    </>
  );
}
