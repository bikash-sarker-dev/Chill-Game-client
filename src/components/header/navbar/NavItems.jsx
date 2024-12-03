import React from "react";
import { NavLink } from "react-router-dom";

const NavItems = () => {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-reviews">AllReviews</NavLink>
      </li>
      <li>
        <NavLink to="/add-review">Add review</NavLink>
      </li>
      <li>
        <NavLink to="/my-reviews">My Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/watchlist">Game WatchList</NavLink>
      </li>
    </>
  );
};

export default NavItems;
