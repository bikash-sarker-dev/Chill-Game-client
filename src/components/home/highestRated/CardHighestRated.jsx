import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Rating from "../rating/Rating";

const CardHighestRated = ({ review }) => {
  const {
    _id,
    title,
    rating,
    publishYear,
    genres,
    thumbnail,
    username,
    email,
    description,
  } = review;

  return (
    <Fade direction="up">
      <div className="flex gap-4 border p-4 rounded-xl  mx-auto items-center">
        <div className="w-2/6">
          <img
            className="rounded-xl h-[170px] w-full"
            src={thumbnail}
            alt={`not support image ${title} `}
          />
        </div>
        <div className="w-3/6">
          <h3 className="text-xl font-bold capitalize">{title}</h3>
          <h4 className="text-lg font-semibold mt-2">
            Rating: <Rating ratingNumber={rating} />
          </h4>
        </div>
        <div className="w-1.5/6">
          <Link to={`/details/${_id}`} className="btn btn-info ">
            Explore Details
          </Link>
        </div>
      </div>
    </Fade>
  );
};

export default CardHighestRated;
