import React from "react";
import Feed from "./Feed";

function Videos({ category, isExpand }) {
  return (
    <div
      className={`min-h-[calc(100vh-4rem)] max-h-full p-3 ${
        isExpand ? "sm:w-[calc(100vw-13.75rem)]" : "sm:w-[calc(100vw-70px)]"
      } `}>
      <div className="w-full h-full">
        <Feed category={category} />
      </div>
    </div>
  );
}

export default Videos;
