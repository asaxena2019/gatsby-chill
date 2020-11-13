import React from "react"
import IntroData from "../../content/intro.yaml"
import SEO from "../components/seo"
import anushka from "../images/anushkasaxena.png"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Intro = () => (
  <div>
    
    <SEO title="experience" />
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
