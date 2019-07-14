// roundTo should look like this: 0.1 0.01 0.001...
export const round = (numberToShorten: number, roundTo: number = 1): number =>
	roundTo === 0
		? numberToShorten
		: Math.round(numberToShorten / roundTo) * roundTo

export const roundDown = (
	numberToShorten: number,
	roundTo: number = 1
): number =>
	roundTo === 0
		? numberToShorten
		: Math.floor(numberToShorten / roundTo) * roundTo

export const roundUp = (numberToShorten: number, roundTo: number = 1): number =>
	roundTo === 0
		? numberToShorten
		: Math.ceil(numberToShorten / roundTo) * roundTo

export const getAsNumber = <T>(numero: any, defaultValue: T): T | number =>
	!isNaN(numero) ? defaultValue : +numero

export const getPositiveNumber = (numero: any, defaultValue: number = 0) => {
	const value = getAsNumber(numero, defaultValue)
	return Math.max(value, 0)
}

export const getRoundedNumber = (
	numero: any,
	defaultValue: number = 0,
	roundTo: number = 1
) => round(getAsNumber(numero, defaultValue), roundTo)
