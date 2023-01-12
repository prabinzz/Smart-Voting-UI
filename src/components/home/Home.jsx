import React from "react";
import Title from "../others/Title";
import HeroSection from "./HeroSection";
import TeamMember from "./TeamMember";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="pt-8"></div>
      <Title title="Team Members" />
      <TeamMember />
    </div>
  );
};

export default Home;
