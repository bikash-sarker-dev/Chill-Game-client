import React from "react";
import Details from "../components/details/Details";
import HeadHtmlTitle from "../components/pageHeading/HeadHtmlTitle";

const ReviewDetailsPage = () => {
  return (
    <main className="px-3 lg:px-0">
      <HeadHtmlTitle title="Game | Details Reviews" />
      <Details />
    </main>
  );
};

export default ReviewDetailsPage;
