import React from "react";
import Tournament from "../components/home/gamingTournament/Tournament";
import HeroSlider from "../components/home/hero-slider/HeroSlider";
import HighestRated from "../components/home/highestRated/HighestRated";
import LatestReview from "../components/home/latestReview/LatestReview";

const HomePage = () => {
  return (
    <main>
      <HeroSlider />
      <HighestRated />
      <Tournament />
      <LatestReview />
    </main>
  );
};

export default HomePage;
