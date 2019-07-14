import { round } from './numbers-mod'

interface MathExtended extends Math {
	easeInOutQuad(
		currentTime: number,
		start: number,
		change: number,
		duration: number
	): number
	easeInOutCubic(
		currentTime: number,
		start: number,
		change: number,
		duration: number
	): number
	easeInOutSine(
		currentTime: number,
		start: number,
		change: number,
		duration: number
	): number
}

const MathExt: MathExtended = Math as MathExtended

// eslint-disable-next-line
MathExt.easeInOutQuad = (t, b, c, d) =>
	// eslint-disable-next-line
	(t /= d / 2) < 1 ? (c / 2) * t * t + b : (-c / 2) * (--t * (t - 2) - 1) + b

// eslint-disable-next-line
MathExt.easeInOutCubic = (t, b, c, d) =>
	// eslint-disable-next-line
	(t /= d / 2) < 1
		? (c / 2) * t * t * t + b
		: (c / 2) * ((t -= 2) * t * t + 2) + b

// eslint-disable-next-line
MathExt.easeInOutSine = (t, b, c, d) =>
	(-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b
// took easing functions from here http://easings.net/
// copied easing code from here http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js

export function getItemsPosition(item: HTMLElement) {
	const box = item.getBoundingClientRect()

	const { body } = document
	const { documentElement } = document

	const scrollTop =
		window.pageYOffset || documentElement.scrollTop || body.scrollTop
	const scrollLeft =
		window.pageXOffset || documentElement.scrollLeft || body.scrollLeft

	const clientTop = documentElement.clientTop || body.clientTop || 0
	const clientLeft = documentElement.clientLeft || body.clientLeft || 0

	const top = box.top + scrollTop - clientTop
	const left = box.left + scrollLeft - clientLeft

	return { x: round(left), y: round(top) }
}

// helper from previous job :)
export function scrollTo(
	parent: HTMLElement,
	childOffset: number,
	duration: number
) {
	const start = parent.scrollTop
	const change = childOffset - start
	let currentTime = 0
	const increment = 20

	const animateScroll = () => {
		currentTime += increment
		parent.scrollTop = MathExt.easeInOutQuad(
			currentTime,
			start,
			change,
			duration
		)

		if (currentTime < duration) {
			setTimeout(animateScroll, increment)
		}
	}

	animateScroll()
}
