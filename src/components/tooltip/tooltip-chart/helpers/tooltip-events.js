import React from 'react'
import TooltipChart from '../index'
import * as moment from 'moment'

export function handleMouseEnter(event, callback, tooltipData, width) {
	tooltipData.color = window
		.getComputedStyle(event.target, null)
		.getPropertyValue('fill')
	const content = <TooltipChart tooltipData={tooltipData} />
	callback(content, 'chart', width)
}

export function handleMouseMove(event, callback) {
	const offsetY = 9
	let lastMouseMove = 0
	if (lastMouseMove + 16 > moment.now()) return
	lastMouseMove = moment.now()
	const position = {
		positionX: event.clientX,
		positionY: event.clientY - offsetY
	}
	callback(position)
}
