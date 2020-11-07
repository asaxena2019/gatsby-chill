import React from "react"
import ProjData from "../../content/projects.yaml"

const Projects = () => (
  <div>
    <h2>{ProjData.title}</h2>
    <ul>
      {ProjData.content.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.item}</li>
      })}
    </ul>
  </div>
)

export default Projects
