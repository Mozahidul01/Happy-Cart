import React from "react";

export default function ReviewItem({ product }) {
  const { img, name, price, quantity } = product;
  return (
    <div>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
}
