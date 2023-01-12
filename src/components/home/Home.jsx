import React from "react";
import Title from "../others/Title";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="pt-8"></div>
      <Title title="Team Members" />
    </div>
  );
};

export default Home;
