import React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import "./pages.css"

var ReactRotatingText = require('react-rotating-text');

const Intro = () => (
  <div>
    <h1>hi! i'm <ReactRotatingText items={['name', 'role', 'descriotion']} /></h1>
    <Row>
      <Col id="nav">
        <p><span role="img" aria-label="hand">🚀</span> Welcome to my little corner of the web!</p>
      </Col>
    </Row>
  </div>
)

export default Intro
