import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout>
        <SEO title="musing" />
        <h1>welcome to my thoughts!</h1>
        <h2>here you will find all things personal, perky, and professional</h2>
        <h3>to check out my technical posts exclusively, go to <a href="https://coffeecoders.medium.com/">my medium page</a></h3>
        <h2>
          no blog posts yet!
        </h2>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title="musing" />
      <h2>welcome to my thoughts!</h2>
      <p>here you will find all things personal, perky, and professional.</p>
      <p>to check out my technical posts exclusively, go to <a href="https://coffeecoders.medium.com/">my medium page</a> :)</p>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <div style={{borderBottom: "1px solid gray"}}>
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header style={{marginBottom: `0.5rem`,}}>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <h4>{post.frontmatter.date}</h4>
                </header>
                <section>
                  <i><h4
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  /></i>
                </section>
              </article>
            </li>
            </div>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`