import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = ( {data} ) => (
  <Layout>
    {
      data.allGoogleSheetBikesBikes.edges.map( bike => (
        <li>{bike.node.bikeMake} - {bike.node.bikeModel} - {bike.node.bikeColor}</li>
      ))
    }
  </Layout>
)

export const query = graphql`
  query {
    allGoogleSheetBikesBikes {
      edges {
        node {
          bikeMake
          bikeModel
          bikeColor
        }
      }
    }
  }
`

export default IndexPage
