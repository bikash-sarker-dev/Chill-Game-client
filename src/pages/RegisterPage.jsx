import React from "react";
import LoginHead from "../components/login/LoginHead";
import RegisterForm from "../components/register/RegisterForm";

const RegisterPage = () => {
  return (
    <main>
      <LoginHead title="Get started with easily register" />
      <RegisterForm />
    </main>
  );
};

export default RegisterPage;
