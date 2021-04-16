import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CV from "./CV.pdf"

import "./pages.css"

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <div id="introduction">
      <h1 style={{color: 'brown'}}>&gt;&gt;&gt; /anushkasaxena</h1>
      <p><a href={CV} target="_blank" rel="noreferrer">[ resume ]</a><a href="https://www.linkedin.com/in/anushkasaxena1/" target="_blank" rel="noreferrer">[ linkedin ]</a><a href="https://github.com/asaxena2019" target="_blank" rel="noreferrer">[ github ]</a><a href="mailto:anushka2@andrew.cmu.edu" target="_blank" rel="noreferrer">[ email ]</a></p>
      <p>hi! my name is anushka, and i'm a rising senior at carnegie mellon university studying electrical and computer engineering. i am fascinated by the evolution of systems, and i spend most of my time studying software, machine learning, and human-computer interaction.</p>
      <p>i'm currently doing research on artificial intelligence infrastructure in child welfare systems in the social computing lab. i am a teaching assistant for <a href="https://www.cs.cmu.edu/afs/cs.cmu.edu/academic/class/15294-s21/index.html" target="_blank" rel="noreferrer">rapid prototyping technologies</a> and <a href="https://www.cs.cmu.edu/afs/cs.cmu.edu/academic/class/15394-s21/" target="_blank" rel="noreferrer">intermediate rapid prototyping</a>. i also spend my time as director of <a href="https://scottylabs.org/index.html" target="_blank" rel="noreferrer">scottylabs</a>.</p>
      <p>i'll be interning at intel this upcoming summer under the client computing group. i was an intern at bank of america in summer 2020 and have participated in training programs such as cisco high externship and facebook abcs.</p>
      <p>i'm on a quest to live a more sustainable life. i like coffee shops, extended metaphors, and journaling. if you see me redesigning this website from time to time, it's because <a href="https://open.spotify.com/album/1kCHru7uhxBUdzkm4gzRQc?si=ihycxu6XRw6x0d_bC0KXnA" target="_blank" rel="noreferrer">i will never be satisfied</a>.</p>
    </div>
  </Layout>
)


export default IndexPage