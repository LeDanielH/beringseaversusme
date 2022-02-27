import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { DefaultSeoQueryQuery } from '../../../gatsby-generated-types'
import { oc } from 'ts-optchain'

interface Meta {
	name: string
	content: string
}

interface SeoProps {
	description?: string
	lang?: string
	keywords?: Array<string>
	title: string
	meta?: Array<Meta>
}

function SEO({
	description,
	lang = 'en',
	meta = [],
	keywords = [],
	title
}: SeoProps) {
	return (
		<StaticQuery
			query={detailsQuery}
			render={(data: DefaultSeoQueryQuery) => {
				const metaDescription =
					description || oc(data).site.siteMetadata.description('description is missing')
				return (
					<Helmet
						htmlAttributes={{
							lang
						}}
						title={title}
						titleTemplate={`%s | ${oc(data).site.siteMetadata.title('titleTemplate title is missing')}`}
						meta={[
							{
								name: `description`,
								content: metaDescription
							},
							{
								property: `og:title`,
								content: title
							},
							{
								property: `og:description`,
								content: metaDescription
							},
							{
								property: `og:type`,
								content: `website`
							},
							{
								name: `twitter:card`,
								content: `summary`
							},
							{
								name: `twitter:creator`,
								content: oc(data).site.siteMetadata.author('author name is missing')
							},
							{
								name: `twitter:title`,
								content: title
							},
							{
								name: `twitter:description`,
								content: metaDescription
							}
						]
							.concat(
								keywords && keywords.length > 0
									? {
											name: `keywords`,
											content: keywords.join(`, `)
									  }
									: []
							)
							.concat(meta ? meta : [])}
					/>
				)
			}}
		/>
	)
}

export default SEO

const detailsQuery = graphql`
	query DefaultSEOQuery {
		site {
			siteMetadata {
				title
				description
				author
			}
		}
	}
`
