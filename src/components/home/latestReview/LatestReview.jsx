import React from "react";
import CardLatest from "./CardLatest";

const LatestReview = () => {
  return (
    <section className="my-24">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold">Latest Review</h2>
          <p className="text-gray-500 max-w-md mx-auto mt-3">
            the lates reviews posting our website. new game every day update in
            application .
          </p>
        </div>
        <div>
          <CardLatest />
        </div>
      </div>
    </section>
  );
};

export default LatestReview;
