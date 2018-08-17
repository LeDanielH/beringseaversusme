import actions from '../../state/constants'

function resetTooltipStore() {
	return {
		type: actions.tooltip.resetTooltipStore
	}
}

function _setTooltipContent(content) {
	return {
		type: actions.tooltip.setTooltipContent,
		payload: { content }
	}
}

function _setTooltipPosition(positionX, positionY) {
	return {
		type: actions.tooltip.setTooltipPosition,
		payload: { positionX, positionY }
	}
}

function _setTooltipVisibility(isVisible) {
	return {
		type: actions.tooltip.setTooltipVisibility,
		payload: { isVisible }
	}
}

function _setTooltipWidth(width) {
	return {
		type: actions.tooltip.setTooltipWidth,
		payload: { width }
	}
}

function _setTooltipDirection(direction) {
	return {
		type: actions.tooltip.setTooltipDirection,
		payload: { direction }
	}
}

function _setTooltipCustomClass(customClass) {
	return {
		type: actions.tooltip.setTooltipCustomClass,
		payload: { customClass }
	}
}

function setTooltipContent(content, customClass, width, direction) {
	return dispatch => {
		dispatch(_setTooltipCustomClass(customClass))
		dispatch(_setTooltipContent(content))
		dispatch(_setTooltipWidth(width))
		dispatch(_setTooltipDirection(direction))
	}
}

function showTooltip(position) {
	return (dispatch, getState) => {
		const { positionX, positionY } = getState().tooltip
		const newPosition = position || { positionX, positionY }
		dispatch(
			_setTooltipPosition(newPosition.positionX, newPosition.positionY)
		)
		dispatch(_setTooltipVisibility(true))
	}
}

function hideTooltip() {
	return dispatch => {
		dispatch(_setTooltipCustomClass(''))
		dispatch(_setTooltipPosition(null, null))
		dispatch(_setTooltipVisibility(false))
	}
}

export default {
	showTooltip,
	hideTooltip,
	setTooltipContent,
	resetTooltipStore
}
