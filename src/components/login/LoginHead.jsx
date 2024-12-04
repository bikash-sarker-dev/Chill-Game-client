import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginHead = ({ title }) => {
  return (
    <div className="container text-center mt-32 mb-20">
      <h2 className="text-4xl font-bold">{title}</h2>
      <div className="space-x-6 my-5">
        <button className="btn btn-outline rounded-3xl btn-info">
          {" "}
          <FcGoogle className="text-lg" /> Sign Up with Google
        </button>
        <button className="btn btn-outline rounded-3xl btn-info">
          {" "}
          <FaGithub className="text-lg text-black" /> Sign Up with Github
        </button>
      </div>
    </div>
  );
};

export default LoginHead;
