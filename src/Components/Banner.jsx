import React from "react";
import banner from "../../public/Baner.png";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Banner() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userinfo = {
      email: data.email,
    };

    await axios
      .post("https://bookstore-backend-0hho.onrender.com/user/emails", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Our Team Will Contact You Soon");
          navigate(from, { replace: true });
          // document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            // localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((error) => {
        if (error.message) {
          console.log(error);

          toast.error("Error: " + error.message);
          setTimeout(() => {}, 2000);
        }
      });
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10  space-y-5">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-5 md:mt-36 md:pb-10 ">
          <div className="space-y-12">
            <h1 className="text-4xl  font-bold space-y-2 ">
              Welcome to BookStore, Explore Our{" "}
              <span className="text-pink-500">Handpicked Selection!</span>
            </h1>
            <p className="text-xl ">
              Embark on a literary journey unlike any other at BookStore, where
              every page holds the promise of knowledge, and inspiration. At
              BookStore, we believe in the power of stories to transport us to
              new worlds and expand our horizons. Step into our shelves and
              discover a curated collection of timeless classics, heartwarming
              tales, and thought-provoking narratives.
            </p>

            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 dark:bg-black h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  className="grow "
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </label>
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
              <br />
              <button className="btn mt-6 btn-secondary bg-pink-500 hover:bg-pink-700 ">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="w-full h-full  order-1 md:w-1/2 md:mr-50 md:p-20 p-10 mt-10 m-auto">
          <img src={banner} className="order-1 h-92 w-92 " alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
