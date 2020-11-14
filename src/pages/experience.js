import React from "react"
import ExpData from "../../content/experience.yaml"
import SEO from "../components/seo"

const Experience = () => (
  <div>
    <h2>{ExpData.title}</h2>
    <ul>
      {ExpData.jobs.map((data, index) => {
        return <div>
          <li key={`content_item_${index}`}>
          <b>{data.company}</b>
          </li>
          <i>{data.date}</i>
        </div>
      })}
    </ul>
  </div>
)

export default Experience
