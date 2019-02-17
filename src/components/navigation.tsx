import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'

import { getDefaultPageData, idToWord } from '../helpers/dir-name-parser'

const renderLink = (relativeDir: string, index: number) => {
	const navLink = getDefaultPageData(relativeDir)
	return (
		<Link
			key={`${relativeDir}-${index}`}
			to={`/${navLink.slug}`}
			activeClassName={'active'}
		>
			{navLink.title}
		</Link>
	)
}

const renderNav = (data: any) =>
	data
		.reduce((accumulator: any, item: any) => {
			const { category } = item.node.childMarkdownRemark.frontmatter
			if (accumulator.indexOf(category) === -1)
				return [...accumulator, category]
			return accumulator
		}, [])
		.map((item: any, index: any) => (
			<div key={`${item}-${index}`}>
				<nav>
					<h4>{idToWord(item)}</h4>
					<div>
						{data
							.filter(
								(post: any) =>
									post.node.childMarkdownRemark.frontmatter
										.category === item
							)
							.map((navitem: any, index: number) => {
								const { relativeDirectory } = navitem.node
								return renderLink(relativeDirectory, index)
							})}
					</div>
				</nav>
			</div>
		))

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
		render={navData => <nav>{renderNav(navData.allFile.edges)}</nav>}
	/>
)
