import React from "react";
import Video from "../components/Video";
import Recomment from "../components/Recomment";

function VideoPlay() {
  return (
    <div className="overflow-x-hidden md:p-5 md:mt-15 md:flex gap-4 flex-col md:flex-row md:items-start">
      <div className="flex-2 md:flex-3 lg:flex-2 h-auto">
        <Video />
      </div>
      <div className="flex-1 h-auto mt-5 sm:mt-0">
        <Recomment />
      </div>
    </div>
  );
}

export default VideoPlay;
