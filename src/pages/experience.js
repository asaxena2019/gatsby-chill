import React from "react"
import ExpData from "../../content/experience.yaml"
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const Experience = () => (
  <div>
    <h2>{ExpData.title}</h2>
    <Accordion defaultActiveKey={0}>
      {ExpData.jobs.map((data, index) => {
        return <Card style={{background: `#FFFFFF`}}>
            <Accordion.Toggle as={Card.Header} eventKey={`content_item_${index}`}>
            <b>{data.role}</b>
            <br></br>{data.company}
            <br></br><i>{data.date}</i>
            <br></br>{data.description}
            <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="32" height="32"><path fill-rule="evenodd" d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"></path></svg></div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={`content_item_${index}`}>
            <Card.Body>
            <ul>
              {data.tasks.map((task, index) => {
                return <li key={`content_item_${index}`}>
                <p><b>{task.title}</b> {task.description}</p>
                </li>
              })}
            </ul>
            </Card.Body>
            </Accordion.Collapse>
          </Card>
      })}
      </Accordion>
  </div>
)

export default Experience
