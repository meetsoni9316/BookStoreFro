import React from "react";
import { Link } from "react-router-dom";
// import Login from './Login';
import { useForm } from "react-hook-form";

import axios from "axios";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

function Contact() {
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
      name: data.name,
      email: data.email,
      message: data.message,
    };
    await axios
      .post("https://bookstore-backend-0hho.onrender.com/user/contact", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Submitted Successfully");
          navigate(from, { replace: true });
        }

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((error) => {
        if (error) {
          console.log(error);

          toast.error("Error: " + error.message);
          setTimeout(() => {}, 2000);
        }
      });
  };

  return (
    <>
      <div className="flex h-screen  items-center  justify-center dark:bg-slate-210">
        <div className="w-[600px]">
          <div className="modal-box dark:bg-slate-900 dark:text-whhite">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                {" "}
                ✕{" "}
              </Link>

              <h3 className="font-bold text-lg">Contact Us</h3>
              <div className="mt-4">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-whhite"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-4">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-whhite"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="mt-4">
                <span>Message</span>
                <br />
                <textarea
                  rows="5"
                  cols="5"
                  placeholder="Write your message here"
                  className="w-80 px-3 border rounded-md outline-none dark:bg-slate-900 dark:text-whhite"
                  {...register("message", { required: true })}
                />
                <br />
                {errors.message && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              <div className="flex mt-4">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
