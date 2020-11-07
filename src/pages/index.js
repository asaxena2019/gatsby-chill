import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ReactTypingEffect from 'react-typing-effect'
import Intro from "./intro"
import Education from "./education"
import Experience from "./experience"
import Projects from "./projects"
import Activities from "./activities"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      hi! i'm <ReactTypingEffect text={["anushka", "an innovator", "an engineer"]} typingDelay={1000} eraseDelay={1000}/>
    </h1>
    <section id="#intro">
      <Intro />
    </section>
    <section id="#education">
      <Education />
    </section>
    <section id="#experience">
      <Experience />
    </section>
    <section id="#projects">
      <Projects />
    </section>
    <section id="#activities">
      <Activities  />
    </section>
  </Layout>
)

export default IndexPage
