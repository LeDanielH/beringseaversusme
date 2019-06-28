import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import { getDefaultPageData } from '../helpers/dir-name-parser'
import { oc } from 'ts-optchain'

type RelativeDirectoruType = string

interface PrevNextInterface {
	relativeDirectory: RelativeDirectoruType
}

interface TemplateProps {
	data: {
		file: {
			childMarkdownRemark: {
				html: string
			}
		}
	}
	pageContext: {
		previous: PrevNextInterface
		next: PrevNextInterface
		date: string
		title: string
	}
}

const renderFooterLink = (
	relativeDir: RelativeDirectoruType,
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
	const { html } = file.childMarkdownRemark
	const { previous, next, date, title } = pageContext
	return (
		<Layout>
			<div>
				<header>
					<h1>{title}</h1>
					<h3>{date}</h3>
				</header>
				<article dangerouslySetInnerHTML={{ __html: html }} />
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
	query($relativeDirectory: String!) {
		file(relativeDirectory: { eq: $relativeDirectory }) {
			relativeDirectory
			childMarkdownRemark {
				html
			}
		}
	}
`
