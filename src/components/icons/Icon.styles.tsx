import styled, { css } from 'styled-components'
import { IIconCommonProps } from './Icon.types'
import { position, size as sizePolished } from 'polished'
import { HTMLAttributes } from 'react'
import * as CSS from 'csstype'
import {
	getRotationBasedOnDirection,
	sizeRounderWithUnit,
	withTransition,
	withUnit
} from '../../utilities/styles'
import { FlexParent } from '../layout-flex'
import { theme } from '../../styles/theme'

// SvgIconWrapper makes sure the icon is wrapped with "i" element and that it's always a square (easy and consistent DOM manipulation)
// export svg icons without empty space around it
export const SvgIconWrapper = styled('i')<
	Pick<IIconCommonProps, 'direction' | 'size' | 'withPointer'> &
		HTMLAttributes<HTMLElement>
>`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 0;
    ${({ direction }) =>
		direction &&
		`transform: rotate(${getRotationBasedOnDirection(direction)}deg);`}
    ${({ withPointer }) => withPointer && 'cursor: pointer;'}
    ${({ size }) =>
		size
			? sizePolished(size)
			: sizePolished(withUnit(theme.sizes.iconSize, 'px'))}
    svg {
        display: inline-block;
        max-width: ${({ size }) =>
			size ? sizeRounderWithUnit(size, 'px') : theme.sizes.iconSize};
        flex: 0 0 ${({ size }) =>
			size ? sizeRounderWithUnit(size, 'px') : theme.sizes.iconSize};
        path, circle, rect {
          ${css(withTransition('stroke'))}
        }
    }
`

export interface IIconCircleProps {
	background?: CSS.BackgroundColorProperty | CSS.BackgroundImageProperty // linear gradient is an image
	size?: number
	horizontalAdjustment?: number
}

export const IconCircleStyled = styled(({ ...rest }) => (
	<FlexParent
		{...rest}
		justifyContent="center"
		alignItems="center"
		as="span"
	/>
))<IIconCircleProps>(
	({
		size = theme.sizes.iconCircle,
		background = theme.colors.white,
		horizontalAdjustment
	}: IIconCircleProps) => ({
		...sizePolished(sizeRounderWithUnit(size, 'px')),
		borderRadius: sizeRounderWithUnit(size * 0.5, 'px'),
		background,
		...(horizontalAdjustment
			? {
					i: {
						...position(
							'relative',
							null,
							null,
							null,
							horizontalAdjustment
						)
					}
			  }
			: {})
	})
)

export const IconButtonStyled = styled(
	({ size = theme.sizes.iconButton, ...rest }) => (
		<IconCircleStyled size={size} {...rest} />
	)
)<IIconCircleProps>`
	${css(withTransition('background-color'))};
	cursor: pointer;
	&:hover,
	&:focus {
		background-color: ${theme.colors.grayLightest};
	}
`
