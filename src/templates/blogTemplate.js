import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout className="blog-post-container">
      <div className="blog-post">
        <a href="/musing">back to musing</a>
        <br></br><br></br>
        <h2>{frontmatter.title}</h2>
        <h4>{frontmatter.date}</h4>
        <h4><i>{frontmatter.description}</i></h4>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <br></br>
        <a href="/musing">back to musing</a>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
      }
    }
  }
`