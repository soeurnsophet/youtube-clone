import React from "react";
import Video from "../components/Video";
import Recomment from "../components/Recomment";

function VideoPlay() {
  return (
    <div className="p-5 mt-15 flex gap-4 items-start">
      <div className="flex-2 h-auto">
        <Video />
      </div>
      <div className="flex-1 h-auto">
        <Recomment />
      </div>
    </div>
  );
}

export default VideoPlay;
