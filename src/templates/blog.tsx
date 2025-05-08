import React from 'react'
import Layout from '../components/gatsby_to-be-removed/layout'
import { graphql } from 'gatsby'
import { getDefaultPageData } from '../utilities/dir-name-parser'
import { oc } from 'ts-optchain'
import { PageContext } from '../types/gatsby-config'
import { Query } from '../../gatsby-generated-types'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { FormattedMessage, Link } from 'gatsby-plugin-react-intl'

type TemplateProps = {
	data: Query
	pageContext: PageContext
}

const renderFooterLink = (relativeDir: any, direction: 'prev' | 'next') => {
	const { slug, title, titleIntl } = getDefaultPageData(relativeDir)
	const isNext = direction === 'next'
	return (
		<Link rel={direction} to={slug}>
			{!isNext && `← `}
			<FormattedMessage id={titleIntl} defaultMessage={title} />
			{isNext && ` →`}
		</Link>
	)
}
const Template = ({ pageContext, data }: TemplateProps) => {
	const { previous, next, date, title, titleIntl } = pageContext
	const previousRelativeDirectory = oc(previous).slug()
	const nextRelativeDirectory = oc(next).slug()
	const body = oc(data).mdx.body('no template available')
	const maybePrevLink = previousRelativeDirectory ?
		renderFooterLink(previousRelativeDirectory, 'prev') : null;

	const maybeNextLink = nextRelativeDirectory ?
		renderFooterLink(nextRelativeDirectory, 'next') : null;


	return (
		<Layout>
			<div>
				<header>
					<h1>
						<FormattedMessage
							id={titleIntl}
							defaultMessage={title}
						/>
					</h1>
					<h3>{date}</h3>
				</header>
				<article>
					<MDXProvider>
						<MDXRenderer>{body}</MDXRenderer>
					</MDXProvider>
				</article>
				<footer>
					<ul>
						{maybePrevLink}
						{maybeNextLink}
					</ul>
				</footer>
			</div>
		</Layout>
	)
}

export default Template

export const pageQuery = graphql`
	query BlogPostQuery($id: String) {
		mdx(id: { eq: $id }) {
			body
		}
	}
`
