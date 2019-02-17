/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const format = require('date-fns/format')
import { getDefaultPageData } from './src/helpers/dir-name-parser'

// todo remove any from this file

const getMarkdownPages = (fn: any) =>
	fn(`{
		allFile(filter: {sourceInstanceName: {eq: "pages"}}, sort: {fields: relativeDirectory, order: DESC}) {
			edges {
				node {
					relativeDirectory
				}
			}
		}
    }`)

const createPosts = (edges: any, createPage: any): void =>
	edges.map((post: any, index: number) => {
		const { node } = post
		const previous =
			index === edges.length - 1 ? null : edges[index + 1].node
		const next = index === 0 ? null : edges[index - 1].node
		console.log(node.relativeDirectory)
		const date = format(
			getDefaultPageData(node.relativeDirectory).date,
			'MMMM Do YYYY'
		)
		const title = getDefaultPageData(node.relativeDirectory).title
		createPage({
			path: `/${getDefaultPageData(node.relativeDirectory).slug}`,
			component: path.resolve(`src/templates/blog.tsx`),
			context: {
				previous,
				next,
				date,
				title,
				relativeDirectory: node.relativeDirectory
			}
		})
	})

interface CreatePagesInterface {
	actions: any
	graphql: any
}

exports.createPages = async ({ actions, graphql }: CreatePagesInterface) => {
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
