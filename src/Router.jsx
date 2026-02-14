import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Sale from "./Components/BLock-sale/Sale";
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
        path: 'sale',
        element: <Sale />
      }

    ],
  },
]);