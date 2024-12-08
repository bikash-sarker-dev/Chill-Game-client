import React from "react";
import HeadHtmlTitle from "../components/pageHeading/HeadHtmlTitle";
import UpdateReview from "../components/updatReview/UpdateReview";

const UpdateReviewPage = () => {
  return (
    <main className="px-3 lg:px-0">
      <HeadHtmlTitle title="Game | Update Reviews" />
      <UpdateReview />
    </main>
  );
};

export default UpdateReviewPage;
