import React from "react";
import Logo from "../../../svg/logo.svg";
import "./login.css";

function Login() {
  return (
    <section className="container">
      <div className="flex-center">
        <img src={Logo} className="icon-l" alt="" />
      </div>

      <div className="row">
        <div className="flex-center">
          <form className="w-30">
            <h3 className="text-center mt-4">
              Olá, faça o login para continuar.
            </h3>

            <div className="mt-4">
              <input
                type="text"
                id="user"
                name="user"
                className="mt-1"
                placeholder="Digite seu usuário"
              />
            </div>

            <div className="mt-3">
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1"
                placeholder="Digite sua senha"
              />
            </div>

            <button className="btn w-100 mt-5">Entrar</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
