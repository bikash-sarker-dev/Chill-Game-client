import React from "react";
import { Fade } from "react-awesome-reveal";
import AllReviews from "../components/allReviews/AllReviews";
import HeadHtmlTitle from "../components/pageHeading/HeadHtmlTitle";

const AllReviewsPage = () => {
  return (
    <main>
      <HeadHtmlTitle title="Game | AllReviews" />
      <div className="text-5xl text-center py-32 bg-cyan-500">
        <Fade direction="up">
          <h2 className="text-5xl text-center ">All Reviews</h2>
        </Fade>
      </div>
      <AllReviews />
    </main>
  );
};

export default AllReviewsPage;
