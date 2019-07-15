import React from 'react'
import styled from 'styled-components/native'
import { Svg } from './svg'
import { FlexParent } from './layout-flex'
import { theme } from '../styles/theme'
import { round } from '../utilities/numbers-mod'
import { MAX_PRECISION } from '../constants/common'
import { ChildrenProp } from '../types/common'

const RadialProgressWrapper = styled((props: ChildrenProp) => (
	<FlexParent justifyContent="center" alignItems="center" fullWidth>
		{props.children}
	</FlexParent>
))`
	position: relative;
`

interface IRadialProgressProps {
	progress: number
	strokeWidthRatio?: number
	children?: React.ReactNode
	size?: number
	progressColor?: string
	staticColor?: string
}
export class RadialProgress extends React.Component<IRadialProgressProps> {
	render() {
		let { progress = 0.5 } = this.props
		const {
			children,
			strokeWidthRatio = 0.8,
			size = theme.sizes.iconSize,
			staticColor = theme.colors.grayLightest,
			progressColor = theme.colors.black
		} = this.props
		if (progress > 1) {
			progress = 0
		}
		const progressShortened = round(progress, MAX_PRECISION)
		const strokeWidth = round(
			size / 2 - (size / 2) * strokeWidthRatio,
			MAX_PRECISION
		)
		// it can be a minus value before dimensions update -> throwing error in console
		const radius =
			size / 2 - strokeWidth / 2 < 0 ? 1 : size / 2 - strokeWidth / 2
		const radiusShortened = round(radius, 0.001)
		const circumference = round(2 * Math.PI * radius, MAX_PRECISION)
		const baseCircleStrokeDashOffset = -round(
			circumference * progressShortened,
			MAX_PRECISION
		)
		const progressCircleStrokeDashOffset = round(
			circumference * (1 - progressShortened),
			MAX_PRECISION
		)
		return (
			<RadialProgressWrapper>
				{children}
				<Svg size={size} vbWidth={size} vbHeight={size}>
					<circle
						cx={size / 2}
						cy={size / 2}
						r={radiusShortened}
						fill="none"
						stroke={staticColor}
						strokeWidth={strokeWidth * 0.5}
						strokeDasharray={`${circumference}`}
						strokeDashoffset={baseCircleStrokeDashOffset}
						transform={`rotate(270 ${size / 2} ${size / 2})`}
					/>
					<circle
						cx={size / 2}
						cy={size / 2}
						r={radiusShortened}
						fill="none"
						stroke={progressColor}
						strokeWidth={strokeWidth}
						strokeDasharray={`${circumference}`}
						strokeDashoffset={progressCircleStrokeDashOffset}
						strokeLinecap="round"
						transform={`rotate(-90 ${size / 2} ${size / 2})`}
					/>
				</Svg>
			</RadialProgressWrapper>
		)
	}
}
