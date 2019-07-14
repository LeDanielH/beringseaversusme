import React from 'react'
import Layout from '../components/gatsby_to-be-removed/layout'
import { graphql, Link } from 'gatsby'
import { getDefaultPageData } from '../utilities/dir-name-parser'
import { oc } from 'ts-optchain'
import RehypeReact from 'rehype-react'
import { PageQueryQuery, SitePageContext } from '../types/graphql-types'
import { $PropertyType } from 'utility-types'

const renderAst = new RehypeReact({
	createElement: React.createElement,
	components: {}
}).Compiler

interface TemplateProps {
	data: PageQueryQuery
	pageContext: SitePageContext
}

const renderFooterLink = (
	relativeDir: $PropertyType<SitePageContext, 'relativeDirectory'>,
	direction: 'prev' | 'next'
) => {
	const toWhere = getDefaultPageData(relativeDir)
	const isNext = direction === 'next'
	return (
		<Link rel={direction} to={`/${toWhere.slug}`}>
			{!isNext && `← `}
			{toWhere.title}
			{isNext && ` →`}
		</Link>
	)
}
const Template = ({ data, pageContext }: TemplateProps) => {
	const { file } = data
	const { htmlAst } = file.childMarkdownRemark
	const { previous, next, date, title } = pageContext
	return (
		<Layout>
			<div>
				<header>
					<h1>{title}</h1>
					<h3>{date}</h3>
				</header>
				<article>{renderAst(htmlAst)}</article>
				<footer>
					<ul>
						{oc(previous).relativeDirectory() &&
							renderFooterLink(
								previous.relativeDirectory,
								'prev'
							)}
						{oc(next).relativeDirectory() &&
							renderFooterLink(next.relativeDirectory, 'next')}
					</ul>
				</footer>
			</div>
		</Layout>
	)
}

export default Template

export const pageQuery = graphql`
	query PageQuery($relativeDirectory: String!) {
		file(relativeDirectory: { eq: $relativeDirectory }) {
			relativeDirectory
			childMarkdownRemark {
				htmlAst
			}
		}
	}
`
