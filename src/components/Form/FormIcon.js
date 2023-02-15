import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

export default function FormIcon() {
  const { googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="flex items-center w-full bg-orange text-lg font-medium py-3 gap-3 justify-center rounded-md hover:bg-gray-light"
    >
      <span>
        <FcGoogle className="text-3xl" />
      </span>
      Continue with Google
    </button>
  );
}
