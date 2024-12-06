import React from "react";
import MyReviews from "../components/myReviews/MyReviews";
import HeroPages from "../components/pageHeading/HeroPages";

const MyReviewsPage = () => {
  return (
    <main>
      <HeroPages title="My Reviews" />
      <MyReviews />
    </main>
  );
};

export default MyReviewsPage;
