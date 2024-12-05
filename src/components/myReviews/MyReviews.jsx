import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contextAip/ContextCreate";
import TableRow from "./TableRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReview, setMyReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/reviews/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReview(data);
      });
  }, []);

  console.log(myReview);

  return (
    <section className="my-32">
      <div className="overflow-x-auto container">
        <table className="table">
          <thead>
            <tr className="bg-slate-500 text-lg text-base-100">
              <th>No</th>
              <th>Photo</th>
              <th>Title</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myReview.map((reviewItem, i) => (
              <TableRow
                index={i}
                key={reviewItem._id}
                reviewItem={reviewItem}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyReviews;
