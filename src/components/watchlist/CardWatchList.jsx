import React from "react";
import { Link } from "react-router-dom";
import Rating from "../home/rating/Rating";

const CardWatchList = ({ watchReview }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl border p-3 my-5 dark:bg-slate-600">
      <figure>
        <img
          src={watchReview?.thumbnail}
          alt="Movie"
          className="w-[220px] h-[150px] rounded-2xl"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-6">
          <div>
            <h2 className="card-title">{watchReview?.title}</h2>
            <p>Author: {watchReview?.username}</p>
          </div>
          <p>Genres: {watchReview?.genres}</p>
          <p>Publish Year: {watchReview?.publishYear}</p>
          <p>
            {" "}
            <Rating ratingNumber={watchReview?.rating} />{" "}
          </p>
          <Link
            to={`/details/${watchReview?._id}`}
            className="btn btn-info btn-outline"
          >
            Explore Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardWatchList;
