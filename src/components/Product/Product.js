import React from "react";
import { ShoppingCart } from "react-feather";
import "./Product.css";

export default function Product({ product, handleAddToCart }) {
  const { name, category, seller, price, ratings, img } = product;
  return (
    <div className="product">
      <img className="product-img" src={img} alt={name} />
      <div className="product-info">
        <p className="product-category">{category}</p>
        <p className="product-name">{name}</p>
        <p className="product-price">Price: ${price}</p>
        <p className="product-seller">
          Menufacturer: <span>{seller}</span>
        </p>
        <p className="product-ratings">
          Rating: <span>{ratings} rating</span>
        </p>
      </div>
      <button
        onClick={() => handleAddToCart(product)}
        className="add-to-cart-btn"
      >
        <ShoppingCart />
        <p>Add To Cart</p>
      </button>
    </div>
  );
}
