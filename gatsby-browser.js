/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import createStore from './src/state/store'

const store = createStore()

// if I want to dispatch actions before rendering
// store.dispatch(userActions.loginFromLocalStorage());

export const replaceRouterComponent = ({ history }) => ({ children }) => (
	<Provider store={store}>
		<Router history={history}>{children}</Router>
	</Provider>
)
