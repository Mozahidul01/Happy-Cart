import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteDb, removeFromDb } from "../../utilities/fakedb";
import "./Orders.css";

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
    <div className="orders-container">
      <div className="orders-products">
        {cart.length === 0 ? (
          <h2>No Product for Review. Please Shop...</h2>
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
      <div className="orders-cart">
        <Cart cart={cart} clearCart={clearCart} />
      </div>
    </div>
  );
}
