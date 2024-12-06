import { useEffect, useState } from "react";
import CardLatest from "./CardLatest";

const LatestReview = () => {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    fetch("https://chill-gamer-server-ten.vercel.app/reviews/latest")
      .then((res) => res.json())
      .then((data) => setLatest(data));
  }, []);

  return (
    <section className="my-24 mb-40">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold">Latest Review</h2>
          <p className="text-gray-500 max-w-md mx-auto mt-3">
            the lates reviews posting our website. new game every day update in
            application .
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {latest.map((newReview) => (
            <CardLatest key={newReview._id} newReview={newReview} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestReview;
