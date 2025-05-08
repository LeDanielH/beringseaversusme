import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { oc } from 'ts-optchain'
import { FormattedMessage } from 'gatsby-plugin-react-intl'

import { getDefaultPageData, idToWord } from '../../utilities/dir-name-parser'
import { NavLinkStyled } from './nav-link'
import { MdxEdge, Query } from '../../../gatsby-generated-types'

const renderLink = (
	directoryName: string | null | undefined,
	id: string
): React.ReactNode => {
	if (directoryName) {
		const { slug, title, titleIntl } = getDefaultPageData(directoryName)

		return (
			<NavLinkStyled
				key={`${slug}-${id}`}
				to={slug}
				activeClassName={'active'}
			>
				<FormattedMessage id={titleIntl} defaultMessage={title} />
			</NavLinkStyled>
		)
	} else {
		return null
	}
}

const renderLinks = (edges: Array<MdxEdge>, categoryId: string) => {
	return edges.reduce((acc, post) => {
		if (oc(post).node.frontmatter.category() === categoryId) {
			const { slug, id } = post.node
			acc.push(renderLink(slug, id) as JSX.Element)
		}
		return acc
	}, [] as JSX.Element[])
}

const getPostsCategories = (edges: Array<MdxEdge>): string[] => {
	if (edges.length > 0) {
		return edges.reduce((accumulator: string[], item: MdxEdge) => {
			const category = oc(item).node.frontmatter.category()
			if (category) {
				const missingCategory = accumulator.indexOf(category) === -1
				if (missingCategory) {
					return [...accumulator, category]
				}
			}
			return accumulator
		}, [])
	} else {
		return []
	}
}

const renderNav = (data: Query): React.ReactNode => {
	const hasEdges = data.allMdx.edges.length > 0
	if (hasEdges) {
		const postsCategories = getPostsCategories(data.allMdx.edges)
		return postsCategories.map((categoryId: string) => {
			const categoryTitle = idToWord(categoryId)

			return (
				<div key={`${categoryId}`}>
					<nav>
						<h4>
							<FormattedMessage
								id={categoryId}
								defaultMessage={categoryTitle}
							/>
						</h4>
						<div>{renderLinks(data.allMdx.edges, categoryId)}</div>
					</nav>
				</div>
			)
		})
	} else {
		return null
	}
}

const render = (navData: Query) => <nav>{renderNav(navData)}</nav>
export const Navigation = () => {
	return <StaticQuery
		query={graphql`
			query NavigationQuery {
				allMdx(sort: { fields: slug, order: ASC }) {
					edges {
						node {
							slug
							id
							frontmatter {
								category
							}
						}
					}
				}
			}
		`}
		render={render}
	/>
}
