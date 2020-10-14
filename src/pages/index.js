import React from "react"
import Layout from "../components/layout"
import {ExampleButton} from "../components/boton"

export default function Home() {
  return (
  <Layout>

      <h1 style={{color:"red", textTransform: "uppercase"}}>  
        Hello people!
      </h1>

      <a href="https://www.gatsbyjs.org">gatsby docs</a>
      <h1 style={{color:"red", textTransform: "uppercase"}}>  
        Hello socker
      </h1>
      <ExampleButton>click me</ExampleButton>
  </Layout>
  )
}
