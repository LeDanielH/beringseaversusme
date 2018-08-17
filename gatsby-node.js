/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const moment = require('moment')
const { getDefaultPageData } = require('./src/helpers/dir-name-parser')

const getMarkdownPages = fn =>
	fn(`{
		allFile(filter: {sourceInstanceName: {eq: "pages"}}, sort: {fields: relativeDirectory, order: DESC}) {
			edges {
				node {
					relativeDirectory
				}
			}
		}
    }`)

const createPosts = (edges, createPage) =>
	edges.map((post, index) => {
		const { node } = post
		const previous =
			index === edges.length - 1 ? null : edges[index + 1].node
		const next = index === 0 ? null : edges[index - 1].node
		const date = moment(
			getDefaultPageData(node.relativeDirectory).date
		).format('MMMM Do YYYY')
		const title = getDefaultPageData(node.relativeDirectory).title
		createPage({
			path: `/${getDefaultPageData(node.relativeDirectory).slug}`,
			component: path.resolve(`src/templates/blog/blog.js`),
			context: {
				previous,
				next,
				date,
				title,
				relativeDirectory: node.relativeDirectory
			}
		})
	})

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions
	let result
	try {
		result = await getMarkdownPages(graphql)
	} catch (err) {
		console.warn('Could not load data', err)
		throw err
	}
	const { edges } = result.data.allFile
	return createPosts(edges, createPage)
}
