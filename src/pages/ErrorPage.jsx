import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main>
      <section className="flex  justify-center items-center w-full h-screen text-center">
        <div>
          <h1 className="font-extrabold text-sky-500 text-[130px]">404</h1>
          <p className="font-semibold text-gray-500 text-xl">Not Found Page</p>
          <Link className="btn btn-info mt-8 text-[#fff] px-8" to="/">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
