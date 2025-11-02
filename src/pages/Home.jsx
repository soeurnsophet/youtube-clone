import React from "react";
import Sidebar from "../components/Sidebar";
import Videos from "../components/Videos";

function Home() {
  const [category, setCategory] = React.useState(0);
  return (
    <div className="flex mt-16">
      <Sidebar category={category} setCategory={setCategory} />
      {/* main content shifted right */}
      <div className="ml-auto">
        <Videos category={category} />
      </div>
    </div>
  );
}

export default Home;
