import { useContext, useState } from "react";
import {
  RiMenu2Line,
  RiCloseFill,
  RiShoppingCartLine,
  RiUser3Fill,
} from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { deleteDb } from "../utilities/fakedb";
import { AuthContext } from "../Context/UserContext";
import Cart from "./Cart";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const newUid = user?.uid.slice(0, 8);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const clearCart = () => {
    setCart([]);
    deleteDb();
  };

  const handleLogout = () => {
    logOut()
      .then(() => {
        window.location.reload();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-darkBlue text-white sticky top-0">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown md:hidden">
            {mobileMenu ? (
              <button onClick={handleMobileMenu} className="btn btn-ghost ">
                <RiCloseFill className="text-2xl" />
              </button>
            ) : (
              <button onClick={handleMobileMenu} className="btn btn-ghost">
                <RiMenu2Line className="text-2xl" />
              </button>
            )}
            {mobileMenu && (
              <div className="fixed h-screen w-96 top-[4rem] left-0 z-20 bg-orange text-xl text-base-content flex flex-col justify-center items-center shadow-md gap-8 py-8">
                <Link
                  className="text-2xl uppercase font-bold py-2 text-center w-full hover:bg-darkOrange"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="text-2xl uppercase font-bold py-2 text-center w-full hover:bg-darkOrange"
                  to="/shop"
                >
                  Shop
                </Link>

                <Link
                  className="text-2xl uppercase font-bold py-2 text-center w-full hover:bg-darkOrange"
                  to="/about"
                >
                  About
                </Link>

                <Link
                  className="text-2xl uppercase font-bold py-2 text-center w-full hover:bg-darkOrange"
                  to="/contact"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
          <div className="">
            <Link to="/" className="text-lg md:text-2xl font-bold uppercase">
              Happy Cart
            </Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          {/* Cart Menu */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <RiShoppingCartLine className="text-2xl" />
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-max shadow-lg"
            >
              <div className="card-body bg-white">
                <Cart cart={cart} clearCart={clearCart}>
                  <Link
                    to="/orders"
                    className="btn btn-md bg-orange border-none text-black hover:bg-darkOrange"
                  >
                    Checkout
                  </Link>
                </Cart>
              </div>
            </div>
          </div>
          {/* User Menu */}
          {user ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar flex items-center justify-center"
              >
                <RiUser3Fill className="text-2xl" />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 py-4 px-2 shadow bg-white text-black font-semibold rounded-box w-64 z-20"
              >
                <div className="flex flex-col justify-center items-center">
                  <RiUser3Fill className="w-9 h-9 mb-2" />
                  <p className="font-semibold capitalize">
                    {user?.displayName || "No Name"}
                  </p>
                  <p className="text-sm mb-2">{user?.email}</p>
                  <p className="text-xs capitalize">Student Id: {newUid}</p>
                </div>
                <div className="divider" />
                <li>
                  <Link to="/">Profile</Link>
                </li>
                <li>
                  <Link to="/">Settings</Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="bg-error my-2 hover:bg-error-content hover:text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/signup" className="btn btn-md px-6 btn-outline btn-info">
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
