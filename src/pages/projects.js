import React from "react"
import ProjData from "../../content/projects.yaml"
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import "./pages.css"

const Projects = () => (
  <div>
    <h2>{ProjData.title}</h2>
    <Container>
    <Row>
      {ProjData.projects.map((data, index) => {
        return <div class="col-md-4 col-xs-6">
            <Card key={`content_item_${index}`}>
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <div class="card-block">
                <Card.Subtitle className="mb-2 text-muted">{data.date}</Card.Subtitle>
                <Card.Text>
                {data.description}
                </Card.Text>
                <Card.Link href={ data.github } target="_blank" rel="noreferrer">Github</Card.Link>
                <Card.Link href={ data.link } target="_blank" rel="noreferrer">Link</Card.Link>
                </div>  
              </Card.Body>
          </Card>
        </div>
      })}
      </Row>
      </Container>
  </div>
)

export default Projects
