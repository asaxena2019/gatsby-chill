import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./pages.css"

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <div id="introduction">
      <h1 style={{color: 'brown'}}>&gt;&gt;&gt; /add_name_here</h1>
      <p><a href="www.linkedin.com" target="_blank" rel="noreferrer">[ linkedin ]</a><a href="https://github.com/" target="_blank" rel="noreferrer">[ github ]</a></p>
      <p>add description!</p>
    </div>
  </Layout>
)


export default IndexPage