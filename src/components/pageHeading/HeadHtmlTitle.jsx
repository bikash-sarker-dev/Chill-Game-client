import React from "react";
import { Helmet } from "react-helmet-async";

const HeadHtmlTitle = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </>
  );
};

export default HeadHtmlTitle;
