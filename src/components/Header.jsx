import React from "react";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { PiBellSimpleRingingBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import logo from "/assets/images/logo.png";
import profile from "/assets/images/profile.jpg";
import { Link } from "react-router-dom";

function Header({ setIsExpand }) {
  return (
    <header className=" fixed top-0 left-0 h-16 w-full z-50 bg-white shadow-lg ">
      <nav className="h-full flex items-center justify-between px-5 container">
        {/* left */}
        <div className="center-div">
          <IoMenu
            onClick={() => setIsExpand((prev) => !prev)}
            className="size-6 mr-2 hidden sm:block cursor-pointer"
          />
          <Link to={"/"} className="center-div">
            <img src={logo} alt="" className="size-10" />
            <span className="font-bold text-xl tracking-tighter">Youtube</span>
          </Link>
        </div>
        {/* middle */}
        <div className="basis-2/5">
          <div className="center-div relative overflow-hidden w-full h-full  border rounded-full">
            <input
              className="focus:outline-none pl-4 w-full py-2 pr-5"
              type="search"
              placeholder="Search"
            />
            <CiSearch className="bg-[#222222] text-white h-10 w-15 p-2" />
          </div>
        </div>
        {/* right */}
        <div className="center-div gap-3">
          <div className="center-div gap-1 bg-gray-900/50 text-white px-3 py-2 rounded-full cursor-pointer">
            <FaPlus className="size-" />
            <span className="font-medium">Create</span>
          </div>
          <PiBellSimpleRingingBold className="w-6 h-6" />
          <img
            src={profile}
            className="size-9 rounded-full object-center aspect-square"
            alt=""
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
