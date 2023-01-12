import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import Member from "./components/member/Member";
import VoteCount from "./components/voteCount/VoteCount";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="voters" element={<Member />} />
        <Route path="VoteCount" element={<VoteCount />} />
      </Route>
    </Routes>
  );
}

export default App;
