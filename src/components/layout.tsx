import React, { ReactNode, ReactNodeArray } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Navigation } from './navigation'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

const Container = styled.div`
	margin: 0 auto;
	max-width: 960px;
	padding: 0 1.0875rem 1.45rem;
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
			<ThemeProvider theme={theme}>
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
			</ThemeProvider>
		)}
	/>
)

export default Layout
