import React from "react";
import Feed from "./Feed";

function Videos({ category }) {
  return (
    <div className="w-[calc(100vw-13.7rem)]  min-h-[calc(100vh-4rem)]  h-[200vh] p-3">
      <div className="w-full h-full">
        <Feed category={category} />
      </div>
    </div>
  );
}

export default Videos;
