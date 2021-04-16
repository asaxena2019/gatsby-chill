import React from "react"
import ProjData from "../../content/projects.yaml"
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Gardening from "../../content/garden.yaml"
import "./pages.css"

const Projects = () => (
  <div>
    <h3>bloomed</h3>
    <CardColumns>
      {ProjData.projects.map((data, index) => {
        return <Card key={`content_item_${index}`}>
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <i><Card.Subtitle className="mb-2 text-muted">{data.date}</Card.Subtitle></i>
                <Card.Text>
                {data.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                {data.links.map((external, index) => {
                  return <Card.Link href={ external.link } target="_blank" rel="noreferrer" key={`content_item_${index}`}>{ external.item }</Card.Link>
                })}
              </Card.Footer>
          </Card>
      })}
      </CardColumns>
      <br></br>
      <h3>cultivating</h3>
      <CardColumns>
      {Gardening.projects.map((data, index) => {
        return <Card key={`content_item_${index}`}>
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <i><Card.Subtitle className="mb-2 text-muted">{data.date}</Card.Subtitle></i>
                <Card.Text>
                {data.description}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                {data.links.map((external, index) => {
                  return <Card.Link href={ external.link } target="_blank" rel="noreferrer" key={`content_item_${index}`}>{ external.item }</Card.Link>
                })}
              </Card.Footer>
          </Card>
      })}
      </CardColumns>
  </div>
)

export default Projects
