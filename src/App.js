import Home from "./Pages/Home/Home";
import { createRoot } from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import User from "./Pages/User/User";
import Products from "./Pages/Products/Products";
import Transction from "./Pages/Transction/Transction";
import Total_order from "./Pages/Total_orders/Total_order";
import Single_product from "./Pages/Single_product/Single_product";
import Single_user from "./Pages/Single_user/Single_user";
import Single_order from "./Pages/Single_order/Single_order";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "user",
    element: <User />,
  },
  {
    path: "user/:id",
    element: <Single_user />,
  },
  {
    path: "product",
    element: <Products />,
  },
  {
    path: "product/:id",
    element: <Single_product />,
  },
  {
    path: "transction",
    element: <Transction />,
  },
  {
    path: "total_order",
    element: <Total_order />,

  },
  {
    path: "total_order/:id",
    element: <Single_order />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
