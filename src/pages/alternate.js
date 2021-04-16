import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'

import Intro from "./intro"
import Education from "./education"
import Experience from "./experience"
import Projects from "./projects"

import "./pages.css"

const IndexPage = () => (
  <Layout>
    <SEO title="alternate" />
    <section id="intro">
      <Intro />
    </section>
    <section id="building">
      <Projects />
    </section>
    <section id="working">
      <Experience />
    </section>
    <section id="learning">
      <Education />
    </section>
  </Layout>
)

export default IndexPage
