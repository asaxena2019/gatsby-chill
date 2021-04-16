import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SEO from "../components/seo"
import Projects from "./projects"

import "./pages.css"

const Coding = ({ data }) => {
const [posts, setPosts] = useState([])
useEffect(() => {
    setPosts(data.allGoogleSheetSheet1Row.nodes)
    }, [data.allGoogleSheetSheet1Row.nodes])
return (
    <Layout>
        <SEO title="coding" />
        <h2>&gt;&gt;&gt; /technology garden</h2>
        <Projects />
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