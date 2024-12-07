import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Rating from "../home/rating/Rating";

const AllCard = ({ review }) => {
  return (
    <Fade direction="up">
      <div className="card bg-base-100 dark:bg-slate-600 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={review?.thumbnail}
            alt="Shoes"
            className="rounded-xl h-[220px] w-full"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="">
              <h2 className="text-xl font-semibold ">{review?.title}</h2>
              <p className="dark:text-white text-gray-500 my-4 ">
                Genres: {review?.genres}
              </p>
              <p className="dark:text-white text-gray-500 my-4 ">
                PublishYear: {review?.publishYear}
              </p>
            </div>
            <div>
              <span className="text-gray-500">
                <Rating ratingNumber={review?.rating} />
              </span>
            </div>
          </div>

          <div className="card-actions">
            <Link
              to={`/details/${review?._id}`}
              className="btn btn-info btn-outline btn-block"
            >
              Explore Details
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default AllCard;
