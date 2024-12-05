import React from "react";
import { useLoaderData } from "react-router-dom";
import AllCard from "./AllCard";

const AllReviews = () => {
  const AllGetData = useLoaderData();
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 my-24">
          {AllGetData.map((review) => (
            <AllCard key={review._id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllReviews;
