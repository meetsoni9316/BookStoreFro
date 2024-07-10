import React from "react";
import { Link } from "react-router-dom";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card  w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img className="p-10" src={item.image} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.namer}
              <div className="badge badge-secondary">{item.b}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <Link
                to="/cardbutton"
                className="cursor-pointer px-2 py-1 border-[2px] rounded-full hover:bg-pink-500 hover:text-white duration-200 p-2"
              >
                Click Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
