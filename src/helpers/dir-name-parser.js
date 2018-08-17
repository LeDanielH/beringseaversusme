const moment = require('moment')

function getDefaultPageData(dir) {
	if (!dir) return
	const slug = extractSlugFromString(dir)
	return {
		slug,
		title: idToWord(slug),
		date: extractDashedDayDateFromString(dir)
	}
}

function extractDashedDayDateFromString(string) {
	const extractedDate = string.substring(0, 10)
	const dateRegex = new RegExp(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)
	const isDateStringValid = dateRegex.test(extractedDate)
	const isDateValid = moment(extractedDate).isValid()
	if (!isDateStringValid)
		throw new Error(
			```string representing date is not valid, 
			yours is ${extractedDate}```
		)
	if (!isDateValid)
		throw new Error(
			```string representing date is not a valid date, 
			the string you are trying to validate is ${extractedDate}```
		)
	return extractedDate
}

function extractSlugFromString(string) {
	const slug = string.substring(10, string.length)
	const slugRegex = new RegExp(/_[a-z0-9-]*/)
	const isValidSlug = slugRegex.test(slug)
	if (!isValidSlug)
		throw new Error(
			```Slug pattern should look like this: _slug or _slug-slug-323. 
			No uppercase letters or special characters. Yours is ${slug}```
		)
	return slug.substring(1)
}

function idToWord(string) {
	return string.replace(/-/g, ' ')
}

module.exports = {
	getDefaultPageData,
	idToWord,
	extractSlugFromString,
	extractDashedDayDateFromString
}
