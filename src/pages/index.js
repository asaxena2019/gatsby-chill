import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactTypingEffect from 'react-typing-effect'
import Intro from "./intro"
import Education from "./education"
import Experience from "./experience"
import Projects from "./projects"

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <section id="intro">
      <h1>hi! i'm <ReactTypingEffect text={["anushka"]} typingDelay={1000} eraseDelay={1000}/></h1>
      <Intro />
    </section>
    <section id="education">
      <Education />
    </section>
    <section id="experience">
      <Experience />
    </section>
    <section id="projects">
      <Projects />
    </section>
  </Layout>
)

export default IndexPage
