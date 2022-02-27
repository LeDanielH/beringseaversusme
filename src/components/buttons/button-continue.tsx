import React from 'react'
import {
	ButtonLabelStyled,
	ButtonIconWrapper,
	ButtonPrimaryStyled,
	ButtonGradientHoverLayer,
	ButtonGradientLabelWrapper
} from './buttons.styles'
import { IconArrow } from '../icons/icon-arrow'
import { IButtonPropsWithAttrs } from './buttons.types'
import { theme } from '../../styles/theme'

export const ButtonContinue = ({
	children,
	...rest
}: IButtonPropsWithAttrs) => (
	<ButtonPrimaryStyled {...rest}>
		<ButtonGradientHoverLayer />
		<ButtonGradientLabelWrapper>
			<ButtonLabelStyled color={theme.colors.white}>
				{children}
			</ButtonLabelStyled>
			<ButtonIconWrapper direction="right">
				<IconArrow direction="right" color={theme.colors.white} />
			</ButtonIconWrapper>
		</ButtonGradientLabelWrapper>
	</ButtonPrimaryStyled>
)
