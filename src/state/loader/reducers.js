import actions from '../constants'

const initialState = {
	isLoading: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case actions.loader.setLoaderVisibility:
			return {
				...state,
				isLoading: action.isLoading
			}
		default:
			return state
	}
}
