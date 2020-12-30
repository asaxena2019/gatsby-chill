import React from "react"
import ExpData from '../../content/experience.yaml'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const Experience = () => (
  <div>
    <h2>{ExpData.title}</h2>
    <Accordion>
      {ExpData.jobs.map((data, index) => {
        return <Card>          
          <Accordion.Toggle as={Card.Header} eventKey={`${index}`} style={{background: `#FFFFFF`}}>
            <b>{data.role}</b>
            <br></br>{data.company}
            <br></br><i>{data.date}</i>
            <br></br>{data.description}
            <div><svg style={{display: 'block', margin: 'auto'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="32" height="32"><path fill-rule="evenodd" d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"></path></svg></div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={`${index}`} style={{background: `#FFFFFF`}}>
            <Card.Body>
            <ul>
              {data.tasks.map((task, index) => {
                return <li key={`content_item_${index}`}>
                <p><b>{task.title}</b> {task.description}</p>
                </li>
              })}
            </ul>
            {data.links.map((external, index) => {
                  return <Card.Link href={ external.link } target="_blank" rel="noreferrer" key={`content_item_${index}`}>{ external.title }</Card.Link>
            })}
            </Card.Body>
            </Accordion.Collapse>
          </Card>
          
      })}
      </Accordion>
      <br></br>
  </div>
)

export default Experience
