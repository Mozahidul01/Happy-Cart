import { Link } from "react-router-dom";
import FormHeader from "../Form/FormHeader";
import FormControl from "../Form/FormControl";
import FormIcon from "../Form/FormIcon";

export default function Signup() {
  return (
    <div className="form-section">
      <div className="form-container">
        <FormHeader title="Create Account" />
        <form>
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

          <button type="submit" className="form-btn">
            Sign Up
          </button>
        </form>
        <div className="form-extra">
          Already have an account ?<Link to="/login"> Log In</Link>
        </div>

        <div className="divider" />

        <FormIcon />
      </div>
    </div>
  );
}
