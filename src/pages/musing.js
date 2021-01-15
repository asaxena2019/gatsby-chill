import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import kebabCase from "lodash/kebabCase"
import Layout from "../components/layout"
import ExternalLinks from "../../content/external.yaml"
import "./pages.css"

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <SEO title="musing" />

      <h2>words that matter to me</h2>
      <p><a href="\tags">tags</a></p>
      
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
                  <h3>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h3>
                  <h5>{post.frontmatter.date}</h5>
                  {post.frontmatter.tags.map(tag => {
                    return(
                      <Link to={`/tags/${kebabCase(tag)}/`} key={tag}>
                        {tag}&nbsp;
                      </Link>
                    )
                  })}
                </header>
                <section>
                  <i><h5
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

      <br></br>
      <h2>pieces from other parts of the web</h2>
      <p><a href="https://coffeecoders.medium.com/" target="_blank" rel="noreferrer">medium</a> | <a href='https://coffeecoders.substack.com/' target="_blank" rel="noreferrer">substack</a></p>
      <ol style={{ listStyle: `none` }}>
        {ExternalLinks.pieces.reverse().map(post => {
          return (
            <div style={{borderBottom: "1px solid gray"}}>
            <li key={post.link}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header style={{marginBottom: `0.5rem`,}}>
                  <h3>
                    <Link to={post.link} itemProp="url" target="_blank" rel="noreferrer">
                      <span itemProp="headline">{post.title}</span>
                    </Link>
                  </h3>
                  <h5>{post.date}</h5>
                </header>
                <section>
                  <i><h5
                    dangerouslySetInnerHTML={{
                      __html: post.description,
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
          tags
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`