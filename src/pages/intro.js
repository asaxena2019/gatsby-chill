import React from "react"
import anushka from "../images/anushkasaxena.png"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import resume from "./resume.pdf"

var ReactRotatingText = require('react-rotating-text');

const Intro = () => (
  <div>
    <h1>hi! i'm <ReactRotatingText items={['anushka', 'an engineer', 'the coffee coder']} /></h1>
    <Row>
      <Col>
        <p><span role="img" aria-label="rocket">🚀</span> Welcome to my little corner of the web! I am a sophomore studying <a href="https://www.ece.cmu.edu/" target="_blank" rel="noreferrer">ECE @ CMU</a>. My goals in life including building human-centric tools, studying tech + society, and becoming a coffee connoisseur. Talk to me about products, policies, and startups!</p>
        <p><span role="img" aria-label="computer">💻</span> I am the Director of Events at <a href="http://scottylabs.org/" target="_blank" rel="noreferrer">ScottyLabs</a>, an interdisciplinary tech organization on campus, and successfully organized <a href="https://wdw.scottylabs.org/" target="_blank" rel="noreferrer">Web Development Weekend</a>, <a href="https://crashcourse.scottylabs.org/" target="_blank" rel="noreferrer">CrashCourse</a>, and <a href="http://www.tartanhacks.com/" target="_blank" rel="noreferrer">TartanHacks</a>. Outside of school, I am a <a href="https://rewritingthecode.org/" target="_blank" rel="noreferrer">Rewriting the Code fellow</a> and a <a href="http://builtbygirls.com/" target="_blank" rel="noreferrer">BUILT BY GIRLS Ambassador</a>.</p>
        <p><span role="img" aria-label="star">🌟</span> Feel free to look at my <a href={resume} target="_blank" rel="noreferrer">resume</a> or contact me on any of my links. I'm also always down for a coffee chat!</p>
      </Col>
      <Col>
        <img src={anushka} alt="profile"/>
      </Col>
    </Row>
  </div>
)

export default Intro
