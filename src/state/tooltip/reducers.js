import actions from '../../state/constants'

const initialState = {
	content: '',
	positionX: null,
	positionY: null,
	isVisible: false,
	customClass: '',
	width: 100,
	direction: 'top'
}

export default (state = initialState, action) => {
	switch (action.type) {
		case actions.tooltip.resetTooltipStore:
			return {
				...initialState
			}
		case actions.tooltip.setTooltipContent:
			return {
				...state,
				content: action.payload.content
			}
		case actions.tooltip.setTooltipPosition:
			return {
				...state,
				positionX: action.payload.positionX,
				positionY: action.payload.positionY
			}
		case actions.tooltip.setTooltipVisibility:
			return {
				...state,
				isVisible: action.payload.isVisible
			}

		case actions.tooltip.setTooltipWidth:
			return {
				...state,
				width: action.payload.width
			}

		case actions.tooltip.setTooltipDirection:
			return {
				...state,
				direction: action.payload.direction
			}

		case actions.tooltip.setTooltipCustomClass:
			return {
				...state,
				customClass: action.payload.customClass
			}

		default:
			return state
	}
}
