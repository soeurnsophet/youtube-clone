import React from "react";
import Sidebar from "../components/Sidebar";
import Videos from "../components/videos/Videos";

function Home() {
  return (
    <div className="flex mt-16">
      <div className="hidden sm:block">
        <Sidebar />
      </div>
      {/* main content shifted right */}
      <div className="w-full sm:w-auto sm:ml-auto">
        <Videos />
      </div>
    </div>
  );
}

export default Home;
