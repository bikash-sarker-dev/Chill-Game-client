import React from "react";
import LoginHead from "../components/login/LoginHead";
import HeadHtmlTitle from "../components/pageHeading/HeadHtmlTitle";
import RegisterForm from "../components/register/RegisterForm";

const RegisterPage = () => {
  return (
    <main>
      <HeadHtmlTitle title="Game | Register" />
      <LoginHead title="Get started with easily register" />
      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
