import React from "react";
import AllReviews from "../components/allReviews/AllReviews";
import HeadHtmlTitle from "../components/pageHeading/HeadHtmlTitle";
import HeroPages from "../components/pageHeading/HeroPages";

const AllReviewsPage = () => {
  return (
    <main>
      <HeadHtmlTitle title="Game | AllReviews" />
      <HeroPages title="All Reviews" />
      <AllReviews />
    </main>
  );
};

export default AllReviewsPage;
