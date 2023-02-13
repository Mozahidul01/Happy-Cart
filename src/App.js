import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Shop from "./components/Pages/Shop";
import Orders from "./components/Pages/Orders";
import About from "./components/Pages/About";
import Signup from "./components/Pages/Signup";
import Login from "./components/Pages/Login";
import { ProductsAndCartLoader } from "./loaders/ProductsAndCartLoader";
import Home from "./components/Pages/Home";
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
