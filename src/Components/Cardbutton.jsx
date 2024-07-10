import React from "react";
import { Link } from "react-router-dom";

function Cardbutton() {
  return (
    <>
      <div className="flex h-screen  items-center  justify-center dark:bg-slate-900 dark:text-white ">
        <div className="w-[600px] dark:bg-slate-900 dark:text-white">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form method="dialog" className="dark:bg-slate-900 dark:text-white">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                {" "}
                ✕{" "}
              </Link>

              <h3 className="font-bold text-lg dark:bg-slate-900 dark:text-white">
                Thankyou For Showing Interest
              </h3>
              <br />

              <div
                className="
    dark:bg-slate-900 dark:text-white"
              >
                We are going to upload soon. Please stay updated.
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cardbutton;
