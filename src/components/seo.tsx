import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

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

interface DefaultSeoQuery {
	site: {
		siteMetadata: {
			title: string
			description: string
			author: string
		}
	}
}

function SEO({ description, lang, meta, keywords, title }: SeoProps) {
	return (
		<StaticQuery
			query={detailsQuery}
			render={(data: DefaultSeoQuery) => {
				const metaDescription =
					description || data.site.siteMetadata.description
				return (
					<Helmet
						htmlAttributes={{
							lang
						}}
						title={title}
						titleTemplate={`%s | ${data.site.siteMetadata.title}`}
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
								content: data.site.siteMetadata.author
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

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	keywords: []
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
