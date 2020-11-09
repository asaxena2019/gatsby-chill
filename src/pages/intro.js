import React from "react"
import IntroData from "../../content/intro.yaml"

const Intro = () => (
  <div>
      {IntroData.content.map((data, index) => {
        return <p key={`content_item_${index}`}>{data.item}</p>
      })}
  </div>
)

export default Intro
