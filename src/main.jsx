import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Cart from "./routes/Cart";
import Products from "./routes/Products";
import "./index.css";
import { loader as productLoader } from "./routes/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <h1>Hello world!</h1> },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: productLoader,
      },
      {
        path: "/products/:productId",
        element: <h1>Product 1</h1>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
