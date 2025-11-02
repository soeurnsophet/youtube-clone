import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { convertViews } from "./utils/ConvertViews";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
dayjs.extend(relativeTime); // MUST extend plugin

function Video({ vidId }) {
  const [videoDetails, setVideoDetails] = useState(null);
  const [channelsDetails, setChannelsDetails] = useState(null);
  const [comments, setComments] = useState([]);

  const loadVideoDetails = async () => {
    const res = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${vidId}&key=AIzaSyAggl4XTt7wckyee1YDTg1h3DKdEAufhPA`
    );
    setVideoDetails(res.data.items[0]);
  };
  const loadChannelsDetails = async () => {
    const res = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoDetails?.snippet.channelId}&key=AIzaSyAggl4XTt7wckyee1YDTg1h3DKdEAufhPA`
    );
    const resComments = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=orderUnspecified&videoId=${vidId}&key=AIzaSyAggl4XTt7wckyee1YDTg1h3DKdEAufhPA`
    );
    setChannelsDetails(res.data.items[0]);
    setComments(resComments.data.items);
  };

  useEffect(() => {
    loadVideoDetails();
  }, [vidId]);
  useEffect(() => {
    if (videoDetails?.snippet?.channelId) {
      loadChannelsDetails();
    }
  }, [videoDetails]);

  return (
    <>
      <div>
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          src={`https://www.youtube.com/embed/${vidId}?autoplay=1`}></iframe>
      </div>
      <div>
        <h1 className="text-2xl font-medium tracking-tight mt-3">
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
      <div className="flex items-center gap-3">
        <img
          src={channelsDetails?.snippet.thumbnails.default.url}
          alt=""
          className="rounded-full size-13"
        />
        <div className="leading-4">
          <h1 className="text-2xl font-medium">
            {channelsDetails?.snippet.title}
          </h1>
          <h1>
            {convertViews(channelsDetails?.statistics.subscriberCount)}{" "}
            Subscribed
          </h1>
        </div>
        <div className="ml-auto">
          <button className="bg-red-500 text-white p-2 rounded-md">
            Subscribe
          </button>
        </div>
      </div>

      <div className="ml-16 mt-5">
        <h1 className="border-b pb-2">
          {channelsDetails?.snippet.description}
        </h1>
        <h2>
          {convertViews(videoDetails?.statistics?.commentCount) === 0
            ? convertViews(videoDetails?.statistics?.commentCount) + " comment"
            : convertViews(videoDetails?.statistics?.commentCount) +
              " comments"}
        </h2>

        {comments.map((cm, i) => (
          <Fragment key={i}>
            <div className="flex items-start gap-3 mt-8">
              <img
                src={cm?.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
                className="rounded-full size-10"
              />
              <div className="leading-4">
                <h1 className="font-medium">
                  {cm?.snippet.topLevelComment.snippet.authorDisplayName}
                  <span className="leading-5 font-light text-[.8rem] ml-3">
                    {dayjs(
                      cm?.snippet.topLevelComment.snippet.publishedAt
                    ).fromNow(true)}
                  </span>
                </h1>
                <h1 className="font-light my-1 text-[.9rem]">
                  {cm?.snippet.topLevelComment.snippet.textDisplay}
                </h1>
              </div>
            </div>
            <div className="ml-13">
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
