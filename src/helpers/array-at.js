export function insertAt(arr, item, index) {
	return [...arr.slice(0, index), item, ...arr.slice(index)]
}

export function removeAt(arr, index) {
	return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

export function updateAt(arr, key, value, index) {
	return [
		...arr.slice(0, index),
		{ ...arr[index], [key]: value },
		...arr.slice(index + 1)
	]
}
