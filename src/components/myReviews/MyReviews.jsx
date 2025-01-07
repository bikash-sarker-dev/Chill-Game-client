import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contextAip/ContextCreate";
import TableRow from "./TableRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReview, setMyReview] = useState([]);

  useEffect(() => {
    fetch(`https://chill-gamer-server-ten.vercel.app/reviews/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReview(data);
      });
  }, []);

  return (
    <section className="my-32">
      <div className="overflow-x-auto container">
        <table className="table">
          <thead>
            <tr className="bg-slate-500 text-lg  dark:text-base-100 bg-p-secondary">
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
                myReview={myReview}
                setMyReview={setMyReview}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyReviews;
