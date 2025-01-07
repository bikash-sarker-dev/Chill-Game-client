import React from "react";
import { FaStar } from "react-icons/fa";

const Star = () => {
  return (
    <div className="flex gap-2">
      <FaStar className="text-3xl text-p-primary" />
      <FaStar className="text-3xl text-p-primary" />
      <FaStar className="text-3xl text-p-primary" />
      <FaStar className="text-3xl text-p-primary" />
      <FaStar className="text-3xl text-p-primary" />
    </div>
  );
};

export default Star;
