import * as React from "react"
import Layout from "../components/layout"
import Notfound from "../components/Notfound/Notfound"

const NotFoundPage = () => {
  return (
    <Layout>
      <Notfound />
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Pagina nao encontrada</title>
