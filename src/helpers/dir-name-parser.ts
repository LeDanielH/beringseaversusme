const PAGE_DATE_PATTERN = /[0-9]{4}-[0-9]{2}-[0-9]{2}/
const SLUG_PATTERN = /_[a-z0-9-]*/

export interface IgetDefaultPageData {
	slug: string
	title: string
	date: string
}

export function getDefaultPageData(dir: string): IgetDefaultPageData {
	const slug = extractSlugFromString(dir)
	return {
		slug,
		title: idToWord(slug),
		date: extractDashedDayDateFromString(dir)
	}
}

export function extractDashedDayDateFromString(pageName: string): string {
	const extractedDate = pageName.substring(0, 10)
	const dateRegex = new RegExp(PAGE_DATE_PATTERN)
	const isDateStringValid = dateRegex.test(extractedDate)
	if (!isDateStringValid)
		throw new Error(
			`string representing date is not valid,\n
		yours is ${extractedDate}`
		)
	return extractedDate
}

export function extractSlugFromString(pageName: string): string {
	const slug = pageName.substring(10, pageName.length)
	const slugRegex = new RegExp(SLUG_PATTERN)
	const isValidSlug = slugRegex.test(slug)
	if (!isValidSlug)
		throw new Error(
			`Slug pattern should look like this: _slug or _slug-slug-323. 
			No uppercase letters or special characters. Yours is ${slug}`
		)
	return slug.substring(1)
}

export function idToWord(id: string): string {
	return id.replace(/-/g, ' ')
}
