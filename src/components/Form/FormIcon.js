import { FcGoogle } from "react-icons/fc";

export default function FormIcon() {
  return (
    <button className="flex items-center w-full bg-orange text-lg font-medium py-3 gap-3 justify-center rounded-md hover:bg-gray-light">
      <span>
        <FcGoogle className="text-3xl" />
      </span>
      Continue with Google
    </button>
  );
}
