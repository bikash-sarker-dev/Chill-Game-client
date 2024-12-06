import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TableRow = ({ index, reviewItem }) => {
  return (
    <tr className="hover">
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="mask  h-20 w-32 rounded-lg">
            <img
              src={reviewItem?.thumbnail}
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </div>
      </td>
      <td>{reviewItem?.title}</td>
      <td>{reviewItem?.username}</td>
      <td>{reviewItem?.email}</td>
      <td>{reviewItem?.rating}</td>
      <td className="space-x-4">
        <Link
          to={`/updateReview/${reviewItem._id}`}
          className="btn btn-info btn-outline"
        >
          <FaPencil className="text-xl " />
        </Link>
        <button className="btn bg-red-600 text-[#fff]">
          <FaTimes className="text-xl  " />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
