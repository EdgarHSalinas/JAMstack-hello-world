import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Edgar H Salinas</h1>
    <p>I'm a Full-Stack Software Developer</p>
    <p>Looking Forward to Meet you!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
