import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = () => {
  return (
    <>
      <li>
        <NavLink className="text-black dark:lg:text-white" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-black dark:lg:text-white" to="/all-reviews">
          AllReviews
        </NavLink>
      </li>
      <li>
        <NavLink className="text-black dark:lg:text-white" to="/add-review">
          Add review
        </NavLink>
      </li>
      <li>
        <NavLink className="text-black dark:lg:text-white" to="/my-reviews">
          My Reviews
        </NavLink>
      </li>
      <li>
        <NavLink className="text-black dark:lg:text-white" to="/watchlist">
          Game WatchList
        </NavLink>
      </li>
    </>
  );
};

export default NavItems;
