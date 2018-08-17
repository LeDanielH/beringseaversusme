import actions from '../constants'

function setLoaderVisibility(isLoading) {
	return {
		type: actions.loader.setLoaderVisibility,
		isLoading
	}
}

export default {
	setLoaderVisibility
}
