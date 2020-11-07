import React from "react"
import IntroData from "../../content/intro.yaml"

const Intro = () => (
  <div>
    <h2>{IntroData.title}</h2>
    <ul>
      {IntroData.content.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.item}</li>
      })}
    </ul>
  </div>
)

export default Intro
