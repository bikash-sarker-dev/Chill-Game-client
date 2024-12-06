import React from "react";
import HeroPages from "../components/pageHeading/HeroPages";
import WatchList from "../components/watchlist/WatchList";

const GameWatchListPage = () => {
  return (
    <main>
      <HeroPages title="Game WatchList" />
      <WatchList />
    </main>
  );
};

export default GameWatchListPage;
