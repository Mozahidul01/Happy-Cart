import { Link } from "react-router-dom";

export default function Cart({ cart, clearCart }) {
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
    <div className="p-6 text-black">
      <h3 className="md:text-2xl text-xl font-bold uppercase text-center my-4">
        Order Summary
      </h3>
      <p className="text-lg font-semibold mb-2">
        Selected Items:{" "}
        <span className="text-darkOrange font-bold">{quantity}</span>
      </p>
      <p className="font-medium mb-2">
        Total Price:{" "}
        <span className="text-darkOrange font-semibold">${price}</span>
      </p>
      <div className="font-medium mb-2">
        Total shipping Charge:{" "}
        <span className="text-darkOrange font-semibold">${shipping}</span>
      </div>
      <div className="font-medium mb-2">
        Total Tax: <span className="text-darkOrange font-semibold">${tax}</span>
      </div>
      <h4 className="text-lg font-semibold mb-4">
        Grand Total:{" "}
        <span className="text-darkOrange font-bold">${grandTotal}</span>
      </h4>
      <div className="flex gap-4 flex-col">
        <Link
          to="/orders"
          className="btn btn-md bg-orange border-none text-black hover:bg-darkOrange"
        >
          Checkout
        </Link>
        <button className="btn btn-error btn-md" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}
