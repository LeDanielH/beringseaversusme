interface RatingsDataObject {
	POSITIVE: number
	NEUTRAL: number
	NEGATIVE: number
	NONE: any
}

interface RatingsObject {
	[key: number]: string
}

export const RATINGS_DATA: RatingsDataObject = {
	POSITIVE: 80,
	NEUTRAL: 40,
	NEGATIVE: 20,
	NONE: null
}

const { POSITIVE, NEUTRAL, NEGATIVE, NONE } = RATINGS_DATA

export const RATINGS: RatingsObject = {
	[POSITIVE]: 'ratings:wellDone',
	[NEUTRAL]: 'ratings:goodJob',
	[NEGATIVE]: 'ratings:improve',
	[NONE]: 'ratings:youGained'
}
