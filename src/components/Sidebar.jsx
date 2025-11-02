import React from "react";
import { AiFillHome } from "react-icons/ai";
import profile from "/assets/images/profile.jpg";

function Sidebar({ category, setCategory }) {
  return (
    <div className="w-50 shadow-xl min-h-[calc(100vh-4rem)] p-5 fixed left-0 top-16 z-50">
      <div className="flex flex-col gap-3">
        <div
          className={`flex items-center justify-start gap-2 p-2 ${
            category === 0 ? "bg-gray-200  rounded-lg" : ""
          }`}
          onClick={() => setCategory(0)}>
          <AiFillHome className="text-2xl" />
          <span className="font-medium">Home</span>
        </div>
        <div
          className={`flex items-center justify-start gap-2 p-2 ${
            category === 20 ? "bg-gray-200  rounded-lg" : ""
          }`}
          onClick={() => setCategory(20)}>
          <AiFillHome className="text-2xl" />
          <span className="font-medium">Gaming</span>
        </div>
        <div
          className={`flex items-center justify-start gap-2 p-2 ${
            category === 2 ? "bg-gray-200  rounded-lg" : ""
          }`}
          onClick={() => setCategory(2)}>
          <AiFillHome className="text-2xl" />
          <span className="font-medium">Automobiles</span>
        </div>
        <div
          className={`flex items-center justify-start gap-2 p-2 ${
            category === 17 ? "bg-gray-200  rounded-lg" : ""
          }`}
          onClick={() => setCategory(17)}>
          <AiFillHome className="text-2xl" />
          <span className="font-medium">Sports</span>
        </div>
        <div
          className={`flex items-center justify-start gap-2 p-2 ${
            category === 24 ? "bg-gray-200  rounded-lg" : ""
          }`}
          onClick={() => setCategory(24)}>
          <AiFillHome className="text-2xl" />
          <span className="font-medium">Entertainment</span>
        </div>
        <div
          className={`flex items-center justify-start gap-2 p-2 ${
            category === 28 ? "bg-gray-200  rounded-lg" : ""
          }`}
          onClick={() => setCategory(28)}>
          <AiFillHome className="text-2xl" />
          <span className="font-medium">Technology</span>
        </div>
        <div
          className={`flex items-center justify-start gap-2 p-2 ${
            category === 10 ? "bg-gray-200  rounded-lg" : ""
          }`}
          onClick={() => setCategory(10)}>
          <AiFillHome className="text-2xl" />
          <span className="font-medium">Music</span>
        </div>
        <div
          className={`flex items-center justify-start gap-2 p-2 ${
            category === 22 ? "bg-gray-200  rounded-lg" : ""
          }`}
          onClick={() => setCategory(22)}>
          <AiFillHome className="text-2xl" />
          <span className="font-medium">Blogs</span>
        </div>
        <div
          className={`flex items-center justify-start gap-2 p-2 ${
            category === 25 ? "bg-gray-200  rounded-lg" : ""
          }`}
          onClick={() => setCategory(25)}>
          <AiFillHome className="text-2xl" />
          <span className="font-medium">News</span>
        </div>
      </div>

      <hr className="my-5" />
      <div>
        <h1>SUBSCRIBED</h1>
        <div className="mt-3 space-y-3">
          <div className="flex items-center justify-start gap-2">
            <img
              src={profile}
              className="size-9 rounded-full object-center aspect-square"
              alt=""
            />
            <span className="font-medium">PewDiePie</span>
          </div>
          <div className="flex items-center justify-start gap-2">
            <img
              src={profile}
              className="size-9 rounded-full object-center aspect-square"
              alt=""
            />
            <span className="font-medium">PewDiePie</span>
          </div>
          <div className="flex items-center justify-start gap-2">
            <img
              src={profile}
              className="size-9 rounded-full object-center aspect-square"
              alt=""
            />
            <span className="font-medium">PewDiePie</span>
          </div>
          <div className="flex items-center justify-start gap-2">
            <img
              src={profile}
              className="size-9 rounded-full object-center aspect-square"
              alt=""
            />
            <span className="font-medium">PewDiePie</span>
          </div>
          <div className="flex items-center justify-start gap-2">
            <img
              src={profile}
              className="size-9 rounded-full object-center aspect-square"
              alt=""
            />
            <span className="font-medium">PewDiePie</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
