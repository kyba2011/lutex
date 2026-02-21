import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Sale from "./Components/BLock-sale/Sale";
import ProductDetail from "./Components/ProductDetail";
import Cart from "./Components/Cart";
import Favorites from "./Components/Favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "sale",
        element: <Sale />,
      },
      {
        path: "about/:name",
        element: <ProductDetail />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
]);
