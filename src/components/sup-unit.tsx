import React from 'react'

export interface ISupUnitProps {
	unit: string
	sup: number
}

export const SupUnit = ({ unit, sup }: ISupUnitProps) => (
	<span>
		{unit}
		<sup>{sup}</sup>
	</span>
)
