import { Link, useLocation, useNavigate } from "react-router-dom";
import FormHeader from "../Form/FormHeader";
import FormControl from "../Form/FormControl";
import FormIcon from "../Form/FormIcon";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/UserContext";

export default function Login() {
  const [error, setError] = useState(null);
  const [loding, setLoding] = useState("");

  const { logIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    //Input fields validate
    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    logIn(email, password)
      .then((res) => {
        const user = res.user;
        setError("");
        setLoding(true);
        navigate(from, { replace: true });
        form.reset();
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setLoding(false);
        setError("Faild to Log In!");
      });
  };

  return (
    <div className="h-max">
      <div className="bg-milk rounded-md shadow-lg max-w-sm md:max-w-md mx-auto py-4 mt-20">
        <FormHeader title="log in" />
        <form onSubmit={handleSubmit} className="px-6">
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

          {error && (
            <p className="text-sm text-center font-medium text-error mt-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loding}
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
