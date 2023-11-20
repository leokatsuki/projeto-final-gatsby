import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import '../../components/styles.css'

const Blog = () => {

  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            title
            slug
            hero_image {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            hero_image_alt
            resume
          }
          id
        }
      }
    }
  `)

  return (
    <Layout>
      <section className='container'>
        <h3>Posts mais recentes</h3>

        {
          data.allMdx.nodes.map(node => (
            <div className='grid-4'>
              <div className="card hidden p-0 my-3">
                <div className="thumb hidden">
                    <Link to={`/blog/${node.frontmatter.slug}`} className="p-0">
                        <GatsbyImage image={getImage(node.frontmatter.hero_image)} alt={node.frontmatter.hero_image_alt} />
                    </Link>
                </div>
                <div className="p-2">
                    <h6 className="color-gray">{node.frontmatter.date}</h6>
                    <Link to={`/blog/${node.frontmatter.slug}`} className='link-title'>
                        <h4 className="mt-1">{node.frontmatter.title}</h4>
                    </Link>            
                    <p className="my-2">
                        {node.frontmatter.resume}
                    </p>
                    <Link to={`/blog/${node.frontmatter.slug}`} className="link p-0">Ler mais</Link>
                </div>
              </div>
            </div>
          ))
        }
      </section>
    </Layout>
  )
}

export const Head = () => <title>Posts</title>

export default Blog