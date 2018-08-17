module.exports = {
	siteMetadata: {
		title: 'beringseaversus.me',
		author: 'Daniel Zeman',
		description: 'Bering Sea fishing',
		siteUrl: 'https://beringseaversus.me'
	},
	pathPrefix: '/beringseaversusme-new',
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				precision: 3
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
				plugins: [] // just in case those previously mentioned remark plugins sound cool :)
			}
		}
	],
	mapping: {
		'MarkdownRemark.frontmatter.author': `AuthorYaml`,
		'ExperienceJson.items.tech': `TechJson`
	}
}
