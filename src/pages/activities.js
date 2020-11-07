import React from "react"
import ActiveData from "../../content/activities.yaml"

const Activities = () => (
  <div>
    <h2>{ActiveData.title}</h2>
    <ul>
      {ActiveData.content.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.item}</li>
      })}
    </ul>
  </div>
)

export default Activities
