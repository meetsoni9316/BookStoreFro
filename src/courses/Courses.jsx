import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Course from "../Components/Course";

function Courses() {
  return (
    <>
      <Navbar />
      <div>
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
