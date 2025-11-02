import axios from "axios";
import React, { useEffect } from "react";
import { convertViews } from "../utils/ConvertViews";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";

dayjs.extend(relativeTime); // MUST extend plugin

function Feed({ category }) {
  const [videos, setVideos] = React.useState([]);
  const loadVideos = async (category) => {
    try {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=AIzaSyAggl4XTt7wckyee1YDTg1h3DKdEAufhPA`
      );
      setVideos(response.data.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };
  useEffect(() => {
    loadVideos(category);
  }, [category]);
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {videos.map((video) => (
        <div key={video.id} className="m-2 cursor-pointer">
          <Link to={`/${video.snippet.categoryId}/${video.id}`}>
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="w-full rounded-lg"
            />
          </Link>

          <h3 className="mt-2  leading-5 text-[1.05rem]">
            {video.snippet.title}
          </h3>
          <h4 className="font-bold text-lg">{video.snippet.channelTitle}</h4>
          <div className="text-[.9rem] text-gray-500">
            <span>{convertViews(video.statistics.viewCount)} views</span> •{" "}
            <span>{dayjs(video.snippet.publishedAt).fromNow(true)}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Feed;
