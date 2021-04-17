import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "./projects"

import "./pages.css"

const Coding = () => {
return (
    <Layout>
        <SEO title="coding" />
        <h2>&gt;&gt;&gt; /technology garden</h2>
        <Projects />
        <br></br>
    </Layout>

    )
}
export default Coding