import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsAndCartLoader } from "./loaders/ProductsAndCartLoader";
import Main from "./layouts/Main";
import Home from "./components/Pages/Home";
import Shop from "./components/Pages/Shop";
import Orders from "./components/Pages/Orders";
import About from "./components/Pages/About";
import Signup from "./components/Pages/Signup";
import Login from "./components/Pages/Login";
import Shipping from "./components/Pages/Shipping";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      loader: ProductsAndCartLoader,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "shop",
          loader: ProductsAndCartLoader,
          element: <Shop />,
        },
        {
          path: "orders",
          loader: ProductsAndCartLoader,
          element: <Orders />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "shipping",
          element: (
            <PrivateRoute>
              <Shipping />,
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
