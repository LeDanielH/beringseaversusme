import { parseISO, format } from 'date-fns'

export interface IgetDefaultPageData {
	slug: string
	title: string
	titleIntl: string
	date: string
}

const extractTitleFromSlug = (slug: string) => {
	const slugWithoutDashes = idToWord(slug)
	return slugWithoutDashes.replace(/\//g, '')
}

export function getDefaultPageData(directoryName: string): IgetDefaultPageData {
	const slug = extractSlugFromDirectoryName(directoryName)
	return {
		slug,
		title: extractTitleFromSlug(slug),
		titleIntl: slug.replace(/\//g, ''),
		date: extractPrettyDateFromDirectoryName(directoryName)
	}
}

export function extractPrettyDateFromDirectoryName(
	directoryName: string
): string {
	const PAGE_DATE_PATTERN = /[0-9]{4}-[0-9]{2}-[0-9]{2}/
	const extractedDate = directoryName.substring(0, 10)
	const dateRegex = new RegExp(PAGE_DATE_PATTERN)
	const isDateStringValid = dateRegex.test(extractedDate)
	if (!isDateStringValid)
		throw new Error(
			`string representing date is not valid,\n
		yours is ${extractedDate}`
		)
	const dateISO = parseISO(extractedDate)
	return format(dateISO, 'MMMM dd yyyy')
}

export function extractSlugFromDirectoryName(directoryName: string): string {
	const slugRaw = directoryName.substring(10, directoryName.length)
	const SLUG_PATTERN = /_[a-z0-9-]*/
	const slugRegex = new RegExp(SLUG_PATTERN)
	const isValidSlug = slugRegex.test(slugRaw)
	if (!isValidSlug)
		throw new Error(
			`Slug pattern should look like this: _slug or _slug-slug-323.
			No uppercase letters or special characters. Yours is ${slugRaw}`
		)
	const slugWithoutUnderScore = slugRaw.replace(/_/g, '')
	return `/${slugWithoutUnderScore}`
}

export function idToWord(id: string): string {
	return id.replace(/-/g, ' ')
}
