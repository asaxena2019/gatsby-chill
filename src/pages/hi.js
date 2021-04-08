import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CV from "./CV.pdf"

import "./pages.css"

const IndexPage = () => (
  <Layout>
    <SEO title="hi" />
    <div id="introduction">
      <h1 style={{color: 'brown'}}>&gt;&gt; anushka saxena</h1>
      <p><a href={CV} target="_blank" rel="noreferrer">[ resume ]</a><a href="https://www.linkedin.com/in/anushkasaxena1/" target="_blank" rel="noreferrer">[ linkedin ]</a><a href="https://github.com/asaxena2019" target="_blank" rel="noreferrer">[ github ]</a><a href="mailto:anushka2@andrew.cmu.edu" target="_blank" rel="noreferrer">[ email ]</a></p>
    </div>
    <div id="outreach">
      <h1 style={{color: 'brown'}}>&gt;&gt; teaching and outreach</h1>
    </div>
    <div id="highlights">
      <h1 style={{color: 'brown'}}>&gt;&gt; interests</h1>
    </div>

  </Layout>
)


export default IndexPage