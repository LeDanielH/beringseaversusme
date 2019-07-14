import React from 'react'
import { round } from '../utilities/numbers-mod'
export interface ISvgProps {
	vbWidth: number
	vbHeight: number
	children: React.ReactNode
	size?: number
	width?: number
	height?: number
	sizeRatio?: number
	overflowFixScaleRatio?: number // helper - used for svg drawed charts - (e.g. stroke can overflow viewbox)
	overflowFixPosition?: number // helper - used for svg drawed charts - (e.g. stroke can overflow viewbox)
}
export const Svg = ({
	size,
	width,
	height,
	vbWidth,
	vbHeight,
	sizeRatio = 1,
	overflowFixScaleRatio = 1,
	overflowFixPosition = 0,
	children
}: ISvgProps) => {
	return (
		<svg
			width={size || width || round(vbWidth * sizeRatio)}
			height={size || height || round(vbHeight * sizeRatio)}
			viewBox={`0 0 ${vbWidth} ${vbHeight}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid meet"
		>
			<g
				transform={`scale(${overflowFixScaleRatio} ${overflowFixScaleRatio})`}
			>
				<g
					transform={`translate(${overflowFixPosition} ${overflowFixPosition})`}
				>
					{children}
				</g>
			</g>
		</svg>
	)
}
