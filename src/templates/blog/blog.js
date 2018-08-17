import React from 'react'
import Layout from '../../components/layout'
import style from './blog.module.scss'
import { graphql, Link } from 'gatsby'
import { getDefaultPageData } from '../../helpers/dir-name-parser'

const Template = ({ data, pageContext }) => {
	const { file } = data
	const { html } = file.childMarkdownRemark
	const { previous, next, date, title } = pageContext
	return (
		<Layout>
			<div className={style.blog}>
				<header className={style.header}>
					<h1 className={style.title}>{title}</h1>
					<h3 className={style.date}>{date}</h3>
				</header>
				<article
					className={style.content}
					dangerouslySetInnerHTML={{ __html: html }}
				/>
				<footer>
					<ul>
						{previous && (
							<li>
								<Link
									to={`/${
										getDefaultPageData(
											previous.relativeDirectory
										).slug
									}`}
									rel="prev"
								>
									←{' '}
									{
										getDefaultPageData(
											previous.relativeDirectory
										).title
									}
								</Link>
							</li>
						)}

						{next && (
							<li>
								<Link
									to={`/${
										getDefaultPageData(
											next.relativeDirectory
										).slug
									}`}
									rel="next"
								>
									{
										getDefaultPageData(
											next.relativeDirectory
										).title
									}{' '}
									→
								</Link>
							</li>
						)}
					</ul>
				</footer>
			</div>
		</Layout>
	)
}

export default Template

export const pageQuery = graphql`
	query($relativeDirectory: String!) {
		file(relativeDirectory: { eq: $relativeDirectory }) {
			relativeDirectory
			childMarkdownRemark {
				html
			}
		}
	}
`
