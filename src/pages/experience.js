import React from "react"
import ExpData from "../../content/experience.yaml"
import SEO from "../components/seo"

const Experience = () => (
  <div>
    <SEO title="experience" />
    <h2>{ExpData.title}</h2>
    <ul>
      {ExpData.content.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.item}</li>
      })}
    </ul>
  </div>
)

export default Experience
