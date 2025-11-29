import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 text-white py-20"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full px-2 overflow-auto">
        <div className="flex flex-col justify-center mt-40">
          <h2 className="text-4xl sm:text-7xl font-extrabold text-white leading-tight">
            I'm a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-300">
              Data Analyst.
            </span>
          </h2>

          <p className="text-gray-400 py-4 max-w-xl">
            Passionate about uncovering patterns, solving problems, and turning
            data into meaningful stories that drive decisions.
          </p>
        </div>
        <NavLink
          to={"/portfolio"}
          className="group-hover:rotate-90 text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
        >
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
