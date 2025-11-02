import React, { useContext } from "react";
import Feed from "./Feed";
import { Contexts } from "../../context/ContextProvide";

function Videos() {
  const { isExpand } = useContext(Contexts);
  return (
    <div
      className={`min-h-[calc(100vh-4rem)] max-h-full p-3 ${
        isExpand ? "sm:w-[calc(100vw-13.75rem)]" : "sm:w-[calc(100vw-70px)]"
      } `}>
      <div className="w-full h-full">
        <Feed />
      </div>
    </div>
  );
}

export default Videos;
