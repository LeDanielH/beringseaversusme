import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'
import classnames from 'classnames'

import { getDefaultPageData, idToWord } from '../../helpers/dir-name-parser'
import style from './navigation.module.scss'

const renderNav = data =>
	data
		.reduce((accumulator, item) => {
			const { category } = item.node.childMarkdownRemark.frontmatter
			if (accumulator.indexOf(category) === -1)
				return [...accumulator, category]
			return accumulator
		}, [])
		.map((item, index) => (
			<div key={`${item}-${index}`} className={classnames(style.wrapper)}>
				<nav className={classnames(style.group)}>
					<h4 className={classnames(style.title)}>
						{idToWord(item)}
					</h4>
					<div className={classnames(style.list)}>
						{data
							.filter(
								post =>
									post.node.childMarkdownRemark.frontmatter
										.category === item
							)
							.map((navitem, index) => {
								const { relativeDirectory } = navitem.node
								return (
									<Link
										key={`${relativeDirectory}-${index}`}
										to={`/${
											getDefaultPageData(
												relativeDirectory
											).slug
										}`}
										className={classnames(style.link)}
										activeClassName={'active'}
									>
										{
											getDefaultPageData(
												relativeDirectory
											).title
										}
									</Link>
								)
							})}
					</div>
				</nav>
			</div>
		))

const navigation = () => (
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
		render={navData => (
			<nav className={classnames(style.nav)}>
				{renderNav(navData.allFile.edges)}
			</nav>
		)}
	/>
)

export default navigation
