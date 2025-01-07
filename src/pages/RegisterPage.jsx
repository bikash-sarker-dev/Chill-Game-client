import React from "react";
import LoginHead from "../components/login/LoginHead";
import HeadHtmlTitle from "../components/pageHeading/HeadHtmlTitle";
import HeroPages from "../components/pageHeading/HeroPages";
import RegisterForm from "../components/register/RegisterForm";

const RegisterPage = () => {
  return (
    <main className="px-3 lg:px-0">
      <HeadHtmlTitle title="Game | Register" />
      <HeroPages title="Register" />
      <LoginHead title="Get started with easily register" />
      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
