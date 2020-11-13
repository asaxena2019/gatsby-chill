import React from "react"
import IntroData from "../../content/intro.yaml"
import SEO from "../components/seo"

const Intro = () => (
  <div>
    <SEO title="experience" />
      {IntroData.content.map((data, index) => {
        return <p key={`content_item_${index}`}>{data.item}</p>
      })}
  </div>
)

export default Intro
