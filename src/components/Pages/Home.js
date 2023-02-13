import { Link } from "react-router-dom";
import img from "../../images/hero.png";

export default function Home() {
  return (
    <div className="bg-milk max-h-fit">
      <div className="container min-h-[93vh] mx-auto flex flex-col lg:flex-row md:items-center pl-10">
        <div className="w-1/2 py-12">
          <h1 className="text-4xl md:text-7xl font-bold text-gray py-4">
            HUGE <br />
            DISCOUNTS
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-black">
            BLACK FRIDAY SALE
          </p>
          <p className="py-6 text-sm md:text-lg font-medium text-gray-gray">
            Find everything you need for a stylish and comfortable lifestyle at
            unbeatable prices. With a vast selection of the latest fashion, home
            decor, and tech products, we make it easy to upgrade your life.
          </p>
          <Link
            to="/shop"
            className="btn bg-darkOrange text-black font-bold px-6 border-0 btn-md hover:bg-gray"
          >
            Find Out Here
          </Link>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img src={img} alt="hero-img" className="h-fit w-[16rem]" />
        </div>
      </div>
    </div>
  );
}
