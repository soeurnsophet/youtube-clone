import React, { useContext } from "react";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { PiBellSimpleRingingBold } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import logo from "/assets/images/logo.png";
import profile from "/assets/images/profile.jpg";
import { Link } from "react-router-dom";
import { Contexts } from "../context/ContextProvide";

function Header() {
  const { setIsExpand } = useContext(Contexts);
  return (
    <header className="fixed top-0 left-0 h-16 w-full z-50 bg-white shadow-lg">
      <nav className="h-full flex items-center justify-between px-2 sm:px-5 container mx-auto">
        {/* left */}
        <div className="center-div">
          <IoMenu
            onClick={() => setIsExpand((prev) => !prev)}
            className="size-6 mr-2 hidden sm:block cursor-pointer"
          />
          <Link to={"/"} className="center-div">
            <img src={logo} alt="" className="size-8 sm:size-10" />
            <span className="font-bold text-[0.8rem] text-xl tracking-tighter">
              Youtube
            </span>
          </Link>
        </div>
        {/* middle */}
        <div className="basis-2/5">
          <div className="center-div relative sm:overflow-hidden overflow-hidden sm:w-full sm:h-full  border rounded-full">
            <input
              className="focus:outline-none w-full text-[.8rem] pl-2 sm:pl-4 sm:py-2 sm:pr-5"
              type="search"
              placeholder="Search"
            />
            <CiSearch className="bg-[#222222] text-white h-6 w-6 px-1 sm:h-10 sm:w-15 sm:p-2" />
          </div>
        </div>
        {/* right */}
        <div className="center-div gap-3">
          <div className="center-div sr-only sm:not-sr-only gap-1 bg-gray-900/50 text-white sm:px-3 sm:py-2 rounded-full cursor-pointer">
            <FaPlus className="size-" />
            <span className="font-medium">Create</span>
          </div>
          <PiBellSimpleRingingBold className="w-6 h-6 hidden sm:block" />
          <img
            src={profile}
            className="size-8 sm:size-9 rounded-full object-center aspect-square"
            alt=""
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
