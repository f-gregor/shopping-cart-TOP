async function getProducts() {
  const url = "https://fakestoreapi.com/products";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  return json;
}

export { getProducts };
