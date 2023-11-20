import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "D/MM/YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout>
      <section className="container">
        <h1 className="uppercase text-center mb-5">{data.mdx.frontmatter.title}</h1>

        <div className="img-banner hidden">
          <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
          <h6>{data.mdx.frontmatter.date}</h6>
        </div>

        <div className="my-3">
          <p className="mt-5">{children}</p>
        </div>
      </section>
    </Layout>
  );
};

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>;
export default BlogPost;