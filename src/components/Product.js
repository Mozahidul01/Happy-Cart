import { CiShoppingCart } from "react-icons/ci";

export default function Product({ product, handleAddToCart }) {
  const { name, category, seller, price, ratings, img } = product;
  return (
    <div className="bg-white border border-gray-light rounded-lg shadow-lg overflow-hidden w-[20rem] sm:w-fit mx-auto">
      <img className="w-fit " src={img} alt={name} />
      <div className="flex flex-col justify-between px-4 py-4 min-h-[15rem]">
        <div className="flex flex-col gap-1">
          <p className="text-xs text-gray">{category}</p>
          <p className="font-bold text-black">{name}</p>
          <p className="font-semibold text-lg text-darkOrange">
            Price: ${price}
          </p>
          <p className="text-sm text-gray">
            Menufacturer: <span>{seller}</span>
          </p>
          <p className="text-sm text-gray">
            Rating: <span>{ratings} rating</span>
          </p>
        </div>
        <div>
          <button
            onClick={() => handleAddToCart(product)}
            className="btn bg-orange text-black border-0 gap-2 btn-md hover:bg-darkOrange"
          >
            <CiShoppingCart className="text-2xl" />
            <span>Add To Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
