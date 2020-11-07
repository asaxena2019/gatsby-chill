import React from "react"
import EduData from "../../content/education.yaml"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const Education = () => (
  <div>
    <h2>{EduData.title}</h2>
    <ul>
      {EduData.content.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.item}</li>
      })}
    </ul>
    <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Carnegie Mellon University
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Class of 2023</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Gwinnett School of Mathematics, Science, and Technology
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Class of 2019</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
  </div>
)

export default Education
