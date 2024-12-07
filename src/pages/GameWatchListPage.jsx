import React from "react";
import HeadHtmlTitle from "../components/pageHeading/HeadHtmlTitle";
import HeroPages from "../components/pageHeading/HeroPages";
import WatchList from "../components/watchlist/WatchList";

const GameWatchListPage = () => {
  return (
    <main>
      <HeadHtmlTitle title="Game | WatchList" />
      <HeroPages title="Game WatchList" />
      <WatchList />
    </main>
  );
};

export default GameWatchListPage;
