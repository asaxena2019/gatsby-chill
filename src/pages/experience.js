import React from "react"
import ExpData from "../../content/experience.yaml"

const Experience = () => (
  <div>
    <h2>{ExpData.title}</h2>
    <ul>
      {ExpData.jobs.map((data, index) => {
        return <div>
          <li key={`content_item_${index}`}>
          <b>{data.role}</b>
          <br></br>{data.company}
          <br></br><i>{data.date}</i>
          <br></br>{data.description}
          <ul>
            {data.tasks.map((task, index) => {
              return <li key={`content_item_${index}`}>
                <p><b>{task.title}</b> {task.description}</p>
                </li>
            })}
          </ul>
          </li>
        </div>
      })}
    </ul>
  </div>
)

export default Experience
