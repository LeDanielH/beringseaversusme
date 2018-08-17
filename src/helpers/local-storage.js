export const loadFromLocalStorage = itemsName => {
	try {
		const localState = localStorage.getItem(itemsName)
		return JSON.parse(localState)
	} catch (err) {
		console.error('Could not load data from localStorage', err, itemsName)
		// ignore and continue
	}

	return null
}

export const saveToLocalStorage = (itemsName, itemsState) => {
	try {
		const state = JSON.stringify(itemsState)
		localStorage.setItem(itemsName, state)
	} catch (err) {
		console.error(
			'Could not save to localStorage',
			err,
			itemsName,
			itemsState
		)
	}
}

export const removeFromLocalStorage = itemsName => {
	try {
		localStorage.removeItem(itemsName)
	} catch (err) {
		console.error('Could not remove item from localStorage', err, itemsName)
	}
}
