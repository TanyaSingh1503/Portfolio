import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 text-white py-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full px-2 overflow-auto">
        <div className="flex flex-col justify-center mt-40">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Data Analyst.
          </h2>
          <p className="text-gray-500 py-4 px-1">
            Passionate about uncovering patterns, solving problems, and turning data into stories.
          </p>
        </div>
        <NavLink to={'/portfolio'}  className="group-hover:rotate-90 text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
          Portfolio{" "}
          <span className="hover:rotate-90 duration-300">
            <FaArrowRight size={20} className="ml-1" />
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
