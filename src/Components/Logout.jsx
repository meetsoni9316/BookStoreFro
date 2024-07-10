import React from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";
function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout successfully");

      setTimeout(() => {
        window.location.reload();
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      }, 1000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };

  return (
    <div>
      <button
        className="bg-red-500 text-black px-3 py-1 rounded-md hover:bg-slate-800 hover:text-white duration-300 cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
