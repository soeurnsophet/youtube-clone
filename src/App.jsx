import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import VideoPlay from "./pages/VideoPlay";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="video/:cateId/:vidId" element={<VideoPlay />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
