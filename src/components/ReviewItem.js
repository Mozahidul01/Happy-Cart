import { AiOutlineDelete } from "react-icons/ai";

export default function ReviewItem({ product, handleRemoveProduct }) {
  const { id, img, name, price, quantity } = product;
  return (
    <div className="flex gap-2 bg-milk my-4 md:mx-6 rounded-md overflow-hidden">
      <div className="w-16 md:w-20">
        <img src={img} alt={name} />
      </div>
      <div className="grow flex items-center">
        <div className="grow">
          <h4 className="md:text-lg text-sm font-bold text-black">{name}</h4>
          <p className="md:text-lg font-semibold">
            Price: <span className="text-darkOrange">${price}</span>
          </p>
          <p className="font-medium">
            Quantity: <span>{quantity}</span>
          </p>
        </div>

        <button
          className="flex-none w-10 h-10 rounded-full mx-4 text-black flex items-center justify-center bg-error ease-in duration-200 hover:bg-error-content hover:text-white"
          onClick={() => handleRemoveProduct(id)}
        >
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
}
