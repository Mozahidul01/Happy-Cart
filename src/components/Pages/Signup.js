import { Link, useNavigate } from "react-router-dom";
import FormHeader from "../Form/FormHeader";
import FormControl from "../Form/FormControl";
import FormIcon from "../Form/FormIcon";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/UserContext";

export default function Signup() {
  const [error, setError] = useState(null);
  const [loding, setLoding] = useState("");

  const { signUp } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    //Input fields validate
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    const passwordRegex = "^(?=.*?[a-z])(?=.*?[0-9]).{6,}$";

    //Password Strength Validate
    if (!password.match(passwordRegex)) {
      setError(
        "Password must be at least 6 characters long and contain at least one letter, & one number "
      );
      return;
    }

    //Password and Confirm Password Validate
    if (password !== confirmPassword) {
      setError("Passwords Don't Match!");
      return;
    }

    signUp(email, password)
      .then((res) => {
        const user = res.user;
        setError("");
        setLoding(true);
        form.reset();
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setLoding(false);
        setError("Faild to create an account!");
      });
  };

  return (
    <div className="h-max">
      <div className="bg-milk rounded-md shadow-lg max-w-sm md:max-w-md mx-auto py-4 mt-20">
        <FormHeader title="Create Account" />
        <form onSubmit={handleSubmit} className="px-6">
          <FormControl htmlFor="name" label="Name" type="text" name="name" />
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
          <FormControl
            htmlFor="confirmPassword"
            label="Confirm Password"
            type="password"
            name="confirmPassword"
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
            Sign Up
          </button>
        </form>
        <div className="text-center font-medium">
          Already have an account ?
          <Link to="/login" className="text-darkOrange">
            {" "}
            Log In
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
