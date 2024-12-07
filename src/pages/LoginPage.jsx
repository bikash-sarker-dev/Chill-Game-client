import React from "react";
import LoginForm from "../components/login/LoginForm";
import LoginHead from "../components/login/LoginHead";
import HeadHtmlTitle from "../components/pageHeading/HeadHtmlTitle";

const LoginPage = () => {
  return (
    <main>
      <HeadHtmlTitle title="Game | Login" />
      <LoginHead title="Log In to your Account" />
      <LoginForm />
    </main>
  );
};

export default LoginPage;
