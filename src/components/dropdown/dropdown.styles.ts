import styled from 'styled-components'
import { withUnit } from '@householdjs/utils'
import { theme } from '../../styles/theme'

export interface DropdownStyledProps {
	isOpen: boolean
	height: number
}

export const DropdownStyled = styled('div')<DropdownStyledProps>`
	max-height: ${({ isOpen, height }) =>
		isOpen ? withUnit(height, 'px') : 0};
	overflow: hidden;
	will-change: max-height;
	transition-duration: ${withUnit(theme.transition.duration, 'ms')};
	transition-property: max-height;
	transition-timing-function: ${theme.transition.easing};
	pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
`
