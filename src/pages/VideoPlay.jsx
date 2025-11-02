import React from "react";
import { useParams } from "react-router-dom";
import Video from "../components/Video";
import Recomment from "../components/Recomment";

function VideoPlay() {
  const { vidId, cateId } = useParams();
  return (
    <div className="p-5 mt-15 flex gap-4 items-start">
      <div className="flex-2 h-auto">
        <Video vidId={vidId} />
      </div>
      <div className="flex-1 h-auto">
        <Recomment cateId={cateId} />
      </div>
    </div>
  );
}

export default VideoPlay;
