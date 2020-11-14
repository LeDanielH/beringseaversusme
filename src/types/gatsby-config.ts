import { Mdx } from '../../gatsby-generated-types'

export interface PageContext {
	previous: null | Mdx
	next: null | Mdx
	date: string
	title: string
	titleIntl: string
	id: string
}

export interface PageInput {
	path: string
	component: string
	layout?: string
	context?: PageContext
}

export interface GatsbyActions {
	createPage: (page: PageInput) => void
	deletePage: (page: PageInput) => void
	createRedirect: (opts: {
		fromPath: string
		isPermanent?: boolean
		redirectInBrowser?: boolean
		toPath: string
	}) => void
}

export type GatsbyCreatePages = (fns: {
	graphql: any
	actions: GatsbyActions
}) => void
