import React from "react"
import ProjData from "../../content/projects.yaml"
import SEO from "../components/seo"

const Projects = () => (
  <div>
    <SEO title="projects" />
    <h2>{ProjData.title}</h2>
    <ul>
      {ProjData.content.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.item}</li>
      })}
    </ul>
  </div>
)

export default Projects
