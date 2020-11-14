import React from "react"
import ProjData from "../../content/projects.yaml"
import SEO from "../components/seo"
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import "./pages.css"

const Projects = () => (
  <div>
    <h2>{ProjData.title}</h2>
    <Container>
    <Row>
      {ProjData.content.map((data, index) => {
        return <div class="col-md-4 col-xs-6">
            <Card key={`content_item_${index}`}>
              <Card.Body>
                <Card.Title>{data.item}</Card.Title>
                <div class="card-block">
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
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
