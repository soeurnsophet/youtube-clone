import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { convertViews } from "./utils/ConvertViews";
import { Link, useParams } from "react-router-dom";
import { Contexts } from "../context/ContextProvide";

function Recomment() {
  const { API_KEYS } = useContext(Contexts);
  const { categoryId } = useParams();

  const [recommentVideos, setRecommentVideos] = useState([]);
  const loadRecommentVideos = async () => {
    const res = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEYS}`
    );
    setRecommentVideos(res.data.items);
  };
  useEffect(() => {
    loadRecommentVideos();
  }, [categoryId]);
  return (
    <div className="">
      {recommentVideos.map((item, i) => (
        <Link
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 100,
              behavior: "smooth",
            });
          }}
          to={`/${item?.snippet?.categoryId}/${item?.id}`}
          key={i}
          className="flex flex-col items-start gap-2 mb-3 sm:flex-row md:flex-col lg:flex-row">
          <img
            className="w-full sm:w-60"
            src={item?.snippet.thumbnails.medium.url}
            alt=""
          />
          <div className="flex-1">
            <h1 className="font-bold text-sm sm:text-lg md:text-[1rem] md:leading-5 leading-snug break-all">
              {item?.snippet.title}
            </h1>
            <p className="text-[0.75rem] sm:text-[0.85rem] font-medium text-gray-600">
              {item?.snippet.channelTitle}
            </p>
            <p className="text-[0.75rem] sm:text-[0.85rem] font-medium text-gray-600">
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
