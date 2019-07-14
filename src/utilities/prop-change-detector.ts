/* tslint:disable:no-console */
export function propChangeDetector(props: any, nextProps: any) {
	Object.keys(nextProps)
		.filter(key => nextProps[key] !== props[key])
		.forEach(key =>
			console.log(
				'changed property:',
				key,
				'from',
				props[key],
				'to',
				nextProps[key]
			)
		)
}
