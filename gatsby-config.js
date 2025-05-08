/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
	siteMetadata: {
		title: 'beringseaversus.me',
		author: 'Daniel Zeman',
		description: 'Bering Sea fishing',
		siteUrl: process.env.GATSBY_PAGE_URL
	},
	/* Your site config here */
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `pages`,
				path: `${__dirname}/src/pages/blog`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `blog-data`,
				path: `${__dirname}/src/data`
			}
		},
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				gatsbyRemarkPlugins: [
					`gatsby-remark-copy-linked-files`,
					'gatsby-remark-component'
				] // just in case those previously mentioned remark plugins sound cool :)
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		'gatsby-plugin-offline',
		{
			resolve: `gatsby-plugin-graphql-codegen`,
			options: {
				fileName: `./gatsby-generated-types.ts`,
				documentPaths: ['./src/**/*.{ts,tsx}', './node_modules/gatsby-*/**/*.js'],
				codegen: false // enable when non available
			}
		},
		{
			resolve: `gatsby-plugin-react-intl`,
			options: {
				// language JSON resource path
				path: `${__dirname}/src/intl`,
				// supported language
				languages: [`en`, `cs`],
				// language file path
				defaultLanguage: `en`,
				// option to redirect to `/en` when connecting `/`
				redirect: true
			}
		}
	],
	mapping: {
		'MarkdownRemark.frontmatter.author': `AuthorYaml`
	}
}
