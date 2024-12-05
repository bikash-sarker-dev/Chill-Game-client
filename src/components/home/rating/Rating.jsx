import React from "react";
import ReactStars from "react-rating-stars-component";

const Rating = ({ ratingNumber }) => {
  return (
    <>
      <ReactStars
        count={5}
        size={26}
        value={`${ratingNumber}`}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
      />
    </>
  );
};

export default Rating;
