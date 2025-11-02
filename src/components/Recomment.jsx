import axios from "axios";
import React, { useEffect, useState } from "react";
import { convertViews } from "./utils/ConvertViews";
import { Link } from "react-router-dom";

function Recomment({ cateId }) {
  const [recommentVideos, setRecommentVideos] = useState([]);
  const loadRecommentVideos = async () => {
    const res = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${cateId}&key=AIzaSyAggl4XTt7wckyee1YDTg1h3DKdEAufhPA`
    );
    setRecommentVideos(res.data.items);
  };
  useEffect(() => {
    loadRecommentVideos();
  }, [cateId]);
  return (
    <div>
      {recommentVideos.map((item, i) => (
        <Link
          to={`/${item?.snippet?.categoryId}/${item?.id}`}
          key={i}
          className="flex items-start gap-2 mb-3">
          <img
            className="w-60"
            src={item?.snippet.thumbnails.medium.url}
            alt=""
          />
          <div className="flex-1">
            <h1 className="font-bold text-lg leading-snug break-all">
              {item?.snippet.title}
            </h1>
            <p className="text-[0.85rem] font-medium text-gray-600">{item?.snippet.channelTitle}</p>
            <p className="text-[0.85rem] font-medium text-gray-600">
              {convertViews(item?.statistics.viewCount) <= 1
                ? convertViews(item?.statistics.viewCount) + " view"
                : convertViews(item?.statistics.viewCount) + " views"}{" "}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Recomment;
