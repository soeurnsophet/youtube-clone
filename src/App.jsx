import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import VideoPlay from "./pages/VideoPlay";
import NotFound from "./pages/NotFound";

function App() {
  const [isExpand, setIsExpand] = React.useState(false);
  return (
    <div className="">
      <Header setIsExpand={setIsExpand} />
      <Routes>
        <Route
          index
          element={<Home isExpand={isExpand} setIsExpand={setIsExpand} />}
        />
        <Route path="/:cateId/:vidId" element={<VideoPlay />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
