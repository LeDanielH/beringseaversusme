export function insertAt<T>(arr: T[], item: T, index: number): T[] {
	return [...arr.slice(0, index), item, ...arr.slice(index)]
}

export function removeAt<T>(arr: T[], index: number): T[] {
	return [...arr.slice(0, index), ...arr.slice(index + 1)]
}

export function updateAt<T>(
	arr: T[],
	key: keyof T,
	value: any,
	index: number
): T[] {
	return [
		...arr.slice(0, index),
		{ ...arr[index], [key]: value },
		...arr.slice(index + 1)
	]
}
