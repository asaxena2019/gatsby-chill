import React from "react"
import involveData from "../../content/involvements.yaml"
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import "./pages.css"

const Invovlements = () => (
  <div>
    <h2>{involveData.title}</h2>
    <Container>
    <Row>
      {involveData.projects.map((data, index) => {
        return <div class="col-md-4 col-xs-6">
            <Card key={`content_item_${index}`}>
              <Card.Body>
                <Card.Title>{data.role}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><a href={data.link}>{data.group}</a></Card.Subtitle>
                <div class="card-block">
                <i><Card.Subtitle className="mb-2 text-muted">{data.date}</Card.Subtitle></i>
                <Card.Text>
                {data.description}
                </Card.Text>
                <ul>
                {data.links.map((external, index) => {
                  return <li><Card.Link href={ external.link } target="_blank" rel="noreferrer" key={`content_item_${index}`}>{ external.item }</Card.Link></li>
                })}
                </ul>
                </div>
              </Card.Body>
          </Card>
        </div>
      })}
      </Row>
      </Container>
      <br></br>
  </div>
)

export default Invovlements
