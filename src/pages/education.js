import React from "react"
import EduData from "../../content/education.yaml"
import SEO from "../components/seo"

const Education = () => (
  <div>
    <SEO title="education" />
    <h2>{EduData.title}</h2>
    <ul>
      {EduData.content.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.item}</li>
      })}
    </ul>
  </div>
)

export default Education