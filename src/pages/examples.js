import React from 'react'
import Header from '../examples/Header'
import Layout from '../components/layout'
import {graphql} from 'gatsby'

const examples = ({data}) => {
     
     const {site:{info: {author}}} = data 

     return (
          <Layout>
               <h1>hello from examples</h1>
               <h5>{author}</h5>
               <Header />
          </Layout>
     )
}

export const data=graphql`
query {
     site {
       info: siteMetadata {
         author
         data
         description
         title
         person {
           age
           name
         }
       }
     }
   }
   
`



export default examples
