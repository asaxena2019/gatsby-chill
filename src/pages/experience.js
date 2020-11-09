import React from "react"
import ExpData from "../../content/experience.yaml"

const Experience = () => (
  <div>
    <h2>{ExpData.title}</h2>
    <ul>
      {ExpData.content.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.item}</li>
      })}
    </ul>
  </div>
)

export default Experience
