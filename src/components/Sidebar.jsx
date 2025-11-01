import React from "react";
import { AiFillHome } from "react-icons/ai";
import profile from "/assets/images/profile.jpg";

function Sidebar() {
  return (
    <div className="w-50 shadow-2xl min-h-[calc(100vh-4rem)] p-5">
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-start gap-2">
          <AiFillHome className="text-2xl" />
          <spans className="font-medium">Home</spans>
        </div>
        <div className="flex items-center justify-start gap-2">
          <AiFillHome className="text-2xl" />
          <spans className="font-medium">Home</spans>
        </div>
        <div className="flex items-center justify-start gap-2">
          <AiFillHome className="text-2xl" />
          <spans className="font-medium">Home</spans>
        </div>
        <div className="flex items-center justify-start gap-2">
          <AiFillHome className="text-2xl" />
          <spans className="font-medium">Home</spans>
        </div>
        <div className="flex items-center justify-start gap-2">
          <AiFillHome className="text-2xl" />
          <spans className="font-medium">Home</spans>
        </div>
        <div className="flex items-center justify-start gap-2">
          <AiFillHome className="text-2xl" />
          <spans className="font-medium">Home</spans>
        </div>
        <div className="flex items-center justify-start gap-2">
          <AiFillHome className="text-2xl" />
          <spans className="font-medium">Home</spans>
        </div>
        <div className="flex items-center justify-start gap-2">
          <AiFillHome className="text-2xl" />
          <spans className="font-medium">Home</spans>
        </div>
        <div className="flex items-center justify-start gap-2">
          <AiFillHome className="text-2xl" />
          <spans className="font-medium">Home</spans>
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
            <spans className="font-medium">PewDiePie</spans>
          </div>
          <div className="flex items-center justify-start gap-2">
            <img
              src={profile}
              className="size-9 rounded-full object-center aspect-square"
              alt=""
            />
            <spans className="font-medium">PewDiePie</spans>
          </div>
          <div className="flex items-center justify-start gap-2">
            <img
              src={profile}
              className="size-9 rounded-full object-center aspect-square"
              alt=""
            />
            <spans className="font-medium">PewDiePie</spans>
          </div>
          <div className="flex items-center justify-start gap-2">
            <img
              src={profile}
              className="size-9 rounded-full object-center aspect-square"
              alt=""
            />
            <spans className="font-medium">PewDiePie</spans>
          </div>
          <div className="flex items-center justify-start gap-2">
            <img
              src={profile}
              className="size-9 rounded-full object-center aspect-square"
              alt=""
            />
            <spans className="font-medium">PewDiePie</spans>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
