import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { oc } from 'ts-optchain'

import { getDefaultPageData, idToWord } from '../helpers/dir-name-parser'
import { NavigationQueryQuery } from '../types/graphql-types'
import  {NavLinkStyled } from './styled/Nav'

const uuidv1 = require('uuid/v1')

const renderLink = (relativeDir?: string | null): React.ReactNode => {
	if (relativeDir) {
		const uuid = uuidv1()
		const navLink = getDefaultPageData(relativeDir)
		return (
			<NavLinkStyled
				key={`${relativeDir}-${uuid}`}
				to={`/${navLink.slug}`}
				activeClassName={'active'}
			>
				{navLink.title}
			</NavLinkStyled>
		)
	} else {
		return null
	}
}

const renderNav = (data: NavigationQueryQuery): React.ReactNode => {
	const hasEdges = oc(data).allFile.edges().length > 0
	if (hasEdges) {
		return data.allFile.edges
			.reduce((accumulator, item) => {
				const { category } = item.node.childMarkdownRemark.frontmatter
				if (accumulator.indexOf(category) === -1)
					return [...accumulator, category]
				return accumulator
			}, [])
			.map(item => {
				const uuid = uuidv1()
				return (
					<div key={`${item}-${uuid}`}>
						<nav>
							<h4>{idToWord(item)}</h4>
							<div>
								{data.allFile.edges
									.filter(
										post =>
											oc(
												post
											).node.childMarkdownRemark.frontmatter.category() ===
											item
									)
									.map(navItem => {
										const {
											relativeDirectory
										} = navItem.node
										return renderLink(relativeDirectory)
									})}
							</div>
						</nav>
					</div>
				)
			})
	} else {
		return null
	}
}

export const Navigation = () => (
	<StaticQuery
		query={graphql`
			query NavigationQuery {
				allFile(
					filter: { sourceInstanceName: { eq: "pages" } }
					sort: { fields: relativeDirectory, order: ASC }
				) {
					edges {
						node {
							relativeDirectory
							childMarkdownRemark {
								frontmatter {
									category
								}
							}
						}
					}
				}
			}
		`}
		render={(navData: NavigationQueryQuery) => (
			<nav>{renderNav(navData)}</nav>
		)}
	/>
)
