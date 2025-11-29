import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="flex px-4 justify-between items-center w-full h-20 bg-black text-white z-100 fixed">
      <div>
        <h1 className="text-5xl ml-2 font-light tracking-[0.1em] text-gray-400">
          Tanya Singh
        </h1>
      </div>

      <ul className="hidden md:flex">
        <NavLink
          to={"/"}
          className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
        >
          About
        </NavLink>
        <NavLink
          to={"/portfolio"}
          className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
        >
          Projects
        </NavLink>
        <NavLink
          to={"/technicalstack"}
          className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
        >
          Technical Stack
        </NavLink>
        <NavLink to={'/experience'} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
          Experience
        </NavLink>
        <NavLink
          to={"/contact"}
          className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
        >
          Contact
        </NavLink>
      </ul>
      <div
        onClick={() => setShowNav(!showNav)}
        className=" md:hidden cursor-pointer pr-4 z-10 text-gray-500"
      >
        {showNav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {showNav && (
        <ul className="flex flex-col justify-center h-screen w-full absolute top-0 left-0 items-center bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <NavLink
            to={"/"}
            onClick={() => setShowNav(!showNav)}
            className="px-4 cursor-pointer py-6 capitalize text-4xl"
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            onClick={() => setShowNav(!showNav)}
            className="px-4 cursor-pointer py-6 capitalize text-4xl"
          >
            About
          </NavLink>
          <NavLink
            to={"/portfolio"}
            onClick={() => setShowNav(!showNav)}
            className="px-4 cursor-pointer py-6 capitalize text-4xl"
          >
            PortFolio
          </NavLink>
          <NavLink
            to={"/technicalstack"}
            onClick={() => setShowNav(!showNav)}
            className="px-4 cursor-pointer py-6 capitalize text-4xl"
          >
            TechnicalStack
          </NavLink>
          {/* <NavLink to={'/expeirence'} onClick={() => setShowNav(!showNav)} className="px-4 cursor-pointer py-6 capitalize text-4xl">
            Expeirence
          </NavLink> */}
          <NavLink
            to={"/contact"}
            onClick={() => setShowNav(!showNav)}
            className="px-4 cursor-pointer py-6 capitalize text-4xl"
          >
            Contact
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
