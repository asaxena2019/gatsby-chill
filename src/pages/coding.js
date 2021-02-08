import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SEO from "../components/seo"
import Gardening from "../../content/garden.yaml"
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import "./pages.css"

const Coding = ({ data }) => {
const [posts, setPosts] = useState([])
useEffect(() => {
    setPosts(data.allGoogleSheetSheet1Row.nodes)
    }, [data.allGoogleSheetSheet1Row.nodes])
return (
    <Layout>
        <SEO title="coding" />
        <h2>building virtual skyscrapers and digital worlds</h2>
        <h3>technology garden</h3>
        <p>inspired by <a href="https://www.technologyreview.com/2020/09/03/1007716/digital-gardens-let-you-cultivate-your-own-little-bit-of-the-internet/" target="_blank" rel="noreferrer">this article</a>, here are playful projects, work in progresses, and blooming ideas that i've entertained.</p> 
        
        <Container>
        <Row>
        {Gardening.projects.map((data, index) => {
            return <div class="col-md-4 col-xs-6">
                <Card key={`content_item_${index}`}>
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <div class="card-block">
                    <i><Card.Subtitle className="mb-2 text-muted">{data.date}</Card.Subtitle></i>
                    <Card.Text>
                    {data.description}
                    </Card.Text>
                    {data.links.map((external, index) => {
                    return <Card.Link href={ external.link } target="_blank" rel="noreferrer" key={`content_item_${index}`}>{ external.item }</Card.Link>
                    })}
                    </div>
                </Card.Body>
            </Card>
            </div>
        })}
        </Row>
        </Container>
        <br></br>
        <h3>coding log</h3>
        <p>for updates, follow my dev account on twitter <a href="https://twitter.com/c0ffeec0ders" target="_blank" rel="noreferrer">@c0ffeec0ders</a>. powered by <a href="http://automate.io/" target="_blank" rel="noreferrer">automate.io</a> and <a href="https://developers.google.com/sheets/api" target="_blank" rel="noreferrer">google sheets api</a>.</p>
        <div style={{overflow:"scroll", height:"20rem"}}>
        <Row>
                <Col>
                    <h5>day</h5>
                </Col>
                <Col>
                    <h5>what i did</h5>
                </Col>
        </Row>
        {posts.map(post => (
         <div
            key={post.id}
            style={{ marginBottom: `1.45rem` }}
        >
            <Row>
                <Col>
                    <h6>{post.number}</h6>
                </Col>
                <Col>
                    <h6>{post.description}</h6>
                </Col>
            </Row>
            
        </div>
        ))}
        </div>
    </Layout>
    
    )
}
export default Coding
export const query = graphql`
    {
    allGoogleSheetSheet1Row {
        nodes {
            id
            description
            number
            }
        }
    }
`