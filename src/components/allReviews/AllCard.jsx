import React from "react";
import { Link } from "react-router-dom";
import Rating from "../home/rating/Rating";

const AllCard = ({ review }) => {
  return (
    <div className="card  dark:bg-slate-600 border-p-secondary bg-p-background dark:bg-dark-p-background dark:border-dark-p-secondary shadow-sm shadow-p-secondary">
      <figure className="">
        <img
          src={review?.thumbnail}
          alt="Shoes"
          className=" h-[220px] w-full"
        />
      </figure>
      <div className="card-body px-3 md:px-10">
        <div className="">
          <div className="">
            <h2 className="text-xl font-semibold ">{review?.title}</h2>

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
            className="btn bg-p-primary border-none btn-block"
          >
            Explore Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllCard;
