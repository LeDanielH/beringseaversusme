import React, { ReactNode, ReactNodeArray } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Navigation } from '../navigation/navigation'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../../styles/theme'
import { useIntl, changeLocale } from 'gatsby-plugin-intl'
import Header from '../header'
import { TLocales } from '../../types/common'

const Container = styled.div`
	margin: 0 auto;
	max-width: 960px;
	padding: 0 1.0875rem 1.45rem;
`

interface LayoutProps {
	children: ReactNode | ReactNodeArray
	history?: History
	location?: Location
}

const LOCALES_LIST = [TLocales.cs, TLocales.en]

const SelectLocales = () => {
	const { locale: localeState } = useIntl()
	const handleOnChange = (event: React.FormEvent<HTMLSelectElement>) => {
		const localeSelected = event.currentTarget.value
		changeLocale(localeSelected)
	}
	return (
		<select name="locales" id="locales" onChange={handleOnChange} defaultValue={localeState}>
			{LOCALES_LIST.map((locale: TLocales) => {
				return (
					<option value={locale} key={locale}>
						{locale}
					</option>
				)
			})}
		</select>
	)
}

const Layout = (props: LayoutProps) => {
	const { children } = props

	return (
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
			render={(data: any) => (
				<ThemeProvider theme={theme}>
					<>
						<Header siteTitle={data.site.siteMetadata.title} />
						<Container>
							<SelectLocales />
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
}

export default Layout
