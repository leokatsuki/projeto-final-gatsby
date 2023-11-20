import * as React from "react";
import Layout from "../components/layout";
import BlogHome from "../../svg/logo.svg";

const About = () => {
  return (
    <Layout>
      <section className="container flex-center">
        <div className="mt-9 flex-center">
          <div className="w-50 text-center">
            <img src={BlogHome} className="w-30" alt=""/>
            <p className="mt-5">
              Trata-se de uma aplicação feita com gatsby e componentes react
              para aprendizagem da tecnologia dentro do curso de desenvolvimento
              web fullstack no INFNET.
            </p>
            <a
              href="https://posgraduacao.infnet.edu.br/ead/pos-graduacao-desenvolvimento-web-full-stack/"
              target="_blank"
              className="btn mt-5"
              rel="noreferrer"
            >
              Quero ver mais
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

export const Head = () => <title>Sobre</title>;
