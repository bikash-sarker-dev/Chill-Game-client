import React from "react";
import LoginForm from "../components/login/LoginForm";
import LoginHead from "../components/login/LoginHead";

const LoginPage = () => {
  return (
    <main>
      <LoginHead title="Log In to your Account" />
      <LoginForm />
    </main>
  );
};

export default LoginPage;
