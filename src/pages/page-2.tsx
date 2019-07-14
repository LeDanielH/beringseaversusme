import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/gatsby_to-be-removed/layout'
import SEO from '../components/gatsby_to-be-removed/seo'

const SecondPage = () => (
	<Layout>
		<SEO title="Page two" />
		<h1>Hi from the second page</h1>
		<p>Welcome to page 2</p>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
)

export default SecondPage
