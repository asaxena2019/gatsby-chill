import React from "react"
import EduData from "../../content/education.yaml"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Education = () => (
  <div>
    <h2>{EduData.title}</h2>
    <h5>{EduData.university}</h5>
    <h6><i>{EduData.grad}</i></h6>
    <h6><b>Major: </b> {EduData.major}</h6>
    <h6><b>Awards: </b> {EduData.awards}</h6>
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