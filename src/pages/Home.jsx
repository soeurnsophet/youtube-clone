import React from "react";
import Sidebar from "../components/Sidebar";
import Videos from "../components/Videos";

function Home({ isExpand }) {
  const [category, setCategory] = React.useState(0);

  return (
    <div className="flex mt-16">
      <div className="hidden sm:block">
        <Sidebar
          category={category}
          setCategory={setCategory}
          isExpand={isExpand}
        />
      </div>
      {/* main content shifted right */}
      <div className="w-full sm:w-auto sm:ml-auto">
        <Videos isExpand={isExpand} category={category} />
      </div>
    </div>
  );
}

export default Home;
