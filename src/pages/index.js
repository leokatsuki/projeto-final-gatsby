import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import BlogHome from '../../svg/logohome.svg'

const IndexPage = () => {
  return (
    <Layout>
      <section className="container flex-center">
        <div className="flex-between mt-9">
          <div className="flex-start-column">
            <h1 className="h0">
              blog<span className="color-blue">.</span>
            </h1>
            <p>
              Um blog para todos. Escrever, ler, se conectar.
            </p>
            <div className="mt-4">
              <Link to="/blog" className="btn mr-3">
                Ler noticias
              </Link>
              <Link to="/newpost" className="btn">
                Começar a escrever
              </Link>
            </div>
          </div>
          <div className="ml-9 flex-center">
            <img src={BlogHome} alt="" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Início</title>;
