import React from "react"
import IntroData from "../../content/intro.yaml"
import anushka from "../images/anushkasaxena.png"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

var ReactRotatingText = require('react-rotating-text');

const Intro = () => (
  <div>
    <h1>hi! i'm <ReactRotatingText items={['anushka', 'a maker', 'a dreamer']} /></h1>
    <Row>
      <Col>
        {IntroData.content.map((data, index) => {
          return <p key={`content_item_${index}`}>{data.item}</p>
        })}
      </Col>
      <Col>
        <img src={anushka} alt="profile"/>
      </Col>
    </Row>
  </div>
)

export default Intro
