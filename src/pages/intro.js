import React from "react"
import anushka from "../images/anushkasaxena.png"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import resume from "./resume.pdf"

import "./pages.css"

var ReactRotatingText = require('react-rotating-text');

const Intro = () => (
  <div>
    <h1>hi! i'm <ReactRotatingText items={['anushka', 'an engineer', 'the coffee coder']} /></h1>
    <Row>
      <Col>
        <p><span role="img" aria-label="rocket">🚀</span> Welcome to my little corner of the web! I am a sophomore studying <a href="https://www.ece.cmu.edu/" target="_blank" rel="noreferrer">ECE @ CMU</a>. My goals in life including building human-centric tools, studying tech + society, and becoming a coffee connoisseur. Talk to me about products, policies, and startups!</p>
        <p><span role="img" aria-label="star">🌟</span> Feel free to look at my <a href={resume} target="_blank" rel="noreferrer">resume</a> or contact me on any of my links. I'm also always down for a coffee chat!</p>
      </Col>
      <Col className="col-section">
        <img src={anushka} alt="profile"/>
      </Col>
    </Row>
  </div>
)

export default Intro
