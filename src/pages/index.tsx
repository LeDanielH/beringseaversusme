import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-react-intl'
import Layout from '../components/gatsby_to-be-removed/layout'

export default function Home() {
	return (
		<Layout>
			<FormattedMessage id="helloWorld" />
		</Layout>
	)
}
