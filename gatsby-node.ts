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

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
})

const path = require('path')
import { getDefaultPageData } from './src/utilities/dir-name-parser'
import { GatsbyCreatePages, PageInput } from './src/types/gatsby-config'
import { Query, MdxEdge } from './gatsby-generated-types'

// todo remove any from this file

const getMarkdownPages = (fn: any) =>
	fn(`{
		allMdx(sort: {
			fields: slug,
			order: DESC,
		}) {
			edges {
				node {
					slug
					id
				}
			}
		}
    }`)

const getPreviousPost = (
	index: number,
	edges: Array<MdxEdge>
): MdxEdge['node'] | null => {
	return index === edges.length - 1 ? null : edges[index + 1].node
}

const getNextPost = (
	index: number,
	edges: Array<MdxEdge>
): MdxEdge['node'] | null => {
	return index === 0 ? null : edges[index - 1].node
}

const createPosts = (data: Query, createPage: (params: PageInput) => void) => {
	const { edges } = data.allMdx
	return (
		edges.length > 0 &&
		edges.map((post, index: number) => {
			if (post.node.slug) {
				const previous = getPreviousPost(index, edges)
				const next = getNextPost(index, edges)
				const { date, title, slug, titleIntl } = getDefaultPageData(
					post.node.slug
				)

				const component = path.resolve(`src/templates/blog.tsx`)
				const { id } = post.node

				createPage({
					path: slug,
					component,
					context: {
						previous,
						next,
						date,
						title,
						titleIntl,
						id
					}
				})
			} else {
				throw new Error('missing post.node.slug')
			}
		})
	)
}

const createPages: GatsbyCreatePages = async ({ actions, graphql }) => {
	const { createPage } = actions
	const result = await getMarkdownPages(graphql).catch((err) => {
		console.warn('Could not load data', err)
		throw err
	})
	return createPosts(result.data, createPage)
}

exports.createPages = createPages
