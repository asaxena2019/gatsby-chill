import React from "react"
import ProjData from "../../content/projects.yaml"
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

const numItemsPerRow = 4;

const containerStyle = { 
  display: "flex", 
  width: "100%", 
  flexWrap: "wrap" 
};

const itemStyle = {
  minWidth: `${100 / numItemsPerRow}%`,
};
const Projects = () => (
  <div>
    <h2>{ProjData.title}</h2>
    <CardDeck fluid='md' style={containerStyle}>
      {ProjData.content.map((data, index) => {
        return <Card key={`content_item_${index}`} style={itemStyle}>
                <Card.Body>
                  <Card.Title>{data.item}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
      })}
      </CardDeck>
  </div>
)

export default Projects
