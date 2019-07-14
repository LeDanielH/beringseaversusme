import styled from 'styled-components'
import { withUnit } from '../utilities/styles'
import { theme } from '../styles/theme'
interface IFlipperProps {
	isFlipped: boolean
}

const Flipper = styled('div')`
	transition-duration: ${withUnit(theme.transition.duration, 'ms')};
	transition-timing-function: ${theme.transition.easing};
	transition-property: transform;
	will-change: transform;
`

export const FlipperY = styled(Flipper)<IFlipperProps>`
	transform: rotate3d(
		1,
		0,
		0,
		${({ isFlipped }) => (isFlipped ? 180 : 0)}deg
	);
`

export const FlipperX = styled(Flipper)<IFlipperProps>`
	transform: rotate3d(
		0,
		1,
		0,
		${({ isFlipped }) => (isFlipped ? 180 : 0)}deg
	);
`
