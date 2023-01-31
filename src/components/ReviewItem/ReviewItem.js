import React from "react";
import { Trash2 } from "react-feather";
import "./ReviewItem.css";

export default function ReviewItem({ product, handleRemoveProduct }) {
  const { id, img, name, price, quantity } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="review-details-container">
        <div className="review-details">
          <h4>{name}</h4>
          <p>
            Price: <span>${price}</span>
          </p>
          <p>
            Quantity: <span>{quantity}</span>
          </p>
        </div>
        <div className="delete-container">
          <button onClick={() => handleRemoveProduct(id)}>
            <Trash2 />
          </button>
        </div>
      </div>
    </div>
  );
}
