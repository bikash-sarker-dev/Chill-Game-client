import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TableRow = ({ index, reviewItem, myReview, setMyReview }) => {
  const handleMyReviewDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://chill-gamer-server-ten.vercel.app/my-review/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            let deleteFilter = myReview.filter((review) => review._id !== id);
            setMyReview(deleteFilter);
          });
      }
    });
  };
  return (
    <tr className="hover dark:hover:text-gray-900 tr-class">
      <th className="td-class">{index + 1}</th>
      <td className="td-class">
        <div className="avatar">
          <div className="mask  h-20 w-32 rounded-lg">
            <img
              src={reviewItem?.thumbnail}
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </div>
      </td>
      <td className="td-class">{reviewItem?.title}</td>
      <td className="td-class">{reviewItem?.username}</td>
      <td className="td-class">{reviewItem?.email}</td>
      <td className="td-class">{reviewItem?.rating}</td>
      <td className="xl:space-x-4 td-class">
        <Link
          to={`/updateReview/${reviewItem._id}`}
          className="btn bg-dark-p-secondary text-dark-p-text btn-sm xl:btn-md "
        >
          <FaPencil className="text-xl " />
        </Link>
        <button
          onClick={() => handleMyReviewDelete(reviewItem._id)}
          className="btn bg-red-600 btn-sm xl:btn-md mt-3 bg-[#dc2626] xl:mt-0 text-[#fff]"
        >
          <FaTimes className="text-xl  " />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
