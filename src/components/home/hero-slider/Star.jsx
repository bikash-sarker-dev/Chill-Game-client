import React from "react";
import { FaStar } from "react-icons/fa";

const Star = () => {
  return (
    <div className="flex gap-2">
      <FaStar className="text-3xl text-yellow-500" />
      <FaStar className="text-3xl text-yellow-500" />
      <FaStar className="text-3xl text-yellow-500" />
      <FaStar className="text-3xl text-yellow-500" />
      <FaStar className="text-3xl text-yellow-500" />
    </div>
  );
};

export default Star;
