import React from "react";
import "./Cart.css";

export default function Cart({ cart }) {
  let price = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    price = price + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((price * 0.1).toFixed(2));

  const grandTotal = price + shipping + tax;

  return (
    <div className="cart">
      <h3 className="cart-title">Order Summary</h3>
      <p className="cart-item">
        Selected Items: <span>{quantity}</span>
      </p>
      <p className="cart-total-price">
        Total Price: <span>${price}</span>
      </p>
      <div className="cart-shipping">
        Total shipping Charge: <span>${shipping}</span>
      </div>
      <div className="cart-tax">
        Total Tax: <span>${tax}</span>
      </div>
      <h4 className="cart-grand-total">
        Grand Total: <span>${grandTotal}</span>
      </h4>
    </div>
  );
}
