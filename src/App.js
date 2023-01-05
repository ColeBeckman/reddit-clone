import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/nav/navBar";
import "./global.css";
import HomePage from "./pages/home";
import SubPage from "./pages/sub";
import PostPage from "./pages/postPage";

function App() {
  return (
    <>
      <NavBar />
      <div className={"pageWrapper"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/sub/:name" element={<SubPage />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
