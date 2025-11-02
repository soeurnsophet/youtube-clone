import axios from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { convertViews } from "./utils/ConvertViews";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link, useParams } from "react-router-dom";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { Contexts } from "../context/ContextProvide";
dayjs.extend(relativeTime); // MUST extend plugin

function Video() {
  const { API_KEYS } = useContext(Contexts);
  const { videoId } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);
  const [channelsDetails, setChannelsDetails] = useState(null);
  const [comments, setComments] = useState([]);
  // get videos data from api by id
  const loadVideoDetails = async () => {
    const res = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEYS}`
    );
    setVideoDetails(res.data.items[0]);
  };
  const loadChannelsDetails = async () => {
    const res = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoDetails?.snippet.channelId}&key=${API_KEYS}`
    );
    const resComments = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=orderUnspecified&videoId=${videoId}&key=${API_KEYS}`
    );
    setChannelsDetails(res.data.items[0]);
    setComments(resComments.data.items);
  };

  useEffect(() => {
    loadVideoDetails();
  }, [videoId]);
  useEffect(() => {
    if (videoDetails?.snippet?.channelId) {
      loadChannelsDetails();
    }
  }, [videoDetails]);

  return (
    <>
      <div>
        <iframe
          className="h-80 sm:h-[600px] md:h-[500px]"
          width="100%"
          height="600"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}></iframe>
      </div>
      <div className="px-2 sm:px-0">
        <h1 className="text-lg sm:text-2xl font-medium tracking-tight mt-2">
          {videoDetails?.snippet.title}
        </h1>
        <div className="flex items-center justify-between mt-3">
          <div className="text-[.9rem] text-gray-500">
            <span>
              {convertViews(videoDetails?.statistics.viewCount)} views
            </span>{" "}
            •{" "}
            <span>
              {dayjs(videoDetails?.snippet.publishedAt).fromNow(true)}
            </span>
          </div>
          <div className="center-div text-lg gap-2">
            <div className="center-div gap-1">
              <BiSolidLike />
              <span className="text-[.8rem]">
                {convertViews(videoDetails?.statistics.likeCount)}
              </span>
            </div>
            <BiSolidDislike />
          </div>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex items-center gap-3 px-2 sm:px-0">
        <img
          src={channelsDetails?.snippet.thumbnails.default.url}
          alt=""
          className="rounded-full size-10 sm:size-13"
        />
        <div className="sm:leading-4">
          <h1 className="text-lg sm:text-2xl font-medium">
            {channelsDetails?.snippet.title}
          </h1>
          <h1 className="text-[0.8rem] sm:text-[1rem]">
            {convertViews(channelsDetails?.statistics.subscriberCount)}{" "}
            Subscribed
          </h1>
        </div>
        <div className="ml-auto">
          <button className="text-md bg-red-500 text-white py-1 px-2 sm:p-2 rounded-md">
            Subscribe
          </button>
        </div>
      </div>

      <div className="ml-16 mt-2 sm:mt-5">
        <h1 className="text-[.8rem] sm:text-md md:text-lg border-b pb-2">
          {channelsDetails?.snippet?.description}
        </h1>
        <h2>
          {convertViews(videoDetails?.statistics?.commentCount) === 0
            ? convertViews(videoDetails?.statistics?.commentCount) + " comment"
            : convertViews(videoDetails?.statistics?.commentCount) +
              " comments"}
        </h2>

        {comments.map((cm, i) => (
          <Fragment key={i}>
            <div className="flex items-start gap-3 mt-4 sm:mt-8">
              <img
                src={
                  cm?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl
                }
                alt=""
                className="rounded-full size-7 sm:size-10"
              />
              <div className="sm:leading-4">
                <h1 className="font-medium text-sm">
                  {cm?.snippet?.topLevelComment?.snippet?.authorDisplayName}
                  <span className="leading-5 font-light text-[.8rem] ml-3">
                    {dayjs(
                      cm?.snippet.topLevelComment.snippet.publishedAt
                    ).fromNow(true)}
                  </span>
                </h1>
                <h1 className="font-light text-[.8rem] sm:my-1 sm:text-[.9rem] break-all pr-4 sm:pr-0">
                  {cm?.snippet.topLevelComment.snippet.textDisplay}
                </h1>
              </div>
            </div>
            <div className="ml-11 sm:ml-13">
              <div className="flex items-center text-lg gap-2">
                <div className="flex items-center gap-1">
                  <BiSolidLike className="text-gray-400" />
                  <span className="text-[.8rem]">
                    {convertViews(
                      cm?.snippet.topLevelComment.snippet.likeCount
                    )}
                  </span>
                </div>
                <BiSolidDislike className="text-gray-400" />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </>
  );
}

export default Video;
