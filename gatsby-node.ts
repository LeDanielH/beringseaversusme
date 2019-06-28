/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

import { oc } from 'ts-optchain'

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const format = require('date-fns/format')
import { getDefaultPageData } from './src/helpers/dir-name-parser'
import { GatsbyCreatePages } from './src/types/gatsby-config'
import { Query } from './src/types/graphql-types'

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

const createPosts = (data: Query, createPage: any) => {
	const hasEdges = oc(data).allFile.edges().length > 0
	return (
		hasEdges &&
		data.allFile.edges.map((post, index: number) => {
			const { node } = post
			const previous =
				index === data.allFile.edges.length - 1
					? null
					: data.allFile.edges[index + 1].node
			const next = index === 0 ? null : data.allFile.edges[index - 1].node
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
	)
}

const createPages: GatsbyCreatePages = async ({ actions, graphql }) => {
	const { createPage } = actions
	let result
	try {
		result = await getMarkdownPages(graphql)
	} catch (err) {
		console.warn('Could not load data', err)
		throw err
	}
	return createPosts(result.data, createPage)
}

exports.createPages = createPages
