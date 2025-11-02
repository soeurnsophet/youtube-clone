import React, { useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { IoGameController } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { HiOutlineTv } from "react-icons/hi2";
import { GrTechnology } from "react-icons/gr";
import { MdLibraryMusic } from "react-icons/md";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaMicroblog } from "react-icons/fa6";
import profile from "/assets/images/profile.jpg";
import profileNemRinda from "/assets/images/nemrinda.jpg";
import { Contexts } from "../context/ContextProvide";

function Sidebar() {
  const { category, setCategory, isExpand } = useContext(Contexts);
  return (
    <div
      className={`${
        isExpand ? "w-50" : "w-15"
      } overflow-hidden shadow-xl min-h-[calc(100vh-4rem)] h-full p-3 fixed left-0 top-16 z-50`}>
      <div className={`${isExpand ? "" : "items-center"} flex flex-col gap-1`}>
        <div
          className={`flex items-center justify-start gap-2 hover:bg-gray-200 transition-all duration-300 ease-in-out hover:rounded-sm cursor-pointer p-2 ${
            category === 0 ? "bg-gray-300  rounded-sm" : ""
          }`}
          onClick={() => setCategory(0)}>
          <AiFillHome className="text-xl" />
          {isExpand && <span className="font-medium">Home</span>}
        </div>
        <div
          className={`flex items-center justify-start gap-2 hover:bg-gray-200 transition-all duration-300 ease-in-out hover:rounded-sm  cursor-pointer p-2 ${
            category === 20 ? "bg-gray-300  rounded-sm" : ""
          }`}
          onClick={() => setCategory(20)}>
          <IoGameController className="text-xl" />
          {isExpand && <span className="font-medium">Gaming</span>}
        </div>
        <div
          className={`flex items-center justify-start gap-2 hover:bg-gray-200 transition-all duration-300 ease-in-out hover:rounded-sm cursor-pointer p-2 ${
            category === 2 ? "bg-gray-300  rounded-sm" : ""
          }`}
          onClick={() => setCategory(2)}>
          <FaCarSide className="text-xl" />
          {isExpand && <span className="font-medium">Automobiles</span>}
        </div>
        <div
          className={`flex items-center justify-start gap-2 hover:bg-gray-200 transition-all duration-300 ease-in-out hover:rounded-sm  cursor-pointer p-2 ${
            category === 17 ? "bg-gray-300  rounded-sm" : ""
          }`}
          onClick={() => setCategory(17)}>
          <MdOutlineSportsBasketball className="text-xl" />
          {isExpand && <span className="font-medium">Sports</span>}
        </div>
        <div
          className={`flex items-center justify-start gap-2 hover:bg-gray-200 transition-all duration-300 ease-in-out hover:rounded-sm  cursor-pointer p-2 ${
            category === 24 ? "bg-gray-300  rounded-sm" : ""
          }`}
          onClick={() => setCategory(24)}>
          <HiOutlineTv className="text-xl" />
          {isExpand && <span className="font-medium">Entertainment</span>}
        </div>
        <div
          className={`flex items-center justify-start gap-2 hover:bg-gray-200 transition-all duration-300 ease-in-out hover:rounded-sm  cursor-pointer p-2 ${
            category === 28 ? "bg-gray-300  rounded-sm" : ""
          }`}
          onClick={() => setCategory(28)}>
          <GrTechnology className="text-xl" />
          {isExpand && <span className="font-medium">Technology</span>}
        </div>
        <div
          className={`flex items-center justify-start gap-2 hover:bg-gray-200 transition-all duration-300 ease-in-out hover:rounded-sm  cursor-pointer p-2 ${
            category === 10 ? "bg-gray-300  rounded-sm" : ""
          }`}
          onClick={() => setCategory(10)}>
          <MdLibraryMusic className="text-xl" />
          {isExpand && <span className="font-medium">Music</span>}
          {/* <span className="font-medium">Music</span> */}
        </div>
        <div
          className={`flex items-center justify-start gap-2 hover:bg-gray-200 transition-all duration-300 ease-in-out hover:rounded-sm  cursor-pointer p-2 ${
            category === 22 ? "bg-gray-300  rounded-sm" : ""
          }`}
          onClick={() => setCategory(22)}>
          <FaMicroblog className="text-xl" />
          {isExpand && <span className="font-medium">Blogs</span>}
        </div>
        <div
          className={`flex items-center justify-start gap-2 hover:bg-gray-200 transition-all duration-300 ease-in-out hover:rounded-sm cursor-pointer p-2 ${
            category === 25 ? "bg-gray-300  rounded-sm" : ""
          }`}
          onClick={() => setCategory(25)}>
          <IoNewspaperSharp className="text-xl" />
          {isExpand && <span className="font-medium">News</span>}
        </div>
      </div>

      <hr className="my-3" />
      <div>
        {isExpand && <h1 className="font-medium">SUBSCRIBED</h1>}
        <div className="mt-3 space-y-3">
          <div className="flex items-center justify-start gap-2">
            <img
              src={profile}
              className="size-9 rounded-full object-center aspect-square"
              alt=""
            />
            {isExpand && <h1 className="font-medium">Soeurn Sophet</h1>}
          </div>
          <div className="flex items-center justify-start gap-2">
            <img
              src={profileNemRinda}
              className="size-9 rounded-full object-center aspect-square"
              alt=""
            />
            {isExpand && <h1 className="font-medium">Nem Rinda</h1>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
