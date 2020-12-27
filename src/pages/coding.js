import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SEO from "../components/seo"

const Coding = ({ data }) => {
const [posts, setPosts] = useState([])
useEffect(() => {
    setPosts(data.allGoogleSheetSheet1Row.nodes)
    }, [data.allGoogleSheetSheet1Row.nodes])
return (
    <Layout>
        <SEO title="coding" />
        <h2>check out what i'm coding here!</h2>
        <p>for updates, follow my dev account on twitter <a href="https://twitter.com/c0ffeec0ders">@c0ffeec0ders</a></p>
        <Row>
                <Col>
                    <h5>date</h5>
                </Col>
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
                    <h6>{post.date}</h6>
                </Col>
                <Col>
                    <h6>{post.number}</h6>
                </Col>
                <Col>
                    <h6>{post.description}</h6>
                </Col>
            </Row>
            
        </div>
        ))}
        
    </Layout>
    )
}
export default Coding
export const query = graphql`
    {
    allGoogleSheetSheet1Row {
        nodes {
            date
            id
            description
            number
            }
        }
    }
`