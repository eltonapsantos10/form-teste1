import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Elton Aparecido Santos!</h1>
    

    <p>
      <Link to="/home/">1</Link> <br />
      <Link to="/page-2/">2</Link> <br />
      <Link to="/using-typescript/">3</Link>
    </p>
  </Layout>
)

export default IndexPage
