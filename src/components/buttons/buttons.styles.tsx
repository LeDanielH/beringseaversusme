import styled, { css, CSSObject } from 'styled-components'
import { padding, position, rem } from 'polished'
import React, { ButtonHTMLAttributes } from 'react'
import {
	IButtonIconWrapperProps,
	IButtonLabelStyledProps,
	IButtonStyledProps
} from './buttons.types'
import { FlexChild, FlexParent } from '../layout-flex'
import { theme } from '../../styles/theme'
import { withUnit, withTransition } from '@householdjs/utils'
import { ChildrenProp } from '../../types/common'

const baseButtonLayoutStyles: CSSObject = {
	height: rem(theme.sizes.btnHeight),
	borderRadius: rem(theme.border.radius)
}

const buttonTransitionStyles: CSSObject = {
	...withTransition('background-color')
}

export const ButtonStyled = styled('button').attrs(
	({ type }: ButtonHTMLAttributes<HTMLButtonElement>) => ({
		type: type || 'button'
	})
)<IButtonStyledProps>(({ backgroundColor, color }: IButtonStyledProps) => ({
	background: backgroundColor || theme.colors.grayLightest,
	color: color || theme.colors.text,
	fontSize: withUnit(0.8, 'rem'),
	fontFamily: theme.typography.ffBody,
	fontWeight: 'bold',
	textAlign: 'center',
	...baseButtonLayoutStyles,
	border: 0,
	...padding(0, withUnit(2, 'rem')),
	cursor: 'pointer',
	position: 'relative'
}))

export const ButtonGradientHoverLayer = styled('span')`
	background-color: rgba(0, 0, 0, 0);
	${css(baseButtonLayoutStyles)};
	${css(buttonTransitionStyles)};
	display: block;
	${position('absolute', 0)}
`

export const ButtonLabelStyled = styled(({ ...rest }) => (
	<FlexChild {...rest} as="span" />
))<ChildrenProp & IButtonLabelStyledProps>(
	({ color }: ChildrenProp & IButtonLabelStyledProps) => ({
		fontSize: withUnit(0.8, 'rem'),
		fontFamily: theme.typography.ffBody,
		fontWeight: 'bold',
		textAlign: 'center',
		color: color || theme.colors.text,
		lineHeight: 1
	})
)

export const ButtonGradientLabelWrapper = styled(({ ...rest }) => (
	<FlexParent {...rest} as="span" alignItems="center" fullWidth />
))({
	position: 'relative',
	zIndex: 1
})

export const ButtonIconWrapper = styled(({ ...rest }) => (
	<FlexChild {...rest} as="span" />
))<IButtonIconWrapperProps>`
	font-size: 0;
	${({ direction }) =>
		direction === 'left'
			? 'padding-right: 0.5rem'
			: 'padding-left: 0.5rem;'};
	transform: translate3d(0, 0, 0);
	${css(
		withTransition('transform', {
			durationInMs: theme.transition.duration * 0.5
		})
	)};
`

export const ButtonPrimaryStyled = styled(({ ...rest }) => (
	<ButtonStyled
		{...rest}
		backgroundColor={theme.colors.blue}
		color={theme.colors.white}
	/>
))`
	&:hover,
	&:focus {
		${ButtonIconWrapper} {
			transform: translate3d(${rem(theme.transition.distance)}, 0, 0);
		}
		${ButtonGradientHoverLayer} {
			background-color: ${theme.colors.red};
		}
	}
`

export const ButtonDefaultStyled = styled(({ ...rest }) => (
	<ButtonStyled {...rest} />
))`
	${buttonTransitionStyles};
	&:hover,
	&:focus {
		background: ${theme.colors.grayLighter};
		${ButtonIconWrapper} {
			transform: translate3d(-${rem(theme.transition.distance)}, 0, 0);
		}
	}
`
