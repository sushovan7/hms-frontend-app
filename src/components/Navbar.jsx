import React from "react";
import { Link } from "react-router-dom";
import HamburgerIcon from "../icons/HamburgerIcon";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="w-screen md:px-10 bg-gray-200 p-3 px-6 h-[8vh] md:h-[10vh] flex justify-between items-center border border-gray-400">
      <Link to={"/"} className="text-2xl md:text-3xl font-bold text-gray-800">
        Med<span className="text-purple-600 hover:text-blue-500">Care</span>
      </Link>
      <div className="flex items-center   md:gap-6 mr-2 gap-2 font-light">
        <div className="hidden md:flex md:gap-3 md:items-center items-center gap-3">
          <Link className=" text-md" to={"about"}>
            About
          </Link>
          <Link className="" to={"contact"}>
            Contact
          </Link>
        </div>
        <div className="md:flex md:gap-2  md:items-center">
          <Link to={"/signin"} className="  py-2  text-gray-200 rounded-3xl">
            <Button variant="secondary" text="Sign In" size="md" />
          </Link>
          <Link
            to={"/signup"}
            className=" py-2  hidden md:block text-gray-200 rounded-3xl"
          >
            <Button variant="primary" text="Sign Up" size="md" />
          </Link>
        </div>

        <div className="md:hidden cursor-pointer">
          <HamburgerIcon size="xl" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
