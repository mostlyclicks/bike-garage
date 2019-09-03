import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"
// require('dotenv').config();
// import { dotenv } from 'dotenv'

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = ( {data} ) => (
  <Layout>
  <table>

    {
      data.allGoogleSheetBikesSheet1.edges.map( bike => (
        <tr>
          <td>{bike.node.bikeMake}</td>
          <td>{bike.node.bikeModel}</td>
          <td>{bike.node.bikeColor}</td>
          <td>{bike.node.bikeSize}</td>  
        </tr>
      ))
    }
    </table>
  </Layout>
)

export const query = graphql`
  query {
    allGoogleSheetBikesSheet1 {
      edges {
        node {
          bikeMake
          bikeModel
          bikeColor
          bikeSize
        }
      }
    }
  }
`

export default IndexPage
