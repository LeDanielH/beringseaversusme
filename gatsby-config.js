module.exports = {
	siteMetadata: {
		title: 'beringseaversus.me',
		author: 'Daniel Zeman',
		description: 'Bering Sea fishing',
		siteUrl: 'https://beringseaversus.me'
	},
	pathPrefix: '/beringseaversusme',
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
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [`gatsby-remark-copy-linked-files`] // just in case those previously mentioned remark plugins sound cool :)
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
			resolve: `gatsby-plugin-typescript`,
			options: {
				isTSX: false, // defaults to false
				allExtensions: false // defaults to false
			}
		},
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				// Setting a color is optional.
				color: `tomato`,
				// Disable the loading spinner.
				showSpinner: false
			}
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: ['gatsby-remark-component']
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// replace "UA-XXXXXXXXX-X" with your own Tracking ID
				trackingId: 'UA-53689917-1'
			}
		}
	],
	mapping: {
		'MarkdownRemark.frontmatter.author': `AuthorYaml`
	}
}
