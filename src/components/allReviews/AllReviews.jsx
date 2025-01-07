import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import {
  ascendingOrder,
  ascendingOrderYear,
  descendingOrder,
  descendingOrderYear,
} from "../../utilities/sorting";
import AllCard from "./AllCard";
import GenresFilter from "./GenresFilter";

const AllReviews = () => {
  const AllGetData = useLoaderData();
  const [allReviews, setAllReviews] = useState(AllGetData);

  const handleTopRating = () => {
    let order = descendingOrder(allReviews);
    setAllReviews([...order]);
  };

  const handleLowerRating = () => {
    let order = ascendingOrder(allReviews);
    setAllReviews([...order]);
  };

  const handleLatestYearPublish = () => {
    let order = descendingOrderYear(allReviews);
    setAllReviews([...order]);
  };

  const handleOldYearPublish = () => {
    let order = ascendingOrderYear(allReviews);
    setAllReviews([...order]);
  };

  return (
    <section className="px-3 lg:px-0">
      <div className="container">
        <div className=" md:flex justify-between  mt-10 bg-p-background dark:bg-dark-p-background p-6 border border-p-secondary dark:border-dark-p-secondary rounded-md">
          <details className="dropdown w-full md:w-auto">
            <summary className="btn lg:m-1 hover:bg-dark-p-secondary hover:text-p-background border-none md:w-auto w-full  bg-p-primary uppercase">
              Sorting Reviews <FaAngleDown className="text-2xl" />
            </summary>
            <ul className="menu md:w-auto w-full dark:text-gray-900 dropdown-content bg-base-100 rounded-box z-[1] lg:w-52 p-2 shadow">
              <li>
                <button onClick={handleTopRating}>Top Rating </button>
              </li>
              <li>
                <button onClick={handleLowerRating}>Lower Rating </button>
              </li>
              <li>
                <button onClick={handleLatestYearPublish}>
                  Latest Publish Year{" "}
                </button>
              </li>
              <li>
                <button onClick={handleOldYearPublish}>
                  Old Publish Year{" "}
                </button>
              </li>
            </ul>
          </details>
          <details className="dropdown w-full md:w-auto mt-5 md:mt-0">
            <summary className="btn lg:m-1  md:w-auto w-full border-none  hover:bg-dark-p-secondary hover:text-p-background  bg-p-primary uppercase">
              Genres Filter <FaAngleDown className="text-2xl" />
            </summary>
            <ul className="menu md:w-auto w-full  dark:text-gray-900 dropdown-content bg-base-100 rounded-box z-[1] lg:w-52 p-2 shadow">
              <GenresFilter setAllReviews={setAllReviews} />
            </ul>
          </details>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 my-24">
          {allReviews.map((review) => (
            <AllCard key={review._id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllReviews;
