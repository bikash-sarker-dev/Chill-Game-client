import React from "react";
import AddReviewInput from "../components/addReviews/AddReviewInput";
import HeadHtmlTitle from "../components/pageHeading/HeadHtmlTitle";
import HeroPages from "../components/pageHeading/HeroPages";

const AddReviewPage = () => {
  return (
    <main>
      <HeadHtmlTitle title="Game | AddReviews" />
      <HeroPages title="Add Reviews" />
      <AddReviewInput />
    </main>
  );
};

export default AddReviewPage;
