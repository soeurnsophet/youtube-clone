import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { convertViews } from "../utils/ConvertViews";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";
import { Contexts } from "../../context/ContextProvide";
import Loading from "../utils/Loading";

dayjs.extend(relativeTime);

function Feed() {
  const { category, API_KEYS, searchValues } = useContext(Contexts);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadVideos = async (category, query) => {
    setIsLoading(true);
    try {
      let url = "";
      let response;

      if (query) {
        // Search API
        url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${encodeURIComponent(
          query
        )}&key=${API_KEYS}`;
        response = await axios.get(url);

        // Map search results to standard video structure
        const videoIds = response.data.items
          .filter((item) => item.id.videoId)
          .map((item) => item.id.videoId)
          .join(",");

        if (videoIds) {
          const statsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${API_KEYS}`;
          const statsRes = await axios.get(statsUrl);
          setVideos(statsRes.data.items);
        } else {
          setVideos([]);
        }
      } else {
        // Most popular videos
        url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEYS}`;
        response = await axios.get(url);
        setVideos(response.data.items);
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
      setVideos([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadVideos(category, searchValues);
  }, [category, searchValues]);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {isLoading
        ? Array(12)
            .fill(0)
            .map((_, i) => (
              <div key={i}>
                <Loading />
              </div>
            ))
        : videos.map((video) => {
            const videoId = video?.id.videoId || video.id;
            return (
              <div key={videoId} className="m-2 cursor-pointer">
                <Link
                  to={`/${encodeURIComponent(
                    video?.snippet.categoryId || category
                  )}/${encodeURIComponent(videoId)}`}>
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    className="w-full rounded-lg"
                  />
                </Link>

                <h3 className="mt-2 leading-5 text-[1.05rem] line-clamp-2">
                  {video.snippet.title}
                </h3>
                <h4 className="font-bold text-lg">
                  {video.snippet.channelTitle}
                </h4>
                <div className="text-[.9rem] text-gray-500">
                  <span>
                    {convertViews(video.statistics?.viewCount || 0)} views
                  </span>{" "}
                  •{" "}
                  <span>{dayjs(video.snippet.publishedAt).fromNow(true)}</span>
                </div>
              </div>
            );
          })}
    </section>
  );
}

export default Feed;
