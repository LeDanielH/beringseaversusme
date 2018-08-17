export function getItemsDimention(item) {
	return {
		width: item.getBoundingClientRect().width,
		height: item.getBoundingClientRect().height
	}
}

export function getItemsPosition(item) {
	// crossbrowser version
	const box = item.getBoundingClientRect()

	const body = document.body
	const docEl = document.documentElement

	const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
	const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft

	const clientTop = docEl.clientTop || body.clientTop || 0
	const clientLeft = docEl.clientLeft || body.clientLeft || 0

	const top = box.top + scrollTop - clientTop
	const left = box.left + scrollLeft - clientLeft

	return { itemX: Math.round(left), itemY: Math.round(top) }
}

export function getPaddings(item) {
	return {
		paddingTop: parseInt(
			window.getComputedStyle(item).getPropertyValue('padding-top'),
			10
		),
		paddingRight: parseInt(
			window.getComputedStyle(item).getPropertyValue('padding-right'),
			10
		),
		paddingBottom: parseInt(
			window.getComputedStyle(item).getPropertyValue('padding-bottom'),
			10
		),
		paddingLeft: parseInt(
			window.getComputedStyle(item).getPropertyValue('padding-left'),
			10
		)
	}
}
