import * as React from "react";
import Layout from "../components/layout";
import Login from "../components/Login/Login";

const LoginPage = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default LoginPage;

export const Head = () => <title>Login</title>;
