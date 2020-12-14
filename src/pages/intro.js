import React from "react"
import anushka from "../images/anushkasaxena.png"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

var ReactRotatingText = require('react-rotating-text');

const Intro = () => (
  <div>
    <h1>hi! i'm <ReactRotatingText items={['anushka', 'a maker', 'a dreamer']} /></h1>
    <Row>
      <Col>
        <p><span role="img" aria-label="rocket">🚀</span> Welcome to my little corner of the web! I am a sophomore studying <a href="https://www.ece.cmu.edu/">ECE @ CMU</a>. My goals in life including building human-centric tools, studying tech + society, and becoming a coffee connoisseur. Talk to me about products, policies, and startups!</p>
        <p><span role="img" aria-label="computer">💻</span> I am the Director of Events at <a href="http://scottylabs.org/">ScottyLabs</a>, an interdisciplinary tech organization on campus, and successfully organized <a href="https://wdw.scottylabs.org/">Web Development Weekend</a>, <a href="https://crashcourse.scottylabs.org/">CrashCourse</a>, and <a href="http://www.tartanhacks.com/">TartanHacks</a>. Outside of school, I am a <a href="https://rewritingthecode.org/">Rewriting the Code fellow</a> and a <a href="http://builtbygirls.com/">BUILT BY GIRLS Ambassador</a>.</p>
        <p><span role="img" aria-label="star">🌟</span> Feel free to look at my resume or contact me on any of my links. I'm also always down for a coffee chat!</p>
      </Col>
      <Col>
        <img src={anushka} alt="profile"/>
      </Col>
    </Row>
  </div>
)

export default Intro
