import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart";
import ReviewItem from "../ReviewItem";
import { deleteDb, removeFromDb } from "../../utilities/fakedb";
export default function Orders() {
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const handleRemoveProduct = (id) => {
    const remainingCart = cart.filter((product) => product.id !== id);
    setCart(remainingCart);
    removeFromDb(id);
  };

  const clearCart = () => {
    setCart([]);
    deleteDb();
  };

  return (
    <div className="container mx-auto grid lg:grid-cols-2">
      <div className="m-6">
        {cart.length === 0 ? (
          <h2 className="text-2xl font-bold text-center">
            No Product for Review. Please Shop...
          </h2>
        ) : (
          cart.map((product) => (
            <ReviewItem
              key={product.id}
              product={product}
              handleRemoveProduct={handleRemoveProduct}
            />
          ))
        )}
      </div>
      <div className="bg-milk mx-auto my-4 md:w-3/5 w-full max-h-max">
        <Cart cart={cart} clearCart={clearCart}>
          <Link to="/shipping">
            <button className="btn btn-md w-full bg-orange border-none text-black hover:bg-darkOrange">
              Procss Shipping
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
}
