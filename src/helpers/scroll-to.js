export function scrollTo(element, to, duration) {
	const start = element.scrollTop
	let change = to - start
	let currentTime = 0
	const increment = 20

	const animateScroll = () => {
		currentTime += increment
		element.scrollTop = Math.easeInOutQuad(
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

Math.easeInOutQuad = (t, b, c, d) => {
	if ((t /= d / 2) < 1) return (c / 2) * t * t + b
	return (-c / 2) * (--t * (t - 2) - 1) + b
}

Math.easeInOutCubic = (t, b, c, d) => {
	if ((t /= d / 2) < 1) return (c / 2) * t * t * t + b
	return (c / 2) * ((t -= 2) * t * t + 2) + b
}

Math.easeInOutSine = (t, b, c, d) => {
	return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b
}
// took easing functions from here http://easings.net/
// copied easing code from here http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js
