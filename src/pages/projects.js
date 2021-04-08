import React from "react"
import ProjData from "../../content/projects.yaml"
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import "./pages.css"

const Projects = () => (
  <div>
    <h2>{ProjData.title}</h2>
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
  </div>
)

export default Projects
