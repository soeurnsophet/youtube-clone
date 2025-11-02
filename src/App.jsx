import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import VideoPlay from "./pages/VideoPlay";
import NotFound from "./pages/NotFound";
import ContextProvide from "./context/ContextProvide";

function App() {
  return (
    <ContextProvide>
      <>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:categoryId/:videoId" element={<VideoPlay />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </ContextProvide>
  );
}

export default App;
