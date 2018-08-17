import { combineReducers } from 'redux'

import loader from './loader/reducers'
import tooltip from './tooltip/reducers'

const rootReducer = combineReducers({
	loader,
	tooltip
})

export default rootReducer
