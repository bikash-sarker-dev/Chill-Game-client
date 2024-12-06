import React from "react";
import AddReviewInput from "../components/addReviews/AddReviewInput";
import HeroPages from "../components/pageHeading/HeroPages";

const AddReviewPage = () => {
  return (
    <main>
      <HeroPages title="Add Reviews" />
      <AddReviewInput />
    </main>
  );
};

export default AddReviewPage;
