import React from "react";
import { useParams } from "react-router-dom";
import Video from "../components/Video";
import Recomment from "../components/Recomment";

function VideoPlay() {
  const { vidId, cateId } = useParams();

  return (
    <div className="p-5 mt-15 flex gap-5 items-start">
      <div className="flex-3 h-auto">
        <Video vidId={vidId} />
      </div>
      <div className="flex-1 h-auto bg-green-100">
        <Recomment />
      </div>
    </div>
  );
}

export default VideoPlay;
