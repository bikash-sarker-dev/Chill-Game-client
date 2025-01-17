import React from "react";
import LoginForm from "../components/login/LoginForm";
import LoginHead from "../components/login/LoginHead";
import HeadHtmlTitle from "../components/pageHeading/HeadHtmlTitle";
import HeroPages from "../components/pageHeading/HeroPages";

const LoginPage = () => {
  return (
    <main className="px-3 lg:px-0">
      <HeadHtmlTitle title="Game | Login" />
      <HeroPages title="Login" />
      <LoginHead title="Log In to your Account" />
      <LoginForm />
    </main>
  );
};

export default LoginPage;
