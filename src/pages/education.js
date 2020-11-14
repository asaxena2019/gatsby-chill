import React from "react"
import EduData from "../../content/education.yaml"
import SEO from "../components/seo"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Card from 'react-bootstrap/Card'
//import Accordion from 'react-bootstrap/Accordion'

/*<Accordion defaultActiveKey="0">
<Card>
<Accordion.Toggle as={Card.Header} eventKey="0">
<p>ECE</p>
</Accordion.Toggle>
<Accordion.Collapse eventKey="0">
  <Card.Body><ul>
  {EduData.coursework.ece.map((data, index) => {
    return <li key={`content_item_${index}`}>{data.item}</li>
  })}
</ul></Card.Body>
</Accordion.Collapse>
</Card>
<Card>
<Accordion.Toggle as={Card.Header} eventKey="1">
<p>CS</p>
</Accordion.Toggle>
<Accordion.Collapse eventKey="1">
  <Card.Body><ul>
  {EduData.coursework.cs.map((data, index) => {
    return <li key={`content_item_${index}`}>{data.item}</li>
  })}
</ul></Card.Body>
</Accordion.Collapse>
</Card>
<Card>
<Accordion.Toggle as={Card.Header} eventKey="2">
<p>Math</p>
</Accordion.Toggle>
<Accordion.Collapse eventKey="2">
  <Card.Body><ul>
  {EduData.coursework.math.map((data, index) => {
    return <li key={`content_item_${index}`}>{data.item}</li>
  })}
</ul></Card.Body>
</Accordion.Collapse>
</Card>
</Accordion>*/

const Education = () => (
  <div>
    <SEO title="education" />
    <h2>{EduData.title}</h2>
    <h5>{EduData.university}</h5>
    <h6><i>{EduData.grad}</i></h6>
    <h6><b>Major: </b> {EduData.major}</h6>
    <h6><b>Coursework: </b></h6>
    <Row>
      <Col>
        <p><i>ECE</i></p>
        <ul>
          {EduData.coursework.ece.map((data, index) => {
            return <li key={`content_item_${index}`}>{data.item}</li>
          })}
        </ul>
      </Col>
      <Col>
        <p><i>CS</i></p>
        <ul>
          {EduData.coursework.cs.map((data, index) => {
            return <li key={`content_item_${index}`}>{data.item}</li>
          })}
        </ul>
      </Col>
      <Col>
        <p><i>Math</i></p>
        <ul>
          {EduData.coursework.math.map((data, index) => {
            return <li key={`content_item_${index}`}>{data.item}</li>
          })}
        </ul>
      </Col>
    </Row>
    {EduData.skills.programming.map((data) => {
            return <p><b>Programming Skills: </b>{data.item}</p>
    })}
    {EduData.skills.scripting.map((data) => {
            return <p><b>Web Dev: </b>{data.item}</p>
    })}
    {EduData.skills.hardware.map((data) => {
            return <p><b>Hardware and Design: </b>{data.item}</p>
    })}
  </div>
)

export default Education