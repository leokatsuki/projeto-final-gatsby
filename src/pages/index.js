import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import BlogHome from '../../svg/logohome.svg'

const IndexPage = () => {
  return (
    <Layout>
      <section className="container flex-center">
        <div className="w-100 row mt-9">
          <div className="grid-4 ml-7">
            <h1 className="h0">
              blog<span className="color-blue">.</span>
            </h1>
            <p>
              Um blog para todos. Escrever, ler, se conectar.
            </p>
            <div className="mt-4">
              <Link to="/blog" className="btn mr-4">
                Ler noticias
              </Link>
              <Link to="/newpost" className="btn homeBtn">
                Começar a escrever
              </Link>
            </div>
          </div>
          <div className="grid-3"></div>
          <div className="grid-3 flex-center">
            <img src={BlogHome} alt="" className="homeLogo" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Início</title>;
