import React from "react"
import './styles.css'
import { useStaticQuery, graphql } from 'gatsby'
import Footer from "./Footer/Footer"
import Header from "./Header/Header"

export default function Layout({ children }) {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <body className="layout">
      <Header />
      <div className="main">
        {children}
      </div>
      <Footer />
    </body >
  )
}
