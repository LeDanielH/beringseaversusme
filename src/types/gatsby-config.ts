export interface PageContext {
	previous: string
	next: string
	date: string
	title: string
	relativeDirectory: string
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
