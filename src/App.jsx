import React from "react";
import Home from "./home/Home";

import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./Components/Signup";
import Contact from "./Components/Contact";
import Login from "./Components/Login";

import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import About from "./Components/About";
import Cardbutton from "./Components/Cardbutton";

export default function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/cardbutton" element={<Cardbutton />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}
