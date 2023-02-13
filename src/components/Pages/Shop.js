import { useEffect, useState } from "react";
import Product from "../Product";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import { useLoaderData } from "react-router-dom";

export default function Shop() {
  const { products } = useLoaderData();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    let newCart;
    const exists = products.find(
      (product) => product.id === selectedProduct.id
    );

    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="bg-milk">
      <div className="container mx-auto py-12 grid grid-cols-1 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 lg:gap-6">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
