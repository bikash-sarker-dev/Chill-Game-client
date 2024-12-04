import React from "react";
import Rating from "../rating/Rating";

const CardLatest = ({ newReview }) => {
  const {
    title,
    rating,
    publishYear,
    genres,
    thumbnail,
    username,
    email,
    description,
  } = newReview;
  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
            className="w-full object-cover max-h-60"
            src={thumbnail}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary ml-auto">NEW</div>
          </h2>
          <p className="text-gray-500">Author: {username}</p>
          <div className="card-actions justify-between">
            <div className="">
              <span className="text-gray-500">
                Published Year: {publishYear}
              </span>
            </div>
            <div className="">
              <Rating ratingNumber={rating} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLatest;
