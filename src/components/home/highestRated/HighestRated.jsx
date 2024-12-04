import React from "react";
import { useLoaderData } from "react-router-dom";
import CardHighestRated from "./CardHighestRated";

const HighestRated = () => {
  const getHighestRating = useLoaderData();

  return (
    <section className="my-24">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold">Highest Rated Game</h2>
        <p className="text-gray-500 max-w-md mx-auto mt-3">
          the reviews highest rating for games. there are best performance in
          games .
        </p>
      </div>
      <div className="container">
        <div className="grid grid-cols-2 gap-4">
          {getHighestRating.map((review) => (
            <CardHighestRated key={review._id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighestRated;
