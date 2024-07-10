import React, { useEffect, useState } from "react";
import Cards from "./Cards";

import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-backend-0hho.onrender.com/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-19">
          <div className="mt-16 items-center justify-center text-center">
            <h1 className="text-2x md:text-4xl pt-12 ">
              We're delighted to have you{" "}
              <span className="text-pink-500">here!</span>
            </h1>
            <p className="mt-12">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              exercitationem odio quod voluptatem iusto id tempore omnis, soluta
              dolores voluptatum quam illo rerum nemo corporis maxime adipisci
              doloribus in laboriosam.
            </p>
            <Link to="/">
              <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6 ">
                Back
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
