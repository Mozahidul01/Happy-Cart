import { Link } from "react-router-dom";
import FormHeader from "../Form/FormHeader";
import FormControl from "../Form/FormControl";
import FormIcon from "../Form/FormIcon";

export default function Login() {
  return (
    <div className="form-section">
      <div className="form-container">
        <FormHeader title="log in" />
        <form>
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

          <button type="submit" className="form-btn">
            Log In
          </button>
        </form>
        <div className="form-extra">
          Don't have an account ?<Link to="/signup"> Create Account</Link>
        </div>

        <div className="divider" />

        <FormIcon />
      </div>
    </div>
  );
}
