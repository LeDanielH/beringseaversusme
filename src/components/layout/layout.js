import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Loader from '../loader'
import Navigation from '../navigation'

import './layout.scss'

const Layout = ({ children }) => {
	return (
		<StaticQuery
			query={graphql`
				query SiteMetaQuery {
					site {
						siteMetadata {
							title
							author
						}
					}
				}
			`}
			render={data => {
				const { title } = data.site.siteMetadata
				return (
					<>
						<Helmet
							title={title}
							meta={[
								{ name: 'description', content: 'Sample' },
								{
									name: 'keywords',
									content: 'sample, something'
								}
							]}
						/>
						<Navigation />
						<div className={`layout`}>{children}</div>
						<Loader />
					</>
				)
			}}
		/>
	)
}

export default Layout
