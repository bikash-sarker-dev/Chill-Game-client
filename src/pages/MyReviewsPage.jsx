import React from "react";
import MyReviews from "../components/myReviews/MyReviews";
import HeadHtmlTitle from "../components/pageHeading/HeadHtmlTitle";
import HeroPages from "../components/pageHeading/HeroPages";

const MyReviewsPage = () => {
  return (
    <main>
      <HeadHtmlTitle title="Game | My Reviews" />
      <HeroPages title="My Reviews" />
      <MyReviews />
    </main>
  );
};

export default MyReviewsPage;
