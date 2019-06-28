import React, { ReactNode, ReactNodeArray } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Navigation } from './navigation'
import styled from 'styled-components'

const Container = styled.div`
	margin: 0 auto;
	max-width: 960px;
	padding: 0px 1.0875rem 1.45rem;
	padding-top: 0;
`

import Header from './header'
import { SiteTitleQueryQuery } from '../types/graphql-types'

interface LayoutProps {
	children: ReactNode | ReactNodeArray
	history?: History
	location?: Location
}

const Layout = ({ children }: LayoutProps) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={(data: SiteTitleQueryQuery) => (
			<>
				<Header siteTitle={data.site.siteMetadata.title} />
				<Container>
					<Navigation />
					<main>{children}</main>
					<footer>
						© {new Date().getFullYear()}, Built with
						{` `}
						<a href="https://www.gatsbyjs.org">Gatsby</a>
					</footer>
				</Container>
			</>
		)}
	/>
)

export default Layout
