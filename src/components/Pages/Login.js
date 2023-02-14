import { Link } from "react-router-dom";
import FormHeader from "../Form/FormHeader";
import FormControl from "../Form/FormControl";
import FormIcon from "../Form/FormIcon";

export default function Login() {
  return (
    <div className="h-max">
      <div className="bg-milk rounded-md shadow-lg max-w-sm md:max-w-md mx-auto py-4 mt-20">
        <FormHeader title="log in" />
        <form className="px-6">
          <FormControl
            htmlFor="email"
            label="Email"
            type="email"
            name="email"
          />
          <FormControl
            htmlFor="password"
            label="Password"
            type="password"
            name="password"
          />

          <button
            type="submit"
            className="btn px-8 bg-darkOrange text-black font-bold border-0 my-4 hover:bg-gray-light"
          >
            Log In
          </button>
        </form>
        <div className="text-center font-medium">
          Don't have an account ?
          <Link to="/signup" className="text-darkOrange">
            {" "}
            Create Account
          </Link>
        </div>

        <div className="divider" />

        <div className="px-6 py-3">
          <FormIcon />
        </div>
      </div>
    </div>
  );
}
