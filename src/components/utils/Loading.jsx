import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function Loading() {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className="m-2 cursor-pointer">
        <div>
          <Skeleton className="w-full" borderRadius={"0.5rem"} height={194} />
        </div>

        <h2 className="mt-2  leading-5 text-[1.05rem]">
          <Skeleton count={3} />
        </h2>
      </div>
    </SkeletonTheme>
  );
}

export default Loading;
