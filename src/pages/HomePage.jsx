import React from "react";
import Tournament from "../components/home/gamingTournament/Tournament";
import HeroSlider from "../components/home/hero-slider/HeroSlider";
import HighestRated from "../components/home/highestRated/HighestRated";
import LatestReview from "../components/home/latestReview/LatestReview";
import NextLevel from "../components/home/nextLevel/NextLevel";
import HeadHtmlTitle from "../components/pageHeading/HeadHtmlTitle";

const HomePage = () => {
  return (
    <main>
      <HeadHtmlTitle title="Game | Home" />
      <HeroSlider />
      <HighestRated />
      <Tournament />
      <LatestReview />
      <NextLevel />
    </main>
  );
};

export default HomePage;
